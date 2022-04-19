export default function Layout({ children }) {
  return (
    <div className="bg-zinc-900 text-gray-200 min-h-screen antialiased">
      <div className="max-w-screen-xl mx-auto md:px-8">{children}</div>
    </div>
  );
}
