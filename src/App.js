import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Dimensions,
  FlatList,
  Animated,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import GenderSlide from "./screens/GenderSlide";
import AgeSlide from "./screens/AgeSlide";
import HeightSlide from "./screens/HeightSlide";
import FrameSlide from "./screens/FrameSlide";
import WeightSlide from "./screens/WeightSlide";
import ResultSlide from "./screens/ResultSlide";
import BottomNavigation from "./components/BottomNavigation";
import BottomHelp from "./components/BottomHelp";
import GenderPicker from "./components/GenderPicker";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.8;
const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

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
  {
    key: 6,
    title: "result",
    image: require("../assets/blue-palm-trees-small.jpg"),
  },
];

export default function App() {
  const [genderValue, setGenderValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [heightValue, setHeightValue] = useState("");
  const [frameValue, setFrameValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [idealWeight, setIdealWeight] = useState("");
  const [helpTitle, setHelpTitle] = useState("");
  const [helpSubHeading, setHelpSubHeading] = useState("");
  const [helpText, setHelpText] = useState("");
  const refFlatList = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  const onChangeText = (genderValue) => setGenderValue(genderValue);
  const [errorText, setErrorText] = useState();

  const helpSlideValues = [
    {
      title: "Info",
      subHeading: "Gender",
      text: `Generally, females weigh less than males even though they naturally have a higher percentage of body fat.

      This is because the male body generally has higher muscle mass, and muscle is heavier than fat.

      Not only that, but women generally have lower bone density.

      Last but not least, males tend to be taller than females.`,
    },
    {
      title: "Info",
      subHeading: "Age",
      text: `In theory, age shouldn't be a large determinant of an IBW past the ages of 14-15 for girls and 16-17 for boys, after which most people stop growing.

      It is actually expected that human males and females to lose 1.5 and 2 inches in height respectively by age 70. It is important to remember that as people age, lean muscle mass decreases and it is easier to accumulate excess body fat.

      This is a natural process, though it is possible to lessen the effects of aging by adopting various habits such as monitoring diet, exercise, stress, and sleep.`,
    },
    {
      title: "Info",
      subHeading: "Height",
      text: `The taller the person, the more muscle mass and body fat they have, which results in more weight. A male at a similar height to a female should weigh about 10-20% heavier.`,
    },
    {
      title: "Info",
      subHeading: "Frame",
      text: `Body frame size is another factor that can have a significant impact on the measurement of ideal weight.

      Body frame size is typically categorized as small, medium, or large boned. It is measured based on the circumference of a person\'s wrist in relation to their height, as shown below.

      For women:

      Height under 5 ft 2 in
      Small boned = wrist size less than 5.5 in
      Medium boned = wrist size 5.5 in to 5.75 in
      Large boned = wrist size over 5.75 in
      Height between 5 ft 2 in and 5 ft 5 in
      Small boned = wrist size less than 6 in
      Medium boned = wrist size 6 in to 6.25 in
      Large boned = wrist size over 6.25 in
      Height over 5 ft 5 in
      Small boned = wrist size less than 6.25 in
      Medium boned = wrist size 6.25 in to 6.5 in
      Large boned = wrist size over 6.5 in

      For men:

      Height over 5 ft 5 in
      Small boned = wrist size 5.5 in to 6.5 in
      Medium boned = wrist size 6.5 in to 7.5 in
      Large boned = wrist size over 7.5 in

      A person who is large boned will naturally weigh more than someone who is small boned, even at the same height, making body frame size a factor that can affect measurements such as IBW and BMI.`,
    },
    {
      title: "Info",
      subHeading: "Weight",
      text: `4th text item`,
    },
    {
      title: "Info",
      subHeading: "Results",
      text: `D. R. Miller Formula (1983)

      Male:	56.2 kg + 1.41 kg per inch over 5 feet
      Female:	53.1 kg + 1.36 kg per inch over 5 feet

      Modification of the Devine Formula.`,
    },
  ];

  // useEffect notices the change in state index, so changes the Flatlist's scrollToIndex
  React.useEffect(() => {
    console.log(
      "useEffect, about to scrollToIndex, refFlatListL:" +
        refFlatList.viewableItems
    );
    console.log(
      "useEffect, about to scrollToIndex, refFlatListL:" +
        refFlatList.current.viewableItems
    );
    refFlatList.current?.scrollToIndex({
      index,
      animated: true,
    });
  }, [index]);

  const handleCalculate = () => {
    const weightIsValidated = validate("weight");
    if (weightIsValidated) {
      refFlatList.current;

      console.log("handleCalculate, genderValue:" + genderValue);
      console.log("handleCalculate, ageValue:" + ageValue);
      console.log("handleCalculate, heightValue:" + heightValue);
      console.log("handleCalculate, frameValue:" + frameValue);
      console.log("handleCalculate, weightValue:" + weightValue);

      console.log(
        "imagesData before (possible) filter:" + JSON.stringify(imagesData)
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
      setIndex(index + 1); // move to the results slide

      console.log("imagesData after RESULT add:" + JSON.stringify(imagesData));
    } // weight entry validation
  };

  const leftPress = () => {
    if (index === 0) {
      return;
    }
    setHelpTitle(helpSlideValues[index - 1].title);
    setHelpSubHeading(helpSlideValues[index - 1].subHeading);
    setHelpText(helpSlideValues[index - 1].text);
    console.log("helpSlideValues:" + JSON.stringify(helpSlideValues));

    setIndex(index - 1);
    console.log("index(prev):" + index);

    setErrorText("");
  };

  const rightPress = () => {
    if (index === imagesData.length - 1) {
      return;
    }
    setHelpTitle(helpSlideValues[index + 1].title);
    setHelpSubHeading(helpSlideValues[index + 1].subHeading);
    setHelpText(helpSlideValues[index + 1].text);
    console.log("helpSlideValues:" + JSON.stringify(helpSlideValues));

    setIndex(index + 1);
    console.log("index(next):" + index);

    setErrorText("");
  };

  const validate = (title) => {
    console.log("validatex(title):" + title);
    switch (title) {
      case "gender": {
        if (genderValue === "") {
          // they haven't selected anything
          console.log("validatex(gender):" + genderValue);
          setErrorText("Please select a gender");
          return false;
        }
        break;
      }
      case "age": {
        console.log("ageValue:" + ageValue);
        if (ageValue === "") {
          // they haven't selected anything
          console.log("validatex(age):" + ageValue);
          setErrorText("Please select an age");
          return false;
        }
        break;
      }
      case "frame": {
        if (frameValue === "") {
          // they haven't selected anything
          console.log("validatex(frame):" + frameValue);
          setErrorText("Please select a frame size");
          return false;
        }
        break;
      }
      case "weight": {
        if (weightValue === "") {
          // they haven't selected anything
          console.log("validatex(weight):" + weightValue);
          setErrorText("Please select a weight");
          return false;
        }
        break;
      }
      case "height": {
        if (heightValue === "") {
          // they haven't selected anything
          console.log("validatex(height):" + heightValue);
          setErrorText("Please select a height");
          return false;
        }
        break;
      }
      default: {
        console.log("Unknown/unhandled value in switch statement");
      }
    }

    return true;
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Animated.FlatList
        ref={refFlatList}
        initialScrollIndex={index}
        data={imagesData}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        renderItem={({ item }) => {
          return (
            <View
              style={{ width, height }}
              onTouchStart={(e) => (this.touchX = e.nativeEvent.pageX)}
              onTouchEnd={(e) => {
                if (this.touchX - e.nativeEvent.pageX > 210) {
                  console.log(
                    "Swiped left" +
                      this.touchX +
                      ", e.nativeEvent.pageX:" +
                      e.nativeEvent.pageX +
                      ", subtracted:" +
                      (this.touchX - e.nativeEvent.pageX)
                  );

                  const result = validate(item.title); // did they enter relevant info?
                  console.log("result:" + result + ", item.title" + item.title);
                  console.log("index" + index);
                  if (result) {
                    // entry is good
                    console.log("rightPress it's good");
                    rightPress();
                  } else {
                    refFlatList.current?.scrollToIndex({
                      index,
                      animated: true,
                    }); // setIndex(index);
                  }
                }
                if (this.touchX - e.nativeEvent.pageX < -210) leftPress();
                console.log(
                  "Swiped right, this.touchX" +
                    this.touchX +
                    ", e.nativeEvent.pageX:" +
                    e.nativeEvent.pageX +
                    ", subtracted:" +
                    (this.touchX - e.nativeEvent.pageX)
                );
              }}
            >
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
                        <View>
                          <GenderSlide
                            genderValue={genderValue}
                            setGenderValue={setGenderValue}
                            errorText={errorText}
                          />
                        </View>
                      ),
                      age: (
                        <AgeSlide
                          ageValue={ageValue}
                          setAgeValue={setAgeValue}
                          errorText={errorText}
                        />
                      ),
                      height: (
                        <HeightSlide
                          heightValue={heightValue}
                          setHeightValue={setHeightValue}
                          errorText={errorText}
                        />
                      ),
                      frame: (
                        <FrameSlide
                          frameValue={frameValue}
                          setFrameValue={setFrameValue}
                          errorText={errorText}
                        />
                      ),
                      weight: (
                        <WeightSlide
                          weightValue={weightValue}
                          setWeightValue={setWeightValue}
                          handleCalculate={handleCalculate}
                          errorText={errorText}
                        />
                      ),
                      result: (
                        <ResultSlide
                          genderValue={genderValue}
                          frameValue={frameValue}
                          weightValue={weightValue}
                          heightValue={heightValue}
                          ageValue={ageValue}
                          idealWeight={idealWeight}
                        />
                      ),
                    }[item.title]
                  }
                  {/* ************************************* */}
                </View>
                <BottomHelp
                  helpTitle={helpSlideValues[index].title}
                  helpSubHeading={helpSlideValues[index].subHeading}
                  helpText={helpSlideValues[index].text}
                ></BottomHelp>

                <BottomNavigation
                  validate={validate}
                  title={item.title}
                  leftPress={leftPress}
                  rightPress={rightPress}
                  setErrorText={setErrorText}
                />
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
    // alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
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
