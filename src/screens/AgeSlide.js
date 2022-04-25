import { StyleSheet, Text, TextInput, View } from "react-native";

const AgeSlide = ({ ageValue, setAgeValue }) => {
  return (
    <View>
      <Text style={styles.textText}>Enter Age</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.textText]}
          value={ageValue}
          onChangeText={setAgeValue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 70,
  },
  input: {
    height: 70,
    backgroundColor: "#222444",
    paddingLeft: 15,
    paddingRight: 15,
  },
  textText: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default AgeSlide;
