import { useContext } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import BottomHelp from "../components/BottomHelp";
import ColourContext from "../state/ColourContext";

const { width, height } = Dimensions.get("screen");

// const helpSlideValues = {
//   title: "Info",
//   subHeading: "Welcome",
//   text: `Find related info on the screen you're on here 😎 `,
// };

const IntroSlide = ({}) => {
  // const { colourData } = useContext(ColourContext);
  // const introImageObject = colourData.find(
  //   (imageObject) => imageObject.title == "intro"
  // );
  // console.log("introImageObject:" + JSON.stringify(introImageObject));
  const { colourData, index } = useContext(ColourContext);

  /*  OK, so this particular screen is 844 in height.  So can position the help text absolutely at height - item height? */
  const dynamicStyles = StyleSheet.create({
    mainText: {
      alignSelf: "center",
      justifyContent: "flex-start",
      textAlign: "center",
      color: "rgba(255, 203, 31, 0.89)",
      fontSize: 68,
      // height: 80,
      alignItems: "flex-start",
    },
    secondaryText: {
      alignSelf: "flex-start",
      color: colourData[index].darkVibrant,
      padding: 3,
      fontSize: 18,
      // height: 70,
    },
  });
  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={dynamicStyles.mainText}>Welcome...</Text>
        <Text style={dynamicStyles.mainText}>to Ideal 🏖 </Text>
      </View>
      <View style={styles.gap1Container}></View>
      <View style={styles.text1Container}>
        <Text style={dynamicStyles.secondaryText}>
          Let's ask some questions...
        </Text>
      </View>
      <View style={styles.gap2Container}></View>
      <View>
        <Text style={dynamicStyles.secondaryText}>
          ...to see if we can find the medically recommended range for your...
        </Text>
      </View>
      <View style={styles.gap3Container}></View>
      <View>
        <Text style={dynamicStyles.secondaryText}>
          ...age, weight, height, gender and wrist size! 😎
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.01,
    minHeight: 100,
    // flexDirection: "column",
    minWidth: 150,
    marginBottom: 60,
    padding: 10,
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
    // textAlign: "flex-start",
  },
  gap1Container: {
    flex: 0.15,
    minHeight: 155,
  },
  text1Container: {
    flex: 0.12,
    minHeight: 40,
    height: 0,
  },

  gap2Container: {
    // flex: 0.1,
    minHeight: 0,
  },
  gap3Container: {
    flex: 0.18,
    minHeight: 30,
  },
});

export default IntroSlide;
