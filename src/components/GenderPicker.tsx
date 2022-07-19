// import React from "react";
import { StyleSheet, View } from "react-native";

import { FadeIn } from "react-native-reanimated";

import GenAnimatedRadioGroup from "./GenAnimatedRadioGroup";

const GenderPicker = ({ genderValue, setGenderValue }) => {
  // const { colourData, index } = useContext(ColourContext);

  /*  Could have array of "others" that you turn off, in this case if Name is Male, the other array would be female.     */
  const dynamicStyles = StyleSheet.create({});

  return (
    <View>
      <GenAnimatedRadioGroup
        name="name"
        animatedStyle={{ entering: FadeIn }}
        defaultShow={false}
        genderValue={genderValue}
        setGenderValue={setGenderValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GenderPicker;
