
import { useState, useEffect } from 'react';
import coverpage from "../assets/coverpage.jpg";
import newCoverpage from "../assets/travel1.jpg";
import newCoverpage2 from "../assets/newcover3.jpg";

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const images = [coverpage, newCoverpage, newCoverpage2];
  const texts = [
    "Is a Dynamic and Innovative Company Dedicated to Providing Comprehensive Business Solutions",
    "Provides World Class Training Programs and Transformative Team Building Experiences",
    "Our Mission is to equip organizations with the knowledge, skills, and strategies they need to thrive in today’s rapidly evolving business landscape. We believe that strong businesses are built on knowledgeable teams, efficient processes, and cohesive work environments. Through our integrated services, we help you unlock your full potential. "
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    setIntervalId(id);
    return () => clearInterval(id);
  }, [images.length]);

  const handleLoadMore = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center transition-opacity duration-500 ease-in-out"
        style={{ height: "600px", backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-60 transition-opacity duration-500 ease-in-out" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="flex h-full items-center justify-center">
            <div className="text-earthYellow text-left ml-10">
              <h2 className="mb-4 text-4xl font-semibold">BRANHERICK INTERNATIONAL</h2>
              <h4 className="mb-6 text-xl font-semibold ">{texts[currentImageIndex]}</h4>
              <button
                type="button"
                className="rounded border-2 border-cream px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-earthYellow transition duration-150 ease-in-out hover:border-licorice hover:bg-licorice hover:bg-opacity-10 hover:text-cream focus:border-harvestGold focus:text-harvestGold focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
