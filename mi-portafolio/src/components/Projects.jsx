import priceMasterImg from '../assets/price_master.png';
import priceCianEnglish from '../assets/turquoise_english.png';
import energyPlanner from '../assets/red_energy.png';

export default function Projects() {
  const projectsData = [
    {
      title: "Price Master",
      desc: "A multi-tenant price tracking platform with invoice-driven updates and isolated workspaces for multiple companies..",
      tags: ["React", "TypeScript", "PostgreSQL"],
      image: priceMasterImg
    },
        {
      title: "Power Grid Simulator",
      desc: "An interactive electrical network distribution planner. Engineered with C++ and SFML, implementing graph theory algorithms to visualize and optimize power routing and grid topography.",
      tags: ["C++", "SFML", "Graph Algorithms", "Team Collaboration"],
      image: energyPlanner 
    },
    {
      title: "CianLightEnglish",
desc: "An interactive platform for learning English vocabulary, leveraging AI integrations to craft a highly personalized and adaptive learning experience for every user.",      tags: ["React", "TypeScript", "PostgreSQL", "Netlify"],
      image: priceCianEnglish
    }
  ];

  return (
    <section id="projects" className="px-8 py-20 bg-gray-50 md:px-20">
      <h2 className="mb-12 text-3xl font-bold text-gray-600 uppercase">Projects</h2>
      <div className="space-y-12">
        {projectsData.map((project, index) => (
          <div key={index} className="flex flex-col overflow-hidden bg-gray-900 rounded-sm lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img src={project.image} alt={project.title} className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col justify-center w-full p-10 lg:w-1/2">
              <h3 className="mb-4 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mb-8 text-gray-400">{project.desc}</p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-bold text-teal-400 uppercase border border-teal-400 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}