import { useState, useEffect } from 'react';

export default function MediaCarousel({ media }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!media || media.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [media]);

  return (
    <div className="relative w-full h-full min-h-[300px] overflow-hidden bg-gray-900">
      {media.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {item.type === 'video' ? (
            <video
              src={item.src}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full opacity-80 transition-opacity hover:opacity-100"
            />
          ) : (
            <img
              src={item.src}
              alt="Project media"
              className="object-cover w-full h-full opacity-80 transition-opacity hover:opacity-100"
            />
          )}
        </div>
      ))}
    </div>
  );
}