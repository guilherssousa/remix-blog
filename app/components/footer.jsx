export default function Footer() {
  return (
    <div className="mt-8 h-20 flex items-center justify-between text-gray-700 dark:text-gray-400">
      <span
        onClick={() => {
          window.scrollTo({
            behavior: "smooth",
            top: 0,
          });
        }}
      >
        Get back to top
      </span>
      <span>Thanks for access!</span>
    </div>
  );
}
