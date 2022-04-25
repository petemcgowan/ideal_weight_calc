import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  FlatList,
  Animated,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import GenderSlide from "./screens/GenderSlide";
import AgeSlide from "./screens/AgeSlide";
import HeightSlide from "./screens/HeightSlide";
import FrameSlide from "./screens/FrameSlide";
import WeightSlide from "./screens/WeightSlide";
import ResultSlide from "./screens/ResultSlide";

const { width, height } = Dimensions.get("screen");

let imagesData = [
  {
    key: 1,
    title: "gender",
    image: require("../assets/beach-footsteps-small.jpg"),
  },
  {
    key: 2,
    title: "age",
    image: require("../assets/beach-solo-running-sand-small.jpg"),
  },
  {
    key: 3,
    title: "height",
    image: require("../assets/beach-triangle-palms-small.jpg"),
  },
  {
    key: 4,
    title: "frame",
    image: require("../assets/beach-multi-palm-trees-argh-small.jpg"),
  },
  {
    key: 5,
    title: "weight",
    image: require("../assets/beach-white-sands-oh-so-ronery-small.jpg"),
  },
];

export default function App() {
  const [genderValue, setGenderValue] = useState();
  const [ageValue, setAgeValue] = useState();
  const [heightValue, setHeightValue] = useState();
  const [frameValue, setFrameValue] = useState();
  const [weightValue, setWeightValue] = useState();
  const [idealWeight, setIdealWeight] = useState();

  const handleCalculate = () => {
    console.log("handleCalculate, genderValue:" + genderValue);
    console.log("handleCalculate, ageValue:" + ageValue);
    console.log("handleCalculate, heightValue:" + heightValue);
    console.log("handleCalculate, frameValue:" + frameValue);
    console.log("handleCalculate, weightValue:" + weightValue);

    console.log(
      "imagesData before (possible) filter:" + JSON.stringify(imagesData)
    );

    // check if there's already a result slide, we'll need to replace it
    imagesData = imagesData.filter((obj) => {
      console.log("obj:" + JSON.stringify(obj));
      return obj.key !== 6;
    });
    console.log(
      "imagesData after (possible) filter:" + JSON.stringify(imagesData)
    );

    // D. R. Miller Formula (1983)
    // Male:	56.2 kg + 1.41 kg per inch over 5 feet
    // Female:	53.1 kg + 1.36 kg per inch over 5 feet

    // 5ft = 60 inches
    let idealWeightInt = 0;
    // **Pseudo code**
    if (genderValue === "Male") {
      console.log("Doing Male calc");
      if (heightValue > 60) {
        const heightAbove = heightValue - 60;
        console.log("heightAbove:" + heightAbove);
        const extraWeight = 1.41 * heightAbove;
        console.log("extraWeight:" + extraWeight);
        idealWeightInt = 56.2 + extraWeight;
      } else {
        // not over 60 in
        idealWeightInt = 1.0676 * heightValue; //  it's 1.0676 per in(56.2kg/60)
        // so if they're 40in it's 40*1.0676
      }
    } else if (genderValue === "Female") {
      console.log("Doing Female calc");
      if (heightValue > 60) {
        const heightAbove = heightValue - 60;
        console.log("heightAbove:" + heightAbove);
        const extraWeight = 1.36 * heightAbove;
        console.log("extraWeight:" + extraWeight);
        idealWeightInt = 53.1 + extraWeight;
      } // not over 60 in
      else {
        idealWeightInt = 1.1299 * heightValue; //  it's 1.1299 per in(53.1kg/60)
        // so if they're 40in it's 40*1.1299
      }
    }
    console.log("idealWeightInt before frame mod:" + idealWeightInt);
    // Add 10% for a large frame size, and subtract 10% for a small frame size.
    if (frameValue === "Small") {
      idealWeightInt -= idealWeightInt * 0.1;
    } else if (frameValue === "Large") {
      idealWeightInt += idealWeightInt * 0.1;
    } // medium needs no mods
    console.log("idealWeightInt after frame mod:" + idealWeightInt);

    setIdealWeight(idealWeightInt);
    imagesData.push({
      key: 6,
      title: "result",
      image: require("../assets/blue-palm-trees-small.jpg"),
    });

    console.log("imagesData after RESULT add:" + JSON.stringify(imagesData));
  };

  // **********  Gender  **********
  // **********  Age     **********
  // **********  Height  **********
  // **********  Frame   **********
  // **********  Weight  **********   Calculate here

  // Result page
  // Settings page = Imperial, Algorithm type (1958, 1963 etc)

  // Swipe-up 1 (Height) - how to change imperial setting
  // Swipe-up 2 (Weight) - how to change imperial or some info on weight categories e.g. overweight
  // Swipe-up 3 (Frame) - how to measure frame etc.  wrist icon.
  // Swipe-up 4 (Age) - Maybe no swipe up on last

  // TODO Doesn't Intro page have calculate buttons?  Use the **tick button** for now
  // TODO Result page appears after calculate press.

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        data={imagesData}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <ImageBackground
                // source={{ uri: item.image }}
                source={item.image}
                style={{ flex: 1, resizeMode: "cover" }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {/* ************************************* */}
                  {
                    {
                      gender: (
                        <GenderSlide
                          genderValue={genderValue}
                          setGenderValue={setGenderValue}
                        />
                      ),
                      age: (
                        <AgeSlide
                          ageValue={ageValue}
                          setAgeValue={setAgeValue}
                        />
                      ),
                      height: (
                        <HeightSlide
                          heightValue={heightValue}
                          setHeightValue={setHeightValue}
                        />
                      ),
                      frame: (
                        <FrameSlide
                          frameValue={frameValue}
                          setFrameValue={setFrameValue}
                        />
                      ),
                      weight: (
                        <WeightSlide
                          frameValue={weightValue}
                          setWeightValue={setWeightValue}
                          handleCalculate={handleCalculate}
                        />
                      ),
                      result: <ResultSlide idealWeight={idealWeight} />,
                    }[item.title]
                  }
                </View>
              </ImageBackground>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 70,
  },
  input: {
    height: 70,
    backgroundColor: "#666666",
    color: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
  },
});
