import React from "react";

import {
  KitNavbar,
  KitNavbarBrand,
  KitLogo,
  KitDropdown,
  KitDropdownItem
} from "../kit";

export default function Navigation(props) {
  const renderItem = (destination, index) => {
    return (
      <KitDropdownItem
        onSelect={() => props.setDestinationIndex(index)}
        key={index}
      >
        {destination.title}
      </KitDropdownItem>
    );
  };

  const renderDestinationMenu = () => {
    const { destinations, destinationIndex: current } = props;
    return (
      <KitDropdown
        alignRight
        label={destinations[current].title}
        items={props.destinations.map((destination, index) =>
          renderItem(destination, index)
        )}
      />
    );
  };

  return (
    <KitNavbar>
      <KitNavbarBrand>
        <KitLogo />
        Solar Excursions
      </KitNavbarBrand>
      {renderDestinationMenu()}
    </KitNavbar>
  );
}
