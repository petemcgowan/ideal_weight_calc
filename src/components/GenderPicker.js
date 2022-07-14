import { StyleSheet, View } from "react-native";

import { Text, RadioButton, Paragraph } from "react-native-paper";

const GenderPicker = ({ genderValue, setGenderValue }) => {
  // const genderPress = () => {
  //   setGenderValue();
  //   console.log("genderPress");
  // };
  return (
    <RadioButton.Group onValueChange={setGenderValue} value={genderValue}>
      <View style={styles.row}>
        <Paragraph style={{ fontSize: 22 }}>Male</Paragraph>
        <RadioButton style={{ fontSize: 22 }} value="Male"></RadioButton>
      </View>
      <View style={styles.row}>
        <Paragraph style={{ fontSize: 22 }}>Female</Paragraph>
        <RadioButton style={{ fontSize: 22 }} value="Female"></RadioButton>
      </View>
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    fontSize: 25,
    padding: 8,
    marginTop: 10,
  },
  input: {
    height: 70,
    backgroundColor: "#666666",
    color: "#ffffff",
    padding: 15,
  },
});

export default GenderPicker;
