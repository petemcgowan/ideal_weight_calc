import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const _spacing = 10;

const BottomNavigation = ({
  validate,
  title,
  leftPress,
  rightPress,
  setErrorText,
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          width: width / 2,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            leftPress();
          }}
        >
          <View
            style={{
              padding: _spacing,
              backgroundColor: "#FCD259",
              borderRadius: _spacing,
              marginRight: _spacing,
            }}
          >
            <Feather name="arrow-left" size={24} color="#36303F" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const result = validate(title); // did they enter relevant info?
            console.log("result:" + result + ", title" + title);
            if (result) {
              // entry is good
              rightPress();
            }
          }}
        >
          <View
            style={{
              padding: _spacing,
              backgroundColor: "#FCD259",
              borderRadius: _spacing,
            }}
          >
            <Feather name="arrow-right" size={24} color="#36303F" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNavigation;
