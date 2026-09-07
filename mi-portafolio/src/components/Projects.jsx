import priceMasterImg from '../assets/price_master.png';
import priceCianEnglish from '../assets/turquoise_english.png';
import energyPlanner from '../assets/red_energy.png';
import attendanceImg from '../assets/Attendance_Adjustment_Tickets.png';
import attendanceVid from '../assets/attendance_promo.mp4';
import MediaCarousel from './MediaCarousel';

export default function Projects() {
  const projectsData = [
    {
      title: "Attendance Adjustment Tickets",
      desc: "An open-source Odoo 19 module published on the official Odoo App Store. It implements a streamlined HR incidence management system, allowing employees to submit and track justification tickets for missed check-ins, check-outs, or full-day absences.",
      tags: ["Odoo 19", "Python", "XML", "Open Source"],
      media: [
        { type: 'image', src: attendanceImg },
        { type: 'video', src: attendanceVid }
      ],
      link: "https://apps.odoo.com/apps/modules/19.0/hr_attendance_ticket"
    },

    {
      title: "Price Master",
      desc: "A multi-tenant price tracking platform with invoice-driven updates and isolated workspaces for multiple companies.",
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
      desc: "An interactive platform for learning English vocabulary, leveraging AI integrations to craft a highly personalized and adaptive learning experience for every user.",
      tags: ["React", "TypeScript", "PostgreSQL", "Netlify"],
      image: priceCianEnglish
    },

  ];

  return (
    <section id="projects" className="px-8 py-20 bg-gray-50 md:px-20">
      <h2 className="mb-12 text-3xl font-bold text-gray-600 uppercase">Projects</h2>
      <div className="space-y-12">
        {projectsData.map((project, index) => (
          <div key={index} className="flex flex-col overflow-hidden bg-gray-900 rounded-sm lg:flex-row">
            <div className="w-full lg:w-1/2">
              {project.media ? (
                <MediaCarousel media={project.media} />
              ) : (
                <img src={project.image} alt={project.title} className="object-cover w-full h-full opacity-80 transition-opacity hover:opacity-100" />
              )}
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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 text-sm font-bold text-teal-400 uppercase transition-colors hover:text-teal-300"
                >
                  View Module
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}