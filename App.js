// image: require("./assets/beach-triangle-palms-small.jpg"),
// image: require("./assets/beach-solo-running-sand-small.jpg"),
// image: require("./assets/beach-footsteps-small.jpg"),
import React from "react";
import {
  View,
  // Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
  Picker,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AppIntroSlider from "react-native-app-intro-slider";
import { Text, RadioButton, Paragraph } from "react-native-paper";
// import { ToastAndroid } from "react-native-web";
// import { Dropdown } from "react-native-material-dropdown";

const { width, height } = Dimensions.get("screen");
const ValueContext = React.createContext();

// TODO: Inbut box vs useState (get the values they put in, stick em in state)
// TODO Result page/onCalculate should be using state values to come with result.  The formulas are detailed here https://www.calculator.net/ideal-weight-calculator.html
// TODO add a new data item

// Height:  Text box?  Two text boxes?  Use cm for now (Berlin focus)
// Weight:  Text box?  kg
// TODO Does Miron do any apps that take input?  What are his inputs like?
//

// Swipe-up 1 (Height) - how to change imperial setting
// Swipe-up 2 (Weight) - how to change imperial or some info on weight categories e.g. overweight
// Swipe-up 3 (Frame) - how to measure frame etc.  wrist icon.
// Swipe-up 4 (Age) - Maybe no swipe up on last

// TODO Doesn't Intro page have calculate buttons?  Use the **tick button** for now
// TODO Result page appears after calculate press.
// TODO All swipe ups appear after result page again

const GenderPicker = () => {
  const [value, setValue] = React.useState("Female");

  return (
    <ValueContext.Consumer>
      <RadioButton.Group
        onValueChange={(newValue) => setValue(newValue)}
        value={value}
        // value={(value) => {
        //   value;
        // }}
      >
        <View style={styles.row}>
          <Paragraph>Male</Paragraph>
          <RadioButton value="Male"></RadioButton>
        </View>
        <View style={styles.row}>
          <Paragraph>Female</Paragraph>
          <RadioButton value="Female"></RadioButton>
        </View>
      </RadioButton.Group>
    </ValueContext.Consumer>
  );
};

const FramePicker = ({ setHeightValue }) => {
  const [value, setValue] = React.useState("Medium");

  return (
    <RadioButton.Group
      onValueChange={(newValue) => setValue(newValue)}
      value={value}
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

const HeightEntry = () => {
  const [value, setValue] = React.useState(0);

  return (
    <TextInput
      placeholder="height"
      keyboardType="numeric"
      style={styles.input}
      value={value}
    />
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ["Female", "Medium", 70, 35, 165],
      result: 0,
      // data: [],

      data: [
        {
          title: "Gender",
          text: "Male.\nOr Female",
          image: require("./assets/beach-footsteps-small.jpg"),
          bg: "#febe29",
          value: 0,
          componentItem: <GenderPicker />,
        },
        {
          title: "Frame",
          text: "Small, Medium, Large, FgnEnormous",
          image: require("./assets/beach-solo-running-sand-small.jpg"),
          bg: "#2969fe",
          value: 0,
          componentItem: <FramePicker />,
        },
        {
          title: "Height",
          text: "Description.\nSay something cool",
          image: require("./assets/beach-triangle-palms-small.jpg"),
          bg: "#59b2ab",
          value: 0,
          componentItem: <HeightEntry />,
        },
        {
          title: "Age",
          text: "You can lie",
          image: require("./assets/beach-multi-palm-trees-argh-small.jpg"),
          bg: "#29febe",
          value: 0,
          componentItem: <HeightEntry />,
        },
        {
          title: "Weight",
          text: "Calculate button will appear here\n\nLorem ipsum bla bla bla",
          image: require("./assets/beach-white-sands-oh-so-ronery-small.jpg"),
          bg: "#2969fe",
          value: 0,
          componentItem: <HeightEntry />,
        },
      ],
    };
  }

  // method to set value,
  setHeightValue = (value) => {
    console.log("value:" + value);
    this.setState({ value: value });
  };

  // // TODO result object, needs to be added to the array once we have a result.
  // const resultObject = {
  //   title: "REsult",
  //   text: "Info on overweight, underweight, etc",
  //   image: require("./assets/beach-umbrella-colony-small.jpg"),
  //   bg: "	#be29fe",
  // };

  // type Item = (typeof this.state.data)[0];

  _renderItem = ({ item }, setHeightValue) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}
      >
        <ImageBackground source={item.image} style={styles.image}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.input}>{item.componentItem}</Text>
        </ImageBackground>
      </View>
    );
  };

  _keyExtractor = (item) => item.title;

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-forward-circle-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  _renderDoneButton = () => {
    console.log("this.state.data:" + JSON.stringify(this.state.data));

    return (
      <ValueContext.Consumer>
        <View style={styles.buttonCircle}>
          <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
        </View>
      </ValueContext.Consumer>
    );
  };

  render() {
    console.log("width:" + width + ", height:" + height);

    return (
      <ValueContext.Provider userValue="Female">
        <View style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" />
          <AppIntroSlider
            keyExtractor={this._keyExtractor}
            renderDoneButton={this._renderDoneButton}
            renderNextButton={this._renderNextButton}
            renderItem={this._renderItem}
            data={this.state.data}
            setHeightValue={this.setHeightValue}
          />
        </View>
      </ValueContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // image: {
  //   width: 400,
  //   height: 400,
  //   marginVertical: 32,
  //   flex: 1,
  //   resizeMode: "cover",
  // },
  row: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  intro: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 80,
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    marginTop: 24,
    color: "#FFCB1F",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    // backgroundColor: "#f5fcff"
  },
});
