export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center py-24 px-8 text-center bg-gray-900">
      <h2 className="mb-6 text-3xl font-bold text-teal-400 uppercase">Contact</h2>
      
      <p className="max-w-xl mb-10 text-gray-400">
        Interested in collaborating, have a proposal, or just want to say hi? The most direct way to reach me is through LinkedIn. My inbox is always open!
      </p>
      
      <a
        href="https://www.linkedin.com/in/daniel-venegas-0b294b230"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-8 py-4 font-bold text-gray-900 transition-all duration-300 bg-teal-400 rounded-sm hover:bg-teal-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]"
      >
        {/* Ícono SVG de LinkedIn */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        Connect on LinkedIn
      </a>
    </section>
  );
}