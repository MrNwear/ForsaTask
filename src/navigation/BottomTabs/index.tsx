import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from '../style';
import { EvilIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from 'Screens/Home';
import COLORS from 'utils/colors';
import Profile from 'Screens/Profile';
import Offers from 'Screens/Offers';
import Retail from 'Screens/Retail';
export type AppStackNavigatorParams = {
  Home: {identifier: string} | undefined;
  Retail: {identifier: string} | undefined;
  Offers: {identifier: string} | undefined;
  Profile: {identifier: string} | undefined;
 
};
const Tab = createBottomTabNavigator<AppStackNavigatorParams>();
const AppBottomTabs = () => {
  return (
    <>
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarStyle: [
            styles.tabBarStyle,
            {
              backgroundColor: COLORS.white,          
            },
          ],
          tabBarActiveTintColor:COLORS.primary,
          tabBarLabelStyle:{fontSize:20,marginBottom:10}
        };
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              style={{
                color: focused ? COLORS.primary : COLORS.inactive,
                fontSize: 26,
              }}
            />
          ),
        }}
      />
    
      <Tab.Screen
        name="Retail"
        component={Retail}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <EvilIcons
              name={"tag"}
              style={{
                color: focused ? COLORS.primary : COLORS.inactive,
                fontSize: 40,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'heart' : 'heart-outline'}
              style={{
                color: focused ? COLORS.primary : COLORS.inactive,
                fontSize: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              style={{
                color: focused ? COLORS.primary : COLORS.inactive,
                fontSize: 25,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
     
      </>
  );
};
export default AppBottomTabs;