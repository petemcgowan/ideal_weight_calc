import { StyleSheet, Text, View } from "react-native";

const IntroSlide = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.mainText}>Welcome...</Text>
        <Text style={styles.mainText}>to Ideal 🏖 </Text>
      </View>
      <View>
        <View style={styles.gapContainer}></View>
      </View>
      <View>
        <Text style={styles.secondaryText}>
          Text u up, gender, height, personal questions
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    minWidth: 150,
  },
  mainText: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 30,
    height: 40,
    fontWeight: "bold",
  },
  secondaryText: {
    alignSelf: "flex-start",

    // color: "#1fffcb",
    // color: "#1f53ff",
    // color: "rgba(63, 136, 131, 1)",
    color: "rgba(0, 102, 98, 1)",
    fontSize: 17,
    height: 40,
  },
  gapContainer: {
    height: 300,
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  textContainer: {
    alignSelf: "center",
    fontSize: 15,
    height: 25,
    color: "#1f53ff",
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default IntroSlide;
