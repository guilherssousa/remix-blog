import Layout from "~/components/layout";
import AboutMe from "~/components/about-me";
import ArticleLink from "~/components/article-link";

import getArticles from "~/utils/getArticles";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => getArticles();

export default function Index() {
  const articles = useLoaderData();

  return (
    <Layout>
      <div className="md:flex pt-10 justify-around">
        <AboutMe />
        <main className="md:w-full mt-8 md:mt-0 md:max-w-3xl px-6">
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
