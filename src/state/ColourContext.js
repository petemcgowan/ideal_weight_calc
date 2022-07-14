import React from "react";

const ColourContext = React.createContext({
  dominantColour: "brown",
  lightMutedColour: "white",
  // setColourItems: () => {},
});

export const ColourProvider = ColourContext.Provider;
export default ColourContext;
