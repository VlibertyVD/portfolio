export default function Hero() {
  return (
    <section id="home" className="flex flex-col justify-center px-8 py-32 md:px-20 lg:py-40">
      <h1 className="text-5xl font-extrabold tracking-tight text-teal-400 uppercase md:text-7xl lg:text-8xl">
        Developer<br />Backend
      </h1>
      <p className="max-w-2xl mt-6 text-lg text-gray-500 md:text-xl">
        I build efficient, scalable, and structurally sound digital infrastructures, fusing server-side logic with technical precision to power the future of the web.
      </p>
      <div className="mt-10">
        <button className="px-8 py-3 text-sm font-bold text-white uppercase bg-teal-400 hover:bg-teal-500">
        View Projects
        </button>
      </div>
    </section>
  );
}