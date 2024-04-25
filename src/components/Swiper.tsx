import React, { useState, useEffect } from "react";
import image1 from '../assets/12-3.jpg';
import image2 from "../assets/Untitled design.png";
import image3 from "../assets/rbu.jpeg";
import image4 from "../assets/about.jpg";

const Slideshow: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full sm:h-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`h-[200px] sm:h-full w-full ${index === currentImageIndex ? "" : "hidden"
            }`}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const images = [image1, image2, image3, image4];

  return (
    <div className="flex justify-center items-center sm:h-screen overflow-hidden  ">
      <Slideshow images={images} />
    </div>
  );
};

export default App;
