import { Response } from "@remix-run/node";

export async function loader() {
  const BASE_URL = "https://krteazydevjournal.blogspot.com";
  const response = await fetch(`${BASE_URL}/sitemap.xml`);
  const data = await response.text();

  return new Response(
    data.replace(
      /(https\:\/\/krteazydevjournal\.blogspot\.com)/g,
      "https://blog.guilherssousa.dev"
    ),
    {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
