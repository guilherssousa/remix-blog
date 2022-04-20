import { json } from "@remix-run/node";
import matter from "gray-matter";

export default async function () {
  try {
    const request = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOGGER_BLOG_ID}/posts?` +
        new URLSearchParams({
          key: process.env.BLOGGER_API_KEY,
        }),
      {
        method: "GET",
      }
    );

    const response = await request.json();

    const articles = response.items.map(
      ({ url, published, content, title }) => {
        const { data, content: parsedContent } = matter(content);

        // regex only letters and hyphen
        const regex = /[a-zA-Z0-9-]*\.html/g;
        const slug = url.match(regex)[0].split(".")[0];

        return {
          title: title,
          content: parsedContent,
          ...data,
          tags: data?.tags?.split(",")?.map((tag) => tag.trim()) || [],
          slug: slug,
          published,
        };
      }
    );

    return json(articles);
  } catch (e) {
    console.error(e);

    return json([]);
  }
}
