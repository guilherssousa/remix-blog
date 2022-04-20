export default function ArticleLink({ article }) {
  return (
    <article className="mb-6">
      <a href={`/${article.slug}`} className="group">
        <div className="flex items-baseline justify-between">
          <h3 className="text-xl md:text-2xl group-hover:underline font-bold">
            <span className="mr-2 text-xl md:text-2xl text-gray-400 text-bold">
              #
            </span>
            {article.title}
          </h3>
          <span className="hidden md:inline text-gray-700 dark:text-gray-300">
            {new Date(article.published).toLocaleString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <p className="mt-4 dark:text-gray-300 text-gray-700 dark:group-hover:text-gray-100">
          {article.description}
        </p>
      </a>
    </article>
  );
}
