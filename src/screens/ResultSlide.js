import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const ResultSlide = ({
  genderValue,
  frameValue,
  weightValue,
  heightValue,
  ageValue,
  idealWeight,
}) => {
  return (
    <SafeAreaView style={styles.vwResultSlide}>
      {/* specifics top */}
      <View style={styles.vwSpecificTop}>
        <View style={styles.vwGender}>
          <Text style={{ fontWeight: "bold", color: "white" }}>Gender</Text>
          <Text style={{ color: "white" }}>{genderValue}</Text>
        </View>

        <View style={styles.vwBodyFrame}>
          <Text style={{ fontWeight: "bold", color: "white" }}>Body Frame</Text>
          <Text style={{ color: "white" }}>{frameValue}</Text>
        </View>

        <View style={styles.vwWeight}>
          <Text style={{ fontWeight: "bold", color: "white" }}>Weight</Text>
          <Text style={{ color: "white" }}>{weightValue}</Text>
        </View>
      </View>
      {/* specifics bottom */}
      <View style={styles.vwSpecificMiddle}>
        <View style={styles.vwHeight}>
          <Text style={{ fontWeight: "bold", color: "white" }}>Height</Text>
          <Text style={{ color: "white" }}>{heightValue}</Text>
        </View>
        <View style={styles.vwAge}>
          <Text style={{ fontWeight: "bold", color: "white" }}>Age</Text>
          <Text style={{ color: "white" }}>{ageValue}</Text>
        </View>
      </View>

      {/* ideal weight section */}

      <View style={styles.vwSpecificBottom}>
        <View style={styles.vwIdealWeight}>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>
            Ideal Weight
          </Text>
          <Text style={{ color: "white", fontSize: 14 }}>{idealWeight}</Text>
          <Text style={{ color: "white", fontSize: 14 }}>Healthy Weight</Text>
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
    height: 200,
    width: 300,
    flex: 1,
  },
  vwSpecificTop: {
    flex: 0.3,
    maxHeight: 150,
    flexDirection: "row",
    backgroundColor: "transparent",
    color: "white",
    //    alignItems: "center",
    justifyContent: "center",
  },
  vwSpecificMiddle: {
    flexDirection: "row",
    maxHeight: 150,
    flex: 0.5,
    justifyContent: "center",
    backgroundColor: "transparent",
    color: "white",
  },
  vwSpecificBottom: {
    flex: 0.3,
    maxHeight: 180,
    backgroundColor: "transparent",
    color: "white",
  },
  vwGender: {
    flex: 0.33,
    backgroundColor: "transparent",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    margin: 5,
  },
  vwBodyFrame: {
    flex: 0.33,
    backgroundColor: "transparent",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    margin: 5,
  },
  vwWeight: {
    flex: 0.33,
    backgroundColor: "transparent",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    margin: 5,
  },
  vwHeight: {
    flex: 0.5,
    backgroundColor: "transparent",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    margin: 15,
  },
  vwAge: {
    flex: 0.5,
    backgroundColor: "transparent",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    margin: 15,
  },
  vwIdealWeight: {
    flex: 1,
    backgroundColor: "transparent",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    margin: 15,
  },
});

export default ResultSlide;
