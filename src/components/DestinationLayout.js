import React, { useState, useEffect } from "react";

import {
  KitCard,
  KitCardBody,
  KitCardTitle,
  KitCardSubtitle,
  KitCardFooter,
  KitHero,
  KitList,
  KitListItem,
  KitButton,
  KitToggleButton,
  KitToggleButtonGroup,
  KitDropdown,
  KitDropdownItem,
  KitContainer,
  KitRow,
  KitCol
} from "../kit";

export default function DestinationLayout(props) {
  const { destinations, destinationIndex: index } = props;
  const destination = destinations[index];

  const [arrivalSiteIndex, setArrivalSiteIndex] = useState(0);
  const [carrierIndex, setCarrierIndex] = useState(0);
  const [cryoSelection, setCryoSelection] = useState(true);

  useEffect(() => {
    setCarrierIndex(0);
    setArrivalSiteIndex(0);
    setCryoSelection(
      destination.cryoSleep === "optional" ||
        destination.cryoSleep === "required"
    );
  }, [destination]);

  const renderHero = () => {
    return (
      <KitHero>
        <h2>{destination.header}</h2>
        <p>{destination.blurb}</p>
        <KitButton>Book Your Trip Now!</KitButton>
      </KitHero>
    );
  };

  const renderTravelCard = () => {
    return (
      <KitCard>
        <KitCardBody>
          <KitCardTitle>Travel Info</KitCardTitle>
          <KitCardSubtitle>Current One Way Estimate</KitCardSubtitle>
          <KitList>
            <KitListItem>{destination.distance}</KitListItem>
            <KitListItem>{destination.travelTime}</KitListItem>
          </KitList>
        </KitCardBody>
        <KitCardFooter>Carrier trajectory affects travel time</KitCardFooter>
      </KitCard>
    );
  };

  const renderPassageCard = () => {
    const carrier = destination.transport[carrierIndex];

    const renderCryoOptions = () => {
      let options;
      const buttonStyle = { width: "100%", marginTop: "23px" };
      switch (destination.cryoSleep) {
        case "required":
          options = (
            <KitButton disabled style={buttonStyle}>
              Cryosleep Required
            </KitButton>
          );
          break;

        case "none":
          options = (
            <KitButton disabled style={buttonStyle}>
              Cryosleep Not Available
            </KitButton>
          );
          break;

        case "optional":
          options = (
            <KitToggleButtonGroup
              style={buttonStyle}
              type="radio"
              name="cryo-options"
              value={cryoSelection}
              onChange={selection => setCryoSelection(selection)}
            >
              <KitToggleButton value={true}>Cryosleep</KitToggleButton>
              <KitToggleButton value={false}>Wakeful</KitToggleButton>
            </KitToggleButtonGroup>
          );
          break;

        default:
      }
      return options;
    };

    const renderCarrierItem = (carrier, index) => {
      return (
        <KitDropdownItem key={index} onSelect={() => setCarrierIndex(index)}>
          {carrier}
        </KitDropdownItem>
      );
    };

    return (
      <KitCard>
        <KitCardBody>
          <KitCardTitle>Passage</KitCardTitle>
          <KitCardSubtitle>Choose a Carrier</KitCardSubtitle>
          <KitDropdown
            label={carrier}
            items={destination.transport.map((carrier, index) =>
              renderCarrierItem(carrier, index)
            )}
          />
          {renderCryoOptions()}
        </KitCardBody>
        {!cryoSelection ? (
          <KitCardFooter>Food and waste expenses will apply</KitCardFooter>
        ) : null}
      </KitCard>
    );
  };

  const renderArrivalCard = () => {
    const arrivalSite = destination.arrivalSites[arrivalSiteIndex];
    const buttonStyle = { width: "100%", marginTop: "23px" };
    const renderSiteMapOption = () => {
      let option;

      if ("siteMap" in destination) {
        option = (
          <KitButton
            href={destination.siteMap}
            target="_blank"
            style={buttonStyle}
          >
            Site Map
          </KitButton>
        );
      } else {
        option = (
          <KitButton disabled style={buttonStyle}>
            No Site Map Available
          </KitButton>
        );
      }

      return option;
    };

    const renderArrivalSiteItem = (site, index) => {
      return (
        <KitDropdownItem
          key={index}
          onSelect={() => setArrivalSiteIndex(index)}
        >
          {site}
        </KitDropdownItem>
      );
    };

    return (
      <KitCard>
        <KitCardBody>
          <KitCardTitle>Arrival</KitCardTitle>
          <KitCardSubtitle>Choose a Site</KitCardSubtitle>
          <KitDropdown
            label={arrivalSite}
            items={destination.arrivalSites.map((site, index) =>
              renderArrivalSiteItem(site, index)
            )}
          />
          {renderSiteMapOption()}
        </KitCardBody>
      </KitCard>
    );
  };

  return (
    <KitContainer>
      <KitRow>
        <KitCol>{renderHero()}</KitCol>
      </KitRow>
      <KitRow>
        <KitCol lg={true}>{renderTravelCard()}</KitCol>
        <KitCol sm>{renderPassageCard()}</KitCol>
        <KitCol sm>{renderArrivalCard()}</KitCol>
      </KitRow>
    </KitContainer>
  );
}
