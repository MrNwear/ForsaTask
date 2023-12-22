import { ScaledSheet } from "react-native-size-matters";
import COLORS from "utils/colors";

const styles = ScaledSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    height: 300,
    borderBottomEndRadius: "40@s",
    borderBottomStartRadius: "40@s",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: "25@s",
    justifyContent: "space-between",
    alignItems: "center",
  },
  offerContainer: {
    flexDirection: "row",
    borderColor: COLORS.yellow,
    borderWidth: 1,
    margin: '20@s',
    padding: '10@s',
    columnGap:'15@s',
    borderRadius: '15@s',
  },
  nikeOffer:{marginTop:-60,marginHorizontal:25},
  sectorItem:{
    padding:4,
    fontSize:14
  }
});
export default styles;
