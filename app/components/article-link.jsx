export default function ArticleLink({ article }) {
  return (
    <article key={article.slug} className="mb-6">
      <a href={`/${article.slug}`} className="group">
        <div className="flex items-baseline justify-between">
          <h3 className="text-xl md:text-2xl group-hover:underline font-bold">
            <span className="mr-2 text-xl md:text-2xl text-gray-400 text-bold">
              #
            </span>
            {article.title}
          </h3>
          <span className="hidden md:inline text-gray-700 dark:text-gray-300">
            {new Date().toLocaleDateString("pt-BR")}
          </span>
        </div>
        <p className="mt-4 dark:text-gray-300 text-gray-700 dark:group-hover:text-gray-100">
          {article.description}
        </p>
      </a>
    </article>
  );
}
