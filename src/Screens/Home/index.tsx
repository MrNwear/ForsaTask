import * as React from "react";
import { Text, View, Image, SafeAreaView, StatusBar, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./style";
import { logo } from "utils/constants";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "utils/colors";
interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <ScrollView style={{flex:1}} >

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
        <View>
          <Text style={{color:COLORS.yellow,fontSize:16,fontWeight:"400",}}>Get your limit</Text>
          <Text style={{color:COLORS.yellow,fontSize:12,fontWeight:"300",}}>Complete your infoand get up to EGP 100,000</Text>
        </View>
      </View>
    </View>
    <Image source={require("../../../assets/nike-offer.png")} style={styles.nikeOffer} resizeMode="contain"/>
    <View style={{flexDirection:'row',marginHorizontal:25, marginVertical:10,justifyContent:'space-between'}}>

    <Text style={{fontSize:18,fontWeight:'700'}}>Top Brands in retail</Text>
    <TouchableOpacity>
    <Text style={{fontSize:18,fontWeight:'700'}}>View All</Text>
    </TouchableOpacity>
    </View>
    

    
    </ScrollView>

  );
};

export default HomeScreen;
