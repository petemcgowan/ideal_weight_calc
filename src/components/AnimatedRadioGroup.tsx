import React, { useContext } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import ColourContext from "../state/ColourContext";

interface AnimatedRadioGroupProps {
  name: string;
  animatedStyle: Record<string, any>;
  defaultShow?: boolean;
  frameValue: string;
  setFrameValue: any;
}

const AnimatedRadioGroup = ({
  name,
  animatedStyle,
  defaultShow,
  frameValue,
  setFrameValue,
}: AnimatedRadioGroupProps) => {
  const { colourData, index } = useContext(ColourContext);

  const dynamicStyles = StyleSheet.create({
    animatedBlock: {
      height: 60,
      width: 300,
      borderWidth: 3,
      borderColor: colourData[index].lightVibrant,
      backgroundColor: colourData[index].lightVibrant,
      alignItems: "center",
      justifyContent: "center",
    },
    animatedTextPlaceholder: {
      color: "white",
      // color: colourData[index].lightVibrant,
      fontSize: 30,
    },
    animatedBlockPlaceholder: {
      height: 60,
      width: 300,
      borderWidth: 3,
      borderColor: colourData[index].lightVibrant,
      alignItems: "center",
      justifyContent: "center",
      borderStyle: "dashed",
    },
  });

  return (
    <View style={styles.animatedBox}>
      {frameValue === "Small" ? (
        <TouchableWithoutFeedback //Small  ON
          onPress={() => {
            setFrameValue("Medium");
          }}
        >
          <Animated.View style={dynamicStyles.animatedBlock} {...animatedStyle}>
            <Text style={styles.animatedText}>Small</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      ) : (
        <Animated.View //Small  OFF
          entering={"entering" in animatedStyle ? undefined : FadeIn.delay(350)}
        >
          <TouchableOpacity
            style={dynamicStyles.animatedBlockPlaceholder}
            onPress={() => {
              setFrameValue("Small"); // Turning SMALL ON
            }}
          >
            <Text style={dynamicStyles.animatedTextPlaceholder}>Small</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
      {frameValue === "Medium" ? (
        <TouchableWithoutFeedback //Medium  ON
          onPress={() => {
            setFrameValue("Small");
          }}
        >
          <Animated.View style={dynamicStyles.animatedBlock} {...animatedStyle}>
            <Text style={styles.animatedText}>Medium</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      ) : (
        <Animated.View //Medium  OFF
          entering={"entering" in animatedStyle ? undefined : FadeIn.delay(350)}
        >
          <TouchableOpacity
            style={dynamicStyles.animatedBlockPlaceholder}
            onPress={() => {
              setFrameValue("Medium"); // Turning MEDIUM ON
            }}
          >
            <Text style={dynamicStyles.animatedTextPlaceholder}>Medium</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
      {frameValue === "Large" ? (
        <TouchableWithoutFeedback //Large  ON
          onPress={() => {
            setFrameValue("Small");
          }}
        >
          <Animated.View style={dynamicStyles.animatedBlock} {...animatedStyle}>
            <Text style={styles.animatedText}>Large</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      ) : (
        <Animated.View //Large  OFF
          entering={"entering" in animatedStyle ? undefined : FadeIn.delay(350)}
        >
          <TouchableOpacity
            style={dynamicStyles.animatedBlockPlaceholder}
            onPress={() => {
              setFrameValue("Large"); // Turning Large ON
            }}
          >
            <Text style={dynamicStyles.animatedTextPlaceholder}>Large</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

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

export default AnimatedRadioGroup;
