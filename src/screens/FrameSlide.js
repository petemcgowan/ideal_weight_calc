import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HelperText } from "react-native-paper";
import FramePicker from "../components/FramePicker";
import ColourContext from "../state/ColourContext";

const FrameSlide = ({ frameValue, setFrameValue, errorText }) => {
  // const { darkVibrant, lightMutedColour, lightVibrantColour } =
  //   useContext(ColourContext);
  const { colourData, index } = useContext(ColourContext);

  const hasErrors = () => {
    return errorText !== "";
  };

  const dynamicStyles = StyleSheet.create({
    textAbove: {
      alignSelf: "center",
      width: "auto",
      textAlign: "center",
      minWidth: 100,
      color: colourData[index].lightVibrant, // "#FFCB1F",
      fontSize: 90,
      // fontWeight: "bold",
    },
    textBelow: {
      alignSelf: "center",
      width: "auto",
      textAlign: "center",
      minWidth: 100,
      color: colourData[index].lightVibrant,
      fontSize: 123,
    },
  });
  return (
    <View>
      <Text style={dynamicStyles.textAbove}>Select</Text>
      <Text style={dynamicStyles.textBelow}>Frame</Text>
      <FramePicker frameValue={frameValue} setFrameValue={setFrameValue} />
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

export default FrameSlide;

const styles = StyleSheet.create({
  textContainer: {
    alignSelf: "center",
    minWidth: 150,
    height: 75,
  },
});
