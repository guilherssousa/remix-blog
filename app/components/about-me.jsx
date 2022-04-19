export default function AboutMe() {
  return (
    <aside className="md:max-w-sm flex items-center md:flex-col px-6">
      <img
        className="w-24 h-24 md:h-36 md:w-36 rounded-full"
        width="144"
        height="144"
        alt="Hi, it's me"
        src="https://github.com/guilherssousa.png"
      />
      <div className="ml-4 mr-2 md:ml-0 md:text-center">
        <h2 className="text-2xl font-bold mt-4">Guilherme Sousa</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300 md:text-left">
          Software developer based in Brazil, currently working as a front-end
          developer at Mais Esports.
        </p>
      </div>
    </aside>
  );
}
