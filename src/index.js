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

// const theme = createTheme(
//   {
//     primary: "#4054B2"
//   },
//   {
//     // primary: "Raleway"
//     // secondary: { name: "Limelight", googleFont: true, styles: ["400", "700"] },
//     primary: { name: "Comfortaa", googleFont: true, styles: ["400", "700"] }
//   }
// );Lobster+Two:400,700

const theme = createTheme(
  {
    primary: "#F7464A"
  },
  {
    primary: {
      name: "Open Sans Condensed",
      googleFont: true,
      styles: ["300", "700"]
    },
    secondary: { name: "Lobster Two", googleFont: true, styles: ["400", "700"] }
  }
);

const Presentation = () => (
  <Deck transition={["slide", "fade"]} transitionDuration={500} theme={theme}>
    {slides}
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
registerServiceWorker();
