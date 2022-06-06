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
    height: 70,
    alignSelf: "center",
  },
  textText: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 25,
    fontWeight: "bold",
  },

  input: {
    height: 70,
    width: 70,
    color: "#FFCB1F",
    fontSize: 25,
    backgroundColor: "#222444",
    opacity: 0.4,
    // color: "#ffffff",
    padding: 5,
    // paddingRight: 15,
  },
});

export default HeightSlide;
