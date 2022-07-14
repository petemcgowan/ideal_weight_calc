import React, { useMemo, useContext } from "react";
import { BottomSheetBackgroundProps } from "@gorhom/bottom-sheet";
import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";
import ColourContext from "../state/ColourContext";

const CustomBackground: React.FC<BottomSheetBackgroundProps> = ({
  style,
  animatedIndex,
}) => {
  const { dominantColour, lightMutedColour } = useContext(ColourContext);
  console.log("dominantColour:" + dominantColour);
  console.log("lightMutedColour:" + lightMutedColour);

  //#region styles
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    // @ts-ignore
    //   color: interpolateColor(
    //     animatedIndex.value,
    //     [0, 1],
    //     ["#000000", dominantColour]
    //   ),
    // @ts-ignore
    backgroundColor: interpolateColor(
      animatedIndex.value,
      [0, 1],
      // ["#ffffff", "#a8b5eb"]
      ["#ffffff", lightMutedColour]
    ),
  }));
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle]
  );
  //#endregion

  // render
  return <Animated.View pointerEvents="none" style={containerStyle} />;
};

export default CustomBackground;
