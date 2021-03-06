import Layout from "~/components/layout";
import AboutMe from "~/components/about-me";

import { marked } from "marked";

import getArticle from "~/utils/getArticle";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => getArticle(params["*"]);

export const meta = ({ data }) => {
  const coverImage = data.coverImage
    ? data.coverImage
    : "https://blog.guilherssousa.dev/pic.jpg";
  return {
    title: `"${data.title}" por Guilherme Sousa`,
    description: data.description,
    "article:author": "Guilherme Sousa",
    "article:published_time": data.updatedAt,
    "og:title": `"${data.title}" por Guilherme Sousa`,
    "og:description": data.description,
    "og:type": "article",
    "og:image": coverImage,
    "og:image:secure_url": coverImage,
    "twitter:title": `"${data.title}" por Guilherme Sousa`,
    "twitter:image": coverImage,
    "twitter:url": `https://blog.guilherssousa.dev/${data.url}`,
    "twitter:card": "summary_large_image",
  };
};

export default function ArticlePage() {
  const article = useLoaderData();

  return (
    <Layout>
      <div className="md:flex pt-10 justify-around">
        <AboutMe />
        <main className="md:w-full mt-8 md:mt-0 md:max-w-3xl px-6">
          <div className="max-w-prose mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">{article.title}</h2>

            <div className="text-md md:text-xl mt-2">{article.description}</div>

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
          </div>
        </main>
      </div>
    </Layout>
  );
}
