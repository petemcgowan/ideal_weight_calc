import { StyleSheet, Text, View } from "react-native";

import FramePicker from "../components/FramePicker";

const FrameSlide = ({ frameValue, setFrameValue }) => {
  return (
    <View>
      <Text style={styles.textText}>Select Frame</Text>
      <FramePicker frameValue={frameValue} setFrameValue={setFrameValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  textText: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default FrameSlide;
