import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Alert, I18nManager } from 'react-native';
import styles from './style';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import COLORS from 'utils/colors';
import useKeyTranslation from 'utils/hooks/useKeyTranslation';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import i18n from 'i18n';
interface ProfileProps {}

const Profile = (props: ProfileProps) => {
  const translate:any=useKeyTranslation("application.profile");
  const changeLanguage=async()=>{
    Alert.alert('', 'Change Language', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {text: 'OK', onPress: async() => {
      await AsyncStorage.setItem("language",i18next.language === "ar" ?"en":"ar")
      if(i18next.language=="ar")
      I18nManager.forceRTL(false);
    else
    I18nManager.forceRTL(true);

      await Updates.reloadAsync();
    }},
  ]);}
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.header}>
        <SafeAreaView />
        
        <View style={styles.headerContainer}>
        <Text style={{color:COLORS.white,marginEnd:"20%",fontSize:24}}>{translate("title")}</Text>
          <View style={{ flexDirection: "row", columnGap: 15 }}>
            <Feather name="heart" size={28} color={COLORS.white} />
            <Ionicons
              name="notifications-outline"
              size={28}
              color={COLORS.white}
            />
          </View>
        </View>
        
      </View>
      <Text style={{margin:25,fontSize:20,color:COLORS.primary}}>{translate("share-app")}</Text>
      <TouchableOpacity onPress={changeLanguage} style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:25}}>
      <Text style={{fontSize:20,color:COLORS.primary}}>{translate("change-language")}</Text>
     <View style={{flexDirection:'row',alignItems:'center'}}>
      <Text style={{fontSize:20,color:COLORS.primary}}>{translate("language")}</Text>
      <AntDesign name="down" size={24} color={COLORS.primary} />
     </View>
      </TouchableOpacity>
     
   
    </ScrollView>
  );
};

export default Profile;

