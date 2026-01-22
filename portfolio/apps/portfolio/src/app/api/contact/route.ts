import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(email: string) {
  // Kevyt tarkistus (riittää contact-formiin)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, message: "Kaikki kentät ovat pakollisia." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Sähköpostiosoite ei näytä oikealta." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, message: "RESEND_API_KEY puuttuu (.env.local / Vercel env)." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const from = process.env.RESEND_FROM || "Portfolio Contact <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO_EMAIL || "martti.prittinen@gmail.com";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    // Resend v2 palauttaa tyypillisesti { data, error }
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Uusi viesti portfoliolta: ${name}`,
      // Resend hyväksyy replyTo; joissain tyypeissä se on reply_to — tämä toimii käytännössä.
      replyTo: email,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;">
          <p><b>Nimi:</b> ${safeName}</p>
          <p><b>Email:</b> ${safeEmail}</p>
          <p><b>Viesti:</b><br/>${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, message: error.message || "Viestin lähetys epäonnistui." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { ok: true, message: "Kiitos! Viesti lähetetty." },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("CONTACT API ERROR:", err);
    return NextResponse.json(
      { ok: false, message: err?.message || "Viestin lähetys epäonnistui." },
      { status: 500 }
    );
  }
}
