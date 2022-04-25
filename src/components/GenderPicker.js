import { StyleSheet, View } from "react-native";

import { Text, RadioButton, Paragraph } from "react-native-paper";

const GenderPicker = ({ genderValue, setGenderValue }) => {
  return (
    <RadioButton.Group onValueChange={setGenderValue} value={genderValue}>
      <View style={styles.row}>
        <Paragraph>Male</Paragraph>
        <RadioButton value="Male"></RadioButton>
      </View>
      <View style={styles.row}>
        <Paragraph>Female</Paragraph>
        <RadioButton value="Female"></RadioButton>
      </View>
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  input: {
    height: 70,
    backgroundColor: "#666666",
    color: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default GenderPicker;
