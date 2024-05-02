import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './Carousel.scss';

interface Logo {
  src: string;
  alt?: string;
}

const logoPaths: string[] = [
  "../assets/tech_stack/logo1.svg",
  "../assets/tech_stack/logo2.svg",
];

const logos: Logo[] = logoPaths.map((path: string) => ({
  src: path,
  alt: path.split("/").pop()?.replace('.svg', ''),
}));


const Carousel: React.FC = () => {
  const items: JSX.Element[] = logos.map((logo: Logo, index: number) => {
    return (
      <div className="carousel-div" key={index}>
        <img className="carousel-logo" src={logo.src} alt={logo.alt} />
        <p className="carousel-item">{logo.alt}</p>
      </div>
    );
  });

  const responsive: { [key: number]: { items: number } } = {
    0: {
      items: 4,
    },
    512: {
      items: 8,
    },
  };

  return (
    <div className="carousel-main">
      <p className="carousel-title">Tech Stack</p>
      <p className="carousel-content">Here are the languages/frameworks that I am familiar or have worked with. For more info check out the 'Skills' tab</p>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
      />
    </div>
  );
};

export default Carousel;
