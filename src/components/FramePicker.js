import { StyleSheet, View, Pressable } from "react-native";
import AnimatedRadioGroup from "./AnimatedRadioGroup";
import { Text, RadioButton } from "react-native-paper";
import { FadeIn } from "react-native-reanimated";

const FramePicker = ({ frameValue, setFrameValue }) => {
  return (
    <View>
      <AnimatedRadioGroup
        name="Frame"
        animatedStyle={{ entering: FadeIn }}
        defaultShow={false}
        frameValue={frameValue}
        setFrameValue={setFrameValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FramePicker;
