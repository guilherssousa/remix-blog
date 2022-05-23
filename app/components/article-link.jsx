import { Link } from "@remix-run/react";

export default function ArticleLink({ article }) {
  return (
    <article className="mb-6">
      <Link to={`/${article.slug}`} className="group">
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
            })}
          </span>
        </div>
        <p className="mt-4 dark:text-gray-300 text-gray-700 dark:group-hover:text-gray-100">
          {article.description}
        </p>
      </Link>
      <div className="mt-4">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="mr-2 bg-gray-700 text-white dark:text-white font-bold py-1 px-2 text-xs rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
