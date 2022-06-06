import { StyleSheet, Text, TextInput, View } from "react-native";
import { HelperText } from "react-native-paper";

const AgeSlide = ({ ageValue, setAgeValue, errorText }) => {
  const hasErrors = () => {
    return errorText !== "";
  };

  return (
    <View>
      <Text style={styles.textText}>Enter Age</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.textText]}
          value={ageValue}
          onChangeText={setAgeValue}
        />
      </View>
      <View style={styles.textContainer}>
        <HelperText style={{ fontSize: 25 }} type="error" visible={hasErrors()}>
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
  input: {
    height: 70,
    backgroundColor: "#222444",
    opacity: 0.4,
    width: 70,
    padding: 5,
    // paddingRight: 15,
  },
  textText: {
    // alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 25,
    width: 70,
    fontWeight: "bold",
  },
});

export default AgeSlide;
