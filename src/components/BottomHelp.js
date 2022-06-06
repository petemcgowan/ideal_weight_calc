import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const { width, height } = Dimensions.get("screen");
const ITEM_HEIGHT = height * 0.8;

// const product = {
//   title: "SOFT MINI CROSSBODY BAG WITH KISS LOCK",
//   subHeading: "29.99£",
//   text: [
//     "Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.",
//     'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"',
//   ],
// };

const BottomHelp = ({ helpTitle, helpSubHeading, helpText }) => {
  console.log(
    "BottomHelp, height:" +
      height +
      ", ITEM_HEIGHT:" +
      ITEM_HEIGHT +
      ", width:" +
      width
  );
  console.log("helpSubHeading:" + helpSubHeading);
  /* snapPoints are the points where the bottom sheet can be pulled to
  e.g. 200 up, 500 up.

  Now I changed the view to have a height of 926 - 740, so it's about 25% of the screen.  Therefore the snap points, which are height dependent would now be (approx) 220, 870, 170
  snapPoints={[height - ITEM_HEIGHT, height - 70, ITEM_HEIGHT - 70]}
  The initialSnapIndex is which of the array of snap Points do you snap to 1st.  I have it set to 0 aka the 1st.

  But the view height is preventing the bottom sheet from going higher.  If I make the view HIGHER e.g. 900, then it pushes the Gender boxes etc UP, out of sight.  Setting the snap points is kinda useless here, because it can't go beyond the view that it's IN.  It needs to be in the same view as the Gender boxes

*/
  return (
    // <View
    // style={{
    //   minHeight: height - ITEM_HEIGHT,
    //   height: height - ITEM_HEIGHT,
    //   minWidth: 400,
    // }}
    // >
    <BottomSheet
      initialSnapIndex={0}
      snapPoints={[height - ITEM_HEIGHT, ITEM_HEIGHT - 70]}
    >
      <BottomSheetScrollView
        style={{ backgroundColor: "white" }}
        contentContainerStyle={{ padding: 20 }}
      >
        <Text
          style={{
            fontWeight: "800",
            fontSize: 16,
            textTransform: "uppercase",
          }}
        >
          {helpTitle}{" "}
        </Text>
        <Text style={{ fontSize: 16 }}>{helpSubHeading} </Text>
        <View style={{ marginVertical: 20 }}>
          {/*  {helpText.map((text, index) => {
                return (
                  <Text
                    key={index}
                    style={{ marginBottom: 10, lineHeight: 22 }}
                  >
                    {text}
                  </Text>
                );
              })}*/}
          <Text>{helpText}</Text>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default BottomHelp;
