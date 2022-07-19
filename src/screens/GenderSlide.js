import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import GenderPicker from "../components/GenderPicker";
import ColourContext from "../state/ColourContext";

const GenderSlide = ({ genderValue, setGenderValue, errorText }) => {
  // const { darkVibrant, lightMutedColour, lightVibrantColour } =
  //   useContext(ColourContext);

  // const { colourData } = useContext(ColourContext);
  // const genderImageObject = colourData.find(
  //   (imageObject) => imageObject.title == "gender"
  // );
  // console.log("genderImageObject:" + JSON.stringify(genderImageObject));
  const { colourData, index } = useContext(ColourContext);

  const onChangeText = (genderValue) => {
    console.log("test");
    setGenderValue(genderValue);
  };

  const hasErrors = () => {
    return errorText !== "";
  };

  const dynamicStyles = StyleSheet.create({
    textAbove: {
      alignSelf: "center",
      width: "auto",
      textAlign: "center",
      minWidth: 100,
      color: "#84c4ec",
      fontSize: 80,
    },
    textBelow: {
      alignSelf: "center",
      width: "auto",
      textAlign: "center",
      minWidth: 100,
      color: "#84c4ec",
      fontSize: 120,
    },
    input: {
      height: 70,
      width: "auto",
      textAlign: "center",
      fontSize: 65,
      // fontWeight: "bold",
      color: "#84c4ec",
      minWidth: 150,
      padding: 5,
    },
  });

  return (
    <View>
      <Text style={dynamicStyles.textAbove}>Select</Text>
      <Text style={dynamicStyles.textBelow}>Gender</Text>
      <GenderPicker genderValue={genderValue} setGenderValue={setGenderValue} />
      <View style={styles.textContainer}>
        <HelperText
          style={{ fontSize: 35, color: colourData[index].darkVibrant }}
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
});

export default GenderSlide;
