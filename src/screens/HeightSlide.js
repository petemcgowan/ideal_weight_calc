import { StyleSheet, Text, TextInput, View } from "react-native";
import { HelperText } from "react-native-paper";

const HeightSlide = ({ heightValue, setHeightValue, errorText }) => {
  const hasErrors = () => {
    return errorText !== "";
  };

  return (
    <View>
      <Text style={styles.textText}>Enter Height</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={heightValue}
          onChangeText={setHeightValue}
        />
      </View>
      <View style={styles.textContainer}>
        <HelperText type="error" visible={hasErrors()}>
          {errorText}
        </HelperText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 70,
  },
  textText: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    height: 70,
    backgroundColor: "#666666",
    color: "#FFCB1F",
    fontSize: 15,
    // color: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default HeightSlide;
