import { useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ColourContext from "../state/ColourContext";

const ResultSlide = ({
  genderValue,
  frameValue,
  weightValue,
  heightValue,
  ageValue,
  idealWeight,
}) => {
  // const { darkVibrant, lightMutedColour, lightVibrantColour } =
  //   useContext(ColourContext);

  const { colourData, index } = useContext(ColourContext);
  const dynamicStyles = StyleSheet.create({
    detailsHeaderText: {
      fontWeight: "bold",
      color: colourData[index].darkVibrant,
      fontSize: 27,
    },
    detailText: {
      color: colourData[index].dominant,
      fontSize: 23,
    },
    idealWeightText: {
      color: colourData[index].darkVibrant,
      fontSize: 70,
      marginRight: 56,
    },
  });

  return (
    <SafeAreaView style={styles.vwResultSlide}>
      {/* specifics top */}
      <View style={styles.vwSpecificTop}>
        <View style={styles.vwGender}>
          <Text style={dynamicStyles.detailsHeaderText}>Gender</Text>
          <Text style={dynamicStyles.detailText}>{genderValue}</Text>
        </View>

        <View style={styles.vwBodyFrame}>
          <Text style={dynamicStyles.detailsHeaderText}>Body Frame</Text>
          <Text style={dynamicStyles.detailText}>{frameValue}</Text>
        </View>

        <View style={styles.vwWeight}>
          <Text style={dynamicStyles.detailsHeaderText}>Weight</Text>
          <Text style={dynamicStyles.detailText}>{weightValue}</Text>
        </View>
      </View>
      {/* specifics bottom */}
      <View style={styles.vwSpecificMiddle}>
        <View style={styles.vwHeight}>
          <Text style={dynamicStyles.detailsHeaderText}>Height</Text>
          <Text style={dynamicStyles.detailText}>{heightValue}</Text>
        </View>
        <View style={styles.vwAge}>
          <Text style={dynamicStyles.detailsHeaderText}>Age</Text>
          <Text style={dynamicStyles.detailText}>{ageValue}</Text>
        </View>
      </View>

      {/* ideal weight section */}
      <View style={styles.vwGapMid1}></View>
      <Text style={styles.healthyWeightText}>Healthy Weight Range:</Text>
      <View style={styles.vwGapMid2}></View>

      <View style={styles.vwSpecificBottom}>
        <View style={styles.vwIdealWeight}>
          <Text style={styles.idealWeightText}>Ideal Weight</Text>
          <Text style={dynamicStyles.idealWeightText}>
            {Math.round(idealWeight)}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    flexDirection: "row",
  },
  vwResultSlide: {
    flexDirection: "col",
    minHeight: 200,
    minWidth: 300,
    flex: 1,
    backgroundColor: "transparent",
  },
  vwSpecificTop: {
    flex: 0.3,
    maxHeight: 180,
    flexDirection: "row",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  vwGender: {
    flex: 0.5,
    alignItems: "center",
  },
  vwBodyFrame: {
    flex: 0.5,
    alignItems: "center",
  },
  vwWeight: {
    flex: 0.5,
    alignItems: "center",
  },
  vwSpecificMiddle: {
    flexDirection: "row",
    maxHeight: 100,
    flex: 0.5,
    justifyContent: "center",
    // alignItems: "center",
    // color: "white",
  },
  vwHeight: {
    flex: 0.5,
    alignItems: "center",
  },
  vwAge: {
    flex: 0.5,
    alignItems: "center",
  },
  vwSpecificBottom: {
    flex: 0.3,
    maxHeight: 180,
    justifyContent: "center",
  },
  vwGapMid1: {
    maxHeight: 60,
    minHeight: 0,
  },
  healthyWeightText: {
    color: "white",
    fontSize: 14,
  },
  vwGapMid2: {
    maxHeight: 120,
    minHeight: 112,
  },
  vwIdealWeight: {
    flex: 1,
    color: "white",
    alignItems: "center",
  },
  idealWeightText: {
    color: "white",
    fontSize: 66,
  },
});

export default ResultSlide;
