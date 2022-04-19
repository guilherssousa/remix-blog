export default function Header() {
  return (
    <header className="hidden md:flex items-center justify-between md:pt-16">
      <div className="md:w-4/6">
        <h1 className="font-bold text-3xl">krteazy's development journal</h1>
      </div>
      <div className="md:w-2/6 flex items-center justify-end font-bold gap-x-4 cursor-pointer">
        <a>Twitter</a>
        <a>Github</a>
        <a>Linkedin</a>
      </div>
    </header>
  );
}
