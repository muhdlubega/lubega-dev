import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  const importAll = (r) => {
    return r.keys().map((key) => ({
      src: r(key),
      alt: key.split("./")[1].replace('.svg',''),
    }));
  };

  const logos = importAll(
    require.context("../assets/tech_stack", false, /\.(svg)$/)
  );
  

  const items = logos.map((logo, index) => {
    return (
        <div className="carousel-div">
        <img className="carousel-logo" key={index} src={logo.src} alt={logo.alt} />
        <p className="carousel-item">{logo.alt}</p>
        </div>
    );
  });

  const responsive = {
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
    ></AliceCarousel>
    </div>
  );
};

export default Carousel;
