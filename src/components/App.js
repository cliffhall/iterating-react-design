import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import themes from "../theme/";
import { KitGlobal } from "../kit";
import Navigation from "./Navigation";
import Page from "./Page";

export default function App(props) {
  const [destinationIndex, setDestinationIndex] = useState(0);
  const [theme, setTheme] = useState(themes.luna);
  const destination = props.destinations[destinationIndex];

  useEffect(() => {
    setTheme(themes[destination.theme]);
  }, [destination]);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <KitGlobal />
        <Navigation
          {...props}
          destinationIndex={destinationIndex}
          setDestinationIndex={setDestinationIndex}
        />
        <Page
          {...props}
          destinationIndex={destinationIndex}
          setDestinationIndex={setDestinationIndex}
        />
      </React.Fragment>
    </ThemeProvider>
  );
}
