import { json } from "@remix-run/node";
import matter from "gray-matter";

export default async function getArticle(param) {
  try {
    const request = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOGGER_BLOG_ID}/posts/bypath?` +
        new URLSearchParams({
          key: process.env.BLOGGER_API_KEY,
          path: `/${param}.html`,
        }),
      {
        method: "GET",
      }
    );

    const response = await request.json();

    const { data, content: parsedContent } = matter(response.content);

    const article = {
      title: response.title,
      content: parsedContent,
      ...data,
      updatedAt: response.updated,
    };

    return json(article);
  } catch (e) {
    console.error(e);
    return json({ error: 1 });
  }
}
