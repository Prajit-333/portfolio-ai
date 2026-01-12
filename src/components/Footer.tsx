export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          Designed & Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
