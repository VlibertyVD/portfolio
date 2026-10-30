import { useState, useEffect } from 'react';

export default function Hero() {
  const [activeCard, setActiveCard] = useState(0);

  const terminalCards = [
    {
      file: "core_engine.py",
      code: (
        <>
          <span className="text-teal-400">def</span> <span className="text-blue-400">build_infrastructure</span>():<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;stack = [<span className="text-yellow-300">'Python'</span>, <span className="text-yellow-300">'Odoo'</span>, <span className="text-yellow-300">'C++'</span>]<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;performance = <span className="text-purple-400">True</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-teal-400">return</span> system.deploy(stack)<br/>
          <br/>
          <span className="text-gray-500"># System initialized...</span><br/>
          <span className="text-teal-400">✓ Server logic fused.</span>
        </>
      )
    },
    {
      file: "query_optimizer.sql",
      code: (
        <>
          <span className="text-purple-400">EXPLAIN ANALYZE</span><br/>
          <span className="text-blue-400">SELECT</span> node_id, load_avg<br/>
          <span className="text-blue-400">FROM</span> cluster_metrics<br/>
          <span className="text-blue-400">WHERE</span> status = <span className="text-yellow-300">'ACTIVE'</span>;<br/>
          <br/>
          <span className="text-gray-500">-- Execution plan generated</span><br/>
          <span className="text-teal-400">✓ Index Scan applied. 0.02ms</span>
        </>
      )
    },
    {
      file: "deploy_prod.sh",
      code: (
        <>
          <span className="text-teal-400">daniel@server:~$</span> docker-compose up -d<br/>
          <span className="text-gray-500">[+] Running 3/3</span><br/>
          <span className="text-gray-500"> ✔ Container pg_database  Started</span><br/>
          <span className="text-gray-500"> ✔ Container odoo_backend Started</span><br/>
          <br/>
          <span className="text-teal-400">✓ Production environment live.</span>
        </>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % terminalCards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [terminalCards.length]);

  return (
    // Reduje el padding inferior (pb-16) y agregué md:gap-16 lg:gap-24 para separar las columnas
    <section id="home" className="relative flex flex-col items-center px-8 pt-32 pb-16 mx-auto max-w-7xl md:flex-row md:gap-16 lg:gap-24 md:px-20 lg:pt-40 lg:pb-16">
      
      {/* Usar flex-1 en lugar de anchos fijos permite que el 'gap' del padre actúe correctamente */}
      <div className="flex flex-col justify-center w-full flex-1">
        <div className="flex items-center gap-3 mb-6">
           <span className="w-10 h-1 bg-teal-400"></span>
           <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Backend & Systems Engineer</span>
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 uppercase md:text-7xl lg:text-8xl">
          Software<br /><span className="text-teal-400">Developer</span>
        </h1>
        
        <p className="max-w-2xl mt-6 text-lg leading-relaxed text-gray-500 md:text-xl">
          I build efficient, scalable, and structurally sound digital infrastructures, fusing server-side logic with technical precision to power the future of the web.
        </p>
      </div>

      {/* flex-1 mantiene la terminal a una distancia segura del texto */}
      <div className="hidden w-full mt-16 md:flex flex-1 md:justify-end md:mt-0">
         <div className="relative w-full max-w-md h-[240px]">
            {terminalCards.map((card, index) => (
              <div 
                key={index}
                className={`absolute inset-0 w-full p-6 transition-all duration-1000 border border-gray-800 shadow-2xl bg-gray-950 rounded-xl ${
                  index === activeCard 
                    ? 'opacity-100 translate-y-0 z-10 shadow-teal-400/20' 
                    : 'opacity-0 translate-y-4 z-0'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">{card.file}</span>
                </div>
                
                <pre className="text-sm font-mono leading-relaxed text-gray-300 whitespace-pre-wrap">
                  <code>{card.code}</code>
                </pre>
              </div>
            ))}
         </div>
      </div>

    </section>
  );
}