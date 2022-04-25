import { StyleSheet, Text, View } from "react-native";

import GenderPicker from "../components/GenderPicker";

const GenderSlide = ({ genderValue, setGenderValue }) => {
  return (
    <View>
      <Text style={styles.textText}>Select Gender</Text>
      <GenderPicker genderValue={genderValue} setGenderValue={setGenderValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  textText: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default GenderSlide;
