export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
      <div className="text-xl font-bold tracking-tighter text-gray-900 uppercase">
        Daniel<span className="text-teal-400">.</span>Portfolio
      </div>
      <div className="hidden space-x-8 text-sm font-semibold tracking-wide uppercase md:flex">
        <a href="#home" className="text-teal-400 border-b-2 border-teal-400">Home</a>
        <a href="#about" className="hover:text-teal-400">About</a>
        <a href="#skills" className="hover:text-teal-400">Skills</a>
        <a href="#projects" className="hover:text-teal-400">Projects</a>
      </div>
      <a 
        href="#contact" 
        className="px-6 py-2 text-sm font-bold text-white uppercase transition-colors duration-300 bg-teal-400 rounded-sm hover:bg-teal-500"
      >
        Contact
      </a>
    </nav>
  );
}