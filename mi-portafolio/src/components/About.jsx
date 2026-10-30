import imgAvatar from '../assets/img_avatar.jpeg';

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center gap-12 px-8 py-20 bg-white md:flex-row md:px-20 lg:gap-20">
      
      <div className="flex justify-center w-full md:w-2/5 lg:w-1/3">
        <div className="w-full max-w-sm">
          <img 
            src={imgAvatar}
            alt="Daniel Venegas - Software Developer" 
            className="object-cover w-full h-auto rounded-sm shadow-xl aspect-square"
          />
        </div>
      </div>
      
      <div className="w-full md:w-3/5 lg:w-1/2">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 uppercase">The Identity</h2>
        <p className="mb-4 leading-relaxed text-gray-600">
          I am a Systems Engineering student and Backend Software Developer passionate about building robust, scalable digital infrastructures. My work focuses on fusing server-side logic with technical precision to solve complex architectural challenges.
        </p>
        <p className="mb-10 leading-relaxed text-gray-600">
          With professional experience specializing in Python, Django, and the Odoo ecosystem, I develop efficient REST endpoints, manage relational databases, and streamline workflows. Every architecture I design is built with purpose, prioritizing performance, modularity, and clean, maintainable code.
        </p>
        <div className="flex flex-wrap gap-12">
          <div>
            <h4 className="mb-1 text-xs font-bold text-teal-400 uppercase">Location</h4>
            <p className="text-sm font-semibold text-gray-700">Mérida, Venezuela / Remote</p>
          </div>
          <div>
            <h4 className="mb-1 text-xs font-bold text-teal-400 uppercase">Focus</h4>
            <p className="text-sm font-semibold text-gray-700">Backend & Systems Engineering</p>
          </div>
        </div>
      </div>

    </section>
  );
}