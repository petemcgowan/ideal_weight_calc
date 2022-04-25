import { StyleSheet, Text, View } from "react-native";

const ResultSlide = ({ idealWeight }) => {
  return (
    <View>
      <Text>Result:</Text>
      <Text>{idealWeight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultSlide;
