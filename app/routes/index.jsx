import Layout from "~/components/layout";
import AboutMe from "~/components/about-me";
import ArticleLink from "~/components/article-link";

import __articles from "~/data/articles.json";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const request = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/7057463913343102362/posts?` +
      new URLSearchParams({
        key: process.env.BLOGGER_API_KEY,
      }),
    {
      method: "GET",
    }
  );

  const response = await request.json();

  return json(response.items);
};

export default function Index() {
  const articles = useLoaderData();

  return (
    <Layout>
      <div className="md:flex pt-10 justify-around">
        <AboutMe />
        <main className="mt-8 md:mt-0 md:max-w-3xl px-6">
          <div>
            {articles.map((article) => (
              <ArticleLink article={article} key={article.slug} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
