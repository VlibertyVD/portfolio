export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between px-8 py-6 bg-gray-900 md:flex-row md:px-20">
      <div className="text-lg font-bold text-white uppercase">
        Elite Portfolio
      </div>
      <div className="flex gap-6 mt-4 text-xs font-bold text-gray-400 md:mt-0">
        <a href="#" className="hover:text-teal-400">Privacy Policy</a>
        <a href="#" className="hover:text-teal-400">Terms of Service</a>
        <a href="#" className="hover:text-teal-400">GitHub</a>
        <a href="#" className="hover:text-teal-400">LinkedIn</a>
      </div>
      <div className="mt-4 text-xs text-gray-500 md:mt-0">
        © 2024 ELITE PORTFOLIO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}