export default function Skills() {
const skillsData = [
    {
      title: "PYTHON",
      desc: "Robust backend development, automation, and high-performance scripting.",
      icon: "🐍"
    },
    {
      title: "DJANGO",
      desc: "Building scalable architectures and fast APIs using tools like Django Ninja.",
      icon: "🕸️"
    },
    {
      title: "ODOO 17",
      desc: "Module development, advanced model/view inheritance, and RPC connections.",
      icon: "⚙️"
    },
    {
      title: "SQL",
      desc: "Design, management, and query optimization in relational engines like PostgreSQL and MySQL.",
      icon: "🗄️"
    },
    {
      title: "DOCKER",
      desc: "Application containerization to ensure consistent and isolated deployments.",
      icon: "🐳"
    },
    {
      title: "LINUX",
      desc: "Server environment administration, fluent terminal usage, and seamless deployments.",
      icon: "🐧"
    },
    {
      title: "C++",
      desc: "Object-oriented programming, complex algorithms, and efficient memory management.",
      icon: "⚡"
    },
    {
      title: "JAVASCRIPT",
      desc: "Dynamic logic, asynchronous integrations, and advanced client-side manipulation.",
      icon: "💛"
    },
    {
      title: "REACT",
      desc: "Building interactive, modular, and component-based user interfaces.",
      icon: "⚛️"
    },
    {
      title: "GIT",
      desc: "Version control, conflict resolution, and secure collaborative workflows.",
      icon: "🌿"
    }
  ];

  return (
    <section id="skills" className="px-8 py-20 md:px-20">
      <h2 className="mb-12 text-3xl font-bold text-gray-200 uppercase">Arsenal Técnico</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((skill, index) => (
          <div key={index} className="p-8 bg-gray-900 border-t-4 border-teal-400 rounded-sm">
            <div className="mb-4 text-3xl">{skill.icon}</div>
            <h3 className="mb-2 text-lg font-bold text-white uppercase">{skill.title}</h3>
            <p className="text-sm text-gray-400">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}