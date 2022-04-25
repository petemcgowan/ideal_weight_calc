import { StyleSheet, View } from "react-native";

import { Text, RadioButton } from "react-native-paper";

const FramePicker = ({ frameValue, setFrameValue }) => {
  return (
    <RadioButton.Group
      onValueChange={setFrameValue}
      value={frameValue}
      style={styles.input}
    >
      <View style={styles.row}>
        <Text>Small</Text>
        <RadioButton value="Small"></RadioButton>
      </View>
      <View style={styles.row}>
        <Text>Medium</Text>
        <RadioButton value="Medium"></RadioButton>
      </View>
      <View style={styles.row}>
        <Text>Large</Text>
        <RadioButton value="Large"></RadioButton>
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

export default FramePicker;
