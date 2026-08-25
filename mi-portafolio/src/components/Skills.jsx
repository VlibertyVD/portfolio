import { FaPython, FaDocker, FaLinux, FaReact, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiCplusplus, SiOdoo } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';

export default function Skills() {
  const skillsData = [
    {
      title: "PYTHON",
      desc: "Robust backend development, automation, and high-performance scripting.",
      icon: <FaPython />
    },
    {
      title: "ODOO",
      desc: "Module development, advanced model/view inheritance, and RPC connections.",
      icon: <SiOdoo />
    },
    {
      title: "DJANGO",
      desc: "Building scalable architectures and fast APIs using tools like Django Ninja.",
      icon: <SiDjango />
    },
    {
      title: "SQL",
      desc: "Design, management, and query optimization in relational engines like PostgreSQL and MySQL.",
      icon: <FaDatabase />
    },
    {
      title: "DOCKER",
      desc: "Application containerization to ensure consistent and isolated deployments.",
      icon: <FaDocker />
    },
    {
      title: "LINUX",
      desc: "Server environment administration, fluent terminal usage, and seamless deployments.",
      icon: <FaLinux />
    },
    {
      title: "C++",
      desc: "Object-oriented programming, complex algorithms, and efficient memory management.",
      icon: <SiCplusplus />
    },
    {
      title: "JAVASCRIPT",
      desc: "Dynamic logic, asynchronous integrations, and advanced client-side manipulation.",
      icon: <IoLogoJavascript />
    },
    {
      title: "REACT",
      desc: "Building interactive, modular, and component-based user interfaces.",
      icon: <FaReact />
    },
    {
      title: "GIT",
      desc: "Version control, conflict resolution, and secure collaborative workflows.",
      icon: <FaGitAlt />
    }
  ];

  return (
    <section id="skills" className="px-8 py-20 md:px-20 bg-gray-950">
      {/* Cambié el título a inglés como me pediste antes */}
      <h2 className="mb-12 text-3xl font-bold text-gray-200 uppercase">Technical Arsenal</h2>
      
      {/* Grilla ajustada a 5 columnas en pantallas grandes para que las 10 tarjetas cuadren perfecto */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-start p-6 transition-all duration-300 bg-gray-900 border-t-2 border-gray-800 rounded-md hover:border-teal-400 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(45,212,191,0.2)]"
          >
            <div className="mb-5 text-4xl text-teal-400">
              {skill.icon}
            </div>
            
            <h3 className="mb-3 text-sm font-bold tracking-wider text-white uppercase">
              {skill.title}
            </h3>
            
            <p className="text-sm leading-relaxed text-gray-400">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}