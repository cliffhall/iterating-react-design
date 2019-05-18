import React from "react";

import PosterCarousel from "./PosterCarousel";
import DestinationLayout from "./DestinationLayout";
import { KitContainer, KitRow, KitCol } from "../kit";

export default function Page(props) {
  const containerStyle = {
    paddingTop: "75px",
    paddingLeft: "10px",
    paddingRight: "10px"
  };

  return (
    <KitContainer style={containerStyle} fluid>
      <KitRow>
        <KitCol xl={2} lg={4} md={4} sm={4} xs={12}>
          <PosterCarousel {...props} />
        </KitCol>
        <KitCol xl={10} lg={8} md={8} sm={8} xs={12}>
          <DestinationLayout {...props} />
        </KitCol>
      </KitRow>
    </KitContainer>
  );
}
