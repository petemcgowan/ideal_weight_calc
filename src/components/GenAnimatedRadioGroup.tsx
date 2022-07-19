import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import ColourContext from "../state/ColourContext";

interface AnimatedBlockProps {
  name: string;
  animatedStyle: Record<string, any>;
  defaultShow?: boolean;
  genderValue: string;
  setGenderValue: any;
}

const GenAnimatedRadioGroup = ({
  name,
  animatedStyle,
  defaultShow,
  genderValue,
  setGenderValue,
}: AnimatedBlockProps) => {
  const dynamicStyles = StyleSheet.create({
    animatedBlock: {
      height: 60,
      width: 300,
      borderWidth: 3,
      borderColor: "#84c4ec",
      backgroundColor: "#84c4ec",
      alignItems: "center",
      justifyContent: "center",
    },
    animatedTextPlaceholder: {
      color: "#84c4ec",
      fontSize: 30,
    },
    animatedBlockPlaceholder: {
      height: 60,
      width: 300,
      borderWidth: 3,
      borderColor: "#84c4ec",
      alignItems: "center",
      justifyContent: "center",
      borderStyle: "dashed",
    },
  });
  return (
    <View style={styles.animatedBox}>
      {genderValue === "Female" ? (
        <TouchableWithoutFeedback //Female  ON
          onPress={() => {
            setGenderValue("Male");
          }}
        >
          <Animated.View style={dynamicStyles.animatedBlock} {...animatedStyle}>
            <Text style={styles.animatedText}>Female</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      ) : (
        <Animated.View //Female  OFF
          entering={"entering" in animatedStyle ? undefined : FadeIn.delay(350)}
        >
          <TouchableOpacity
            style={dynamicStyles.animatedBlockPlaceholder}
            onPress={() => {
              setGenderValue("Female");
            }}
          >
            <Text style={dynamicStyles.animatedTextPlaceholder}>Female</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
      {genderValue === "Male" ? (
        <TouchableWithoutFeedback //Male  ON
          onPress={() => {
            setGenderValue("Female");
          }}
        >
          <Animated.View style={dynamicStyles.animatedBlock} {...animatedStyle}>
            <Text style={styles.animatedText}>Male</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      ) : (
        <Animated.View //Male  OFF
          entering={"entering" in animatedStyle ? undefined : FadeIn.delay(350)}
        >
          <TouchableOpacity
            style={dynamicStyles.animatedBlockPlaceholder}
            onPress={() => {
              setGenderValue("Male");
            }}
          >
            <Text style={dynamicStyles.animatedTextPlaceholder}>Male</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default GenAnimatedRadioGroup;

const styles = StyleSheet.create({
  animatedBox: {
    padding: 5,
    alignItems: "center",
  },
  animatedText: {
    color: "#ffffff",
    fontSize: 30,
  },
});
