import imgAvatar from '../assets/img_avatar.jpeg';

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center gap-12 px-8 py-20 bg-white md:flex-row md:px-20">
      <div className="w-full md:w-1/2">
        {/* Aquí luego puedes reemplazar el src con la ruta de tu propia foto */}
        <img 
          src={imgAvatar}
          alt="Retrato" 
          className="object-cover w-full h-full rounded-sm"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="mb-6 text-3xl font-bold text-teal-400 uppercase">The Identity</h2>
        <p className="mb-4 text-gray-500">
          I am a creative developer obsessed with the intersection of high-performance engineering and avant-garde design. My work is defined by a commitment to technical excellence and a relentless pursuit of visual perfection.
        </p>
        <p className="mb-10 text-gray-500">
          With over a decade of experience in the digital space, I specialize in building immersive web environments that challenge the status quo. Every line of code is written with purpose, and every pixel is placed with intent.
        </p>
        <div className="flex gap-12">
          <div>
            <h4 className="mb-1 text-xs font-bold text-teal-400 uppercase">Location</h4>
            <p className="text-sm text-gray-400">Remote / Global</p>
          </div>
          <div>
            <h4 className="mb-1 text-xs font-bold text-teal-400 uppercase">Focus</h4>
            <p className="text-sm text-gray-400">Creative Tech</p>
          </div>
        </div>
      </div>
    </section>
  );
}