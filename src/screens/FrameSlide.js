import { StyleSheet, Text, View } from "react-native";
import { HelperText } from "react-native-paper";
import FramePicker from "../components/FramePicker";

const FrameSlide = ({ frameValue, setFrameValue, errorText }) => {
  const hasErrors = () => {
    return errorText !== "";
  };

  return (
    <View>
      <Text style={styles.textText}>Select Frame</Text>
      <FramePicker frameValue={frameValue} setFrameValue={setFrameValue} />
      <View style={styles.textContainer}>
        <HelperText style={{ fontSize: 25 }} type="error" visible={hasErrors()}>
          {errorText}
        </HelperText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textText: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default FrameSlide;
