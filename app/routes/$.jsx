import Layout from "~/components/layout";
import AboutMe from "~/components/about-me";

import { marked } from "marked";

import getArticle from "~/utils/getArticle";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => getArticle(params["*"]);

export default function ArticlePage() {
  const article = useLoaderData();

  return (
    <Layout>
      <div className="md:flex pt-10 justify-around">
        <AboutMe />
        <main className="md:w-full mt-8 md:mt-0 md:max-w-3xl px-6">
          <h2 className="text-3xl font-bold">{article.title}</h2>

          <div className="text-xl mt-2">{article.description}</div>

          <div className="mt-4 text-gray-700 dark:text-gray-300">
            publicado em {new Date(article.updatedAt).toLocaleString("pt-BR")}{" "}
            {article.tags.split(",").map((tag) => (
              <span
                key={tag}
                className="mr-2 bg-gray-700 text-white dark:text-white font-bold py-1 px-2 text-xs rounded-sm"
              >
                {tag.trim()}
              </span>
            ))}
          </div>

          <div
            className="prose md:prose-lg dark:prose-invert mt-6"
            dangerouslySetInnerHTML={{
              __html: marked.parse(article.content),
            }}
          ></div>
        </main>
      </div>
    </Layout>
  );
}
