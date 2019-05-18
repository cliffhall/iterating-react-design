import React from "react";

import { KitAttribution, KitImage, KitCarousel, KitCarouselItem } from "../kit";

export default function PosterCarousel(props) {
  const carouselStyle = {
    marginBottom: "15px"
  };

  const renderItem = (destination, index) => {
    return (
      <KitCarouselItem key={index}>
        <KitImage src={destination.poster} fluid />
      </KitCarouselItem>
    );
  };

  return (
    <React.Fragment>
      <KitCarousel
        style={carouselStyle}
        fade={true}
        indicators={false}
        activeIndex={props.destinationIndex}
        onSelect={(key, event) => props.setDestinationIndex(key)}
        interval={null}
      >
        {props.destinations.map((destination, index) =>
          renderItem(destination, index)
        )}
      </KitCarousel>
      <KitAttribution style={carouselStyle}>
        Poster Art by &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.stevethomasart.com/spacetravel"
        >
          Steve Thomas
        </a>
      </KitAttribution>
    </React.Fragment>
  );
}
