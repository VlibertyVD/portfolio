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
      <button className="px-6 py-2 text-sm font-bold text-white uppercase bg-teal-400 hover:bg-teal-500">
        Contactar
      </button>
    </nav>
  );
}