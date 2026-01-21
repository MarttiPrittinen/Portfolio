import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "Missing GITHUB_TOKEN in .env.local" },
      { status: 500 }
    );
  }

  const query = `
    query {
      user(login: "MarttiPrittinen") {
        pinnedItems(first: 4, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              url
              description
              primaryLanguage { name }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "portfolio-app",
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: "GitHub request failed", details: text },
      { status: 500 }
    );
  }

  const json = await res.json();
  const nodes = json?.data?.user?.pinnedItems?.nodes ?? [];

  return NextResponse.json(nodes);
}
