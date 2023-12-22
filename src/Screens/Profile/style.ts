import { ScaledSheet } from "react-native-size-matters";
import COLORS from "utils/colors";

const styles = ScaledSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    height: 200,
    borderBottomEndRadius: "50@s",
    borderBottomStartRadius: "50@s",
    alignItems:"flex-end"
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: "25@s",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  

});
export default styles;
