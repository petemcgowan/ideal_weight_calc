import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { HelperText } from "react-native-paper";

const WeightSlide = ({
  weightValue,
  setWeightValue,
  handleCalculate,
  errorText,
}) => {
  const hasErrors = () => {
    return errorText !== "";
  };

  const weightHasValue = () => {
    console.log("weightValue:" + weightValue);
    return weightValue !== "";
  };

  return (
    <View>
      <Text style={styles.textText}>Enter Weight</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.textText]}
          value={weightValue}
          onChangeText={setWeightValue}
        />
      </View>
      <View style={styles.textContainer}>
        <HelperText style={{ fontSize: 25 }} type="error" visible={hasErrors()}>
          {errorText}
        </HelperText>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calculate </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 70,
  },
  input: {
    height: 70,
    backgroundColor: "#222444",
    opacity: 0.4,
    width: 120,
    fontSize: 25,
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: "bold",
  },
  textText: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1D1D1B",
    opacity: 0.4,
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#FFCB1F",
    fontWeight: "bold",
  },
});

export default WeightSlide;
