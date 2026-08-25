export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between px-8 py-6 bg-gray-900 md:flex-row md:px-20">
      <div className="text-lg font-bold text-white uppercase">
        Daniel.Portfolio
      </div>
      <div className="flex gap-6 mt-4 text-xs font-bold text-gray-400 md:mt-0">
        <a 
          href="https://github.com/VlibertyVD" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-colors duration-300 hover:text-teal-400"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/daniel-venegas-0b294b230" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-colors duration-300 hover:text-teal-400"
        >
          LinkedIn
        </a>
      </div>
      <div className="mt-4 text-xs text-gray-500 md:mt-0">
        © 2026 DANIEL VENEGAS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}