import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  AccessibilityInfo,
  findNodeHandle,
} from "react-native";

import { HelperText } from "react-native-paper";
import ColourContext from "../state/ColourContext";

const AgeSlide = ({ ageValue, setAgeValue, errorText }) => {
  // const { darkVibrant, lightMutedColour, lightVibrantColour } =
  //   useContext(ColourContext);
  // const { colourData } = useContext(ColourContext);
  // const ageImageObject = colourData.find(
  //   (imageObject) => imageObject.title == "age"
  // );
  // console.log("ageImageObject:" + JSON.stringify(ageImageObject));

  const { colourData, index } = useContext(ColourContext);
  const inputRef = useRef();

  const hasErrors = () => {
    return ageValue === "";
    // return errorText !== "";
  };

  useEffect(() => {
    console.log("AgeSlide, useEffect:");
    // if (inputRef && inputRef.current) {
    //   console.log("AgeSlide, inputRef valid:");
    //   const reactTag = findNodeHandle(inputRef.current);
    //   if (reactTag) {
    //     console.log("AgeSlide, reactTag valid:");
    //     AccessibilityInfo.setAccessibilityFocus(reactTag);
    //     // inputRef.current.focus();
    //     inputRef.current.selection = { start: 0, end: 2 };
    //     // inputRef.current.select();
    //   }
    // }
  }, [inputRef]);

  useLayoutEffect(() => {
    console.log("AgeSlide, useLayoutEffect:");
    // if (inputRef && inputRef.current) {
    //   console.log("AgeSlide, inputRef valid:");
    //   const reactTag = findNodeHandle(inputRef.current);
    //   if (reactTag) {
    //     console.log("AgeSlide, reactTag valid:");
    //     AccessibilityInfo.setAccessibilityFocus(reactTag);
    //     // inputRef.current.focus();
    //     inputRef.current.selection = { start: 0, end: 2 };
    //     // inputRef.current.select();
    //   }
    // }
  }, [inputRef]);
  const dynamicStyles = StyleSheet.create({
    textAbove: {
      alignSelf: "center",
      width: "auto",
      textAlign: "center",
      minWidth: 100,
      color: colourData[index].lightVibrant,
      fontSize: 93,
    },
    textBelow: {
      alignSelf: "center",
      width: "auto",
      textAlign: "center",
      minWidth: 100,
      color: colourData[index].lightVibrant,
      fontSize: 140,
    },
    input: {
      height: 115,
      width: "auto",
      textAlign: "center",
      fontSize: 125,
      color: colourData[index].lightVibrant,

      minWidth: 150,
      padding: 12,
    },
    inputContainer: {
      height: 130,
      alignSelf: "center",
      borderWidth: 3,
      borderColor: colourData[index].lightVibrant,
      borderRadius: 30,
    },
  });
  return (
    <View>
      <Text style={dynamicStyles.textAbove}>Enter</Text>
      <Text style={dynamicStyles.textBelow}>Age</Text>
      <View style={dynamicStyles.inputContainer}>
        <TextInput
          style={dynamicStyles.input}
          // selectTextOnFocus={true}
          value={ageValue}
          autoFocus={true}
          selection={{ start: 0, end: 2 }}
          ref={inputRef}
          onChangeText={setAgeValue}
        />
      </View>
      <View style={styles.textContainer}>
        <HelperText
          style={{ fontSize: 45, color: colourData[index].dominant }}
          type="error"
          visible={hasErrors()}
        >
          {errorText}
        </HelperText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // borderLeftWidth: 4,
    // borderRightWidth: 4,
    alignSelf: "center",
    height: 70,
  },
});

export default AgeSlide;
