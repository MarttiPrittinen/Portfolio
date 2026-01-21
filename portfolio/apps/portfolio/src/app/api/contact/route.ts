import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Kaikki kentät ovat pakollisia." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "RESEND_API_KEY puuttuu (.env.local / Vercel env)." }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const from = process.env.RESEND_FROM || "Portfolio Contact <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO_EMAIL || "martti.prittinen@gmail.com";

    const result = await resend.emails.send({
      from,
      to: [to],
      subject: `Uusi viesti portfoliolta: ${name}`,
      replyTo: email, 
      html: `<p><b>Nimi:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Viesti:</b><br/>${String(message).replace(/\n/g, "<br/>")}</p>`,
    });

    // Resend SDK palauttaa usein { data, error }
    // mutta joissain versioissa se voi heittää exceptionin, joten molemmat on käsitelty.
    // @ts-ignore
    if (result?.error) {
      // @ts-ignore
      return NextResponse.json({ error: result.error.message || "Resend error", details: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, result });
  } catch (err: any) {
    console.error("CONTACT API ERROR:", err);
    return NextResponse.json(
      { error: err?.message || "Viestin lähetys epäonnistui.", details: String(err) },
      { status: 500 }
    );
  }
}
