import { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { HelperText } from "react-native-paper";
import ColourContext from "../state/ColourContext";

const WeightSlide = ({
  weightValue,
  setWeightValue,
  handleCalculate,
  errorText,
}) => {
  // const { darkVibrant, lightMutedColour, lightVibrantColour } =
  //   useContext(ColourContext);
  const { colourData, index } = useContext(ColourContext);

  useEffect(() => {
    console.log("WeightSlide, useEffect:");
  }, [errorText]);

  const hasErrors = () => {
    return weightValue === "";
  };

  // const weightHasValue = () => {
  //   console.log("weightValue:" + weightValue);
  //   return weightValue !== "";
  // };

  const dynamicStyles = StyleSheet.create({
    textAbove: {
      alignSelf: "center",
      width: "auto",
      textAlign: "center",
      minWidth: 100,
      color: "#e4bc94",
      fontSize: 90,
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
      height: 115,
      width: "auto",
      textAlign: "center",
      fontSize: 100,
      color: colourData[index].lightVibrant,
      minWidth: 150,
      padding: 20,
    },
    inputContainer: {
      height: 115,
      alignSelf: "center",
      borderWidth: 3,
      borderRadius: 30,
      borderColor: colourData[index].lightVibrant,
    },
    buttonText: {
      alignSelf: "center",
      padding: 20,
      fontSize: 45,
      color: colourData[index].lightVibrant,
      fontWeight: "bold",
    },
    button: {
      // opacity: 0.8,
      borderRadius: 20,
      borderWidth: 0.5,
      borderColor: colourData[index].lightVibrant,
      backgroundColor: "#e4bc94",
      marginBottom: 80,
    },
  });

  return (
    <View>
      <Text style={dynamicStyles.textAbove}>Enter</Text>
      <Text style={dynamicStyles.textBelow}>Weight</Text>
      <View style={dynamicStyles.inputContainer}>
        <TextInput
          style={[dynamicStyles.input]}
          value={weightValue}
          // onChangeText={setWeightValue}
          onChangeText={(text) => {
            console.log("onChangeText:" + text);
            setWeightValue(text);
            if (text !== "") errorText = "";
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <HelperText
          style={{ fontSize: 35, color: colourData[index].dominant }}
          type="error"
          visible={hasErrors()}
        >
          {errorText}
        </HelperText>
      </View>
      <TouchableOpacity style={dynamicStyles.button} onPress={handleCalculate}>
        <Text style={dynamicStyles.buttonText}>Calculate </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeightSlide;
