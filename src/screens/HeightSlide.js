import { useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { HelperText } from "react-native-paper";
import ColourContext from "../state/ColourContext";

const HeightSlide = ({ heightValue, setHeightValue, errorText }) => {
  // const { darkVibrant, lightMutedColour, lightVibrantColour } =
  //   useContext(ColourContext);
  const { colourData, index } = useContext(ColourContext);

  const hasErrors = () => {
    // return errorText !== "";
    return heightValue === "";
  };

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
      fontSize: 120,
    },
    input: {
      height: 110,
      width: "auto",
      textAlign: "center",
      fontSize: 120,
      margin: 10,
      color: colourData[index].lightVibrant,
      minWidth: 150,
      padding: 10,
    },
    inputContainer: {
      height: 130,
      alignSelf: "center",
      borderWidth: 3,
      borderRadius: 30,
      borderColor: colourData[index].lightVibrant,
    },
  });
  return (
    <View>
      <Text style={dynamicStyles.textAbove}>Enter</Text>
      <Text style={dynamicStyles.textBelow}>Height</Text>
      <View style={dynamicStyles.inputContainer}>
        <TextInput
          style={dynamicStyles.input}
          value={heightValue}
          selectTextOnFocus
          onChangeText={setHeightValue}
        />
      </View>

      <View style={styles.textContainer}>
        <HelperText
          style={{ fontSize: 40, color: colourData[index].lightVibrant }}
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
  textContainer: {
    alignSelf: "center",
    minWidth: 150,
    height: 45,
  },
  // input: {
  //   height: 70,
  //   width: 70,
  //   color: "#FFCB1F",
  //   width: "auto",
  //   textAlign: "center",
  //   minWidth: 150,
  //   fontSize: 45,
  //   backgroundColor: "#222444",
  //   opacity: 0.4,
  //   // color: "#ffffff",
  //   padding: 5,
  //   // paddingRight: 15,
  // },
});

export default HeightSlide;
