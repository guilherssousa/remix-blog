import Header from "~/components/header";
import Layout from "~/components/layout";

import articles from "~/data/articles.json";

export default function Index() {
  return (
    <Layout>
      <Header />
      <div className="md:flex pt-10 items-center justify-between">
        <aside className="md:max-w-sm flex items-center justify-center md:flex-col px-6">
          <img
            className="w-24 h-24 md:h-36 md:w-36 rounded-full"
            width="144"
            height="144"
            alt="Hi, it's me"
            src="https://github.com/guilherssousa.png"
          />
          <div className="ml-4 md:ml-0 md:text-center">
            <h2 className="text-2xl font-bold mt-4">Guilherme Sousa</h2>
            <p className="mt-2 text-gray-300 md:text-left">
              Software developer based in Brazil, currently working as a
              front-end developer at Mais Esports.
            </p>
          </div>
        </aside>
        <main className="mt-8 md:mt-0 md:max-w-3xl px-6">
          <div>
            {articles.map((article, index) => (
              <article key={article.slug} className="mb-6">
                <a href={`/${article.slug}`} className="group">
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline">
                      <span className="hidden md:inline-block mr-2 text-2xl text-gray-400 text-bold">
                        #
                      </span>
                      <h3 className="text-xl md:text-2xl group-hover:underline font-bold">
                        {article.title}
                      </h3>
                    </div>
                    <span className="hidden md:inline text-gray-300">
                      {new Date().toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-300 group-hover:text-gray-100">
                    {article.description}
                  </p>
                </a>
              </article>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
