import * as React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./style";
import { logo } from "utils/constants";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "utils/colors";
import useKeyTranslation from "utils/hooks/useKeyTranslation";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchSectors, fetchSectorsBrands } from "redux/Sectors/Thunks";
interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const [selectedSector, setSelectedSector] = React.useState<number>();
  const translate: any = useKeyTranslation("application.home");
  const dispatch = useAppDispatch();
  const sectors = useAppSelector((state) => state.sectors.sectors);
  const brands = useAppSelector(
    (state) => state.sectors.sectorsBrands[selectedSector]
  );
  React.useEffect(() => {
    dispatch(fetchSectors());
  }, []);
  React.useEffect(() => {
    setSelectedSector(sectors?.[0]?.value);
  }, [sectors]);
  React.useEffect(() => {
    if (selectedSector) {
      dispatch(fetchSectorsBrands(selectedSector));
    }
  }, [selectedSector]);
  function renderSector({ item }) {
    return (
      <Text
        onPress={() => {
          setSelectedSector(item.value);
        }}
        style={[
          styles.sectorItem,
          {
            backgroundColor: item.value == selectedSector ? "#3EBDAC" : null,
            color: item.value == selectedSector ? COLORS.white : COLORS.primary,
          },
        ]}
      >
        {item.label}
      </Text>
    );
  }
  function renderBrand({ item }) {
    return item?.thumbnail!=null?<Image source={{uri:item.thumbnail}} style={{width:80,height:80}} resizeMode="contain"/>:<Text style={[styles.sectorItem]}>{item.title}</Text>;
  }
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.header}>
        <SafeAreaView />
        <View style={styles.headerContainer}>
          <Feather name="search" size={28} color={COLORS.white} />
          <Image source={logo} />
          <View style={{ flexDirection: "row", columnGap: 15 }}>
            <Feather name="heart" size={28} color={COLORS.white} />
            <Ionicons
              name="notifications-outline"
              size={28}
              color={COLORS.white}
            />
          </View>
        </View>
        <View style={styles.offerContainer}>
          <MaterialCommunityIcons
            name="file-document-edit-outline"
            size={36}
            color={COLORS.yellow}
          />
          <View style={{ alignItems: "flex-start" }}>
            <Text
              style={{ color: COLORS.yellow, fontSize: 16, fontWeight: "400" }}
            >
              {translate("get-your-limit-title")}
            </Text>
            <Text
              style={{ color: COLORS.yellow, fontSize: 12, fontWeight: "300" }}
            >
              {translate("get-your-limit-subtitle")}
            </Text>
          </View>
        </View>
      </View>
      <Image
        source={require("../../../assets/nike-offer.png")}
        style={styles.nikeOffer}
        resizeMode="contain"
      />
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 25,
          marginVertical: 10,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          {translate("top-brands")}
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {translate("view-all")}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={sectors.slice(0, 5)}
        horizontal
        renderItem={renderSector}
        contentContainerStyle={{ columnGap: 20, paddingHorizontal: 25 }}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={brands?.slice(0, 5)}
        horizontal
        renderItem={renderBrand}
        contentContainerStyle={{ columnGap: 20,marginVertical:20, paddingHorizontal: 25 }}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default HomeScreen;
