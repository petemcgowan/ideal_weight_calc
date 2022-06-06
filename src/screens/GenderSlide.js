import { StyleSheet, Text, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import GenderPicker from "../components/GenderPicker";

const GenderSlide = ({ genderValue, setGenderValue, errorText }) => {
  const onChangeText = (genderValue) => {
    console.log("test");
    setGenderValue(genderValue);
  };

  const hasErrors = () => {
    return errorText !== "";
  };

  return (
    <View>
      <Text style={styles.textText}>Select Gender</Text>
      <GenderPicker genderValue={genderValue} setGenderValue={setGenderValue} />
      <View style={styles.textContainer}>
        <HelperText style={{ fontSize: 25 }} type="error" visible={hasErrors()}>
          {errorText}
        </HelperText>
      </View>
      {/* <TextInput
        style={styles.textText}
        label="Email"
        value={genderValue}
        onChangeText={onChangeText}
      /> */}
      {/* <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textText: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 25,
    height: 25,
    fontWeight: "bold",
  },
  textContainer: {
    alignSelf: "center",
    minWidth: 150,
    fontSize: 25,
    height: 25,
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default GenderSlide;
