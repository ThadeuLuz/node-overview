import React from "react";
import ReactDOM from "react-dom";
import slides from "./slides";
import registerServiceWorker from "./registerServiceWorker";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import { Deck } from "spectacle";

// Require CSS
// eslint-disable-next-line
require("normalize.css");

const theme = createTheme(
  {
    primary: "#4054B2"
  },
  {
    // primary: "Raleway"
    // secondary: { name: "Limelight", googleFont: true, styles: ["400", "700i"] },
    primary: { name: "Comfortaa", googleFont: true, styles: ["400", "700i"] }
  }
);

const Presentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={200} theme={theme}>
    {slides}
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
registerServiceWorker();
