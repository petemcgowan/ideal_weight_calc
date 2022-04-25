import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const WeightSlide = ({ weightValue, setWeightValue, handleCalculate }) => {
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
      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calculate </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 70,
  },
  input: {
    height: 70,
    backgroundColor: "#222444",
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
