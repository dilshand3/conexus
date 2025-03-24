import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Chat from "../../screens/Chat/Chat.tsx";
import Group from "../../screens/Group/Group.tsx"
import Calls from '../../screens/Calls/Calls.tsx';
import Profile from "../../screens/Profile/Profile.tsx";
import Icon from '../../utils/Icon.tsx';
import { useThemeColors } from "../../utils/color.ts";
import StackNavigation from "../StackNavigation/StackNavigation.tsx";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { color, accent } = useThemeColors();
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false, tabBarActiveTintColor: accent, tabBarInactiveTintColor: color, tabBarIconStyle: {
        marginTop: "0.3%"
      }, tabBarLabelStyle: {
        fontWeight: "400",
        fontSize: 15,
        textAlign: "center",
        marginTop: "-3%"
      },
      tabBarStyle: {
        backgroundColor: "#F4FBFF",
      }
    }}>
      <Tab.Screen
        name='Chats'
        component={StackNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"} color={color} size={size} type='Ionicons' />
          )
        }}
      />
      <Tab.Screen
        name='Groups'
        component={Group}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={focused ? "account-group" : "account-group-outline"} color={color} size={33} type='MaterialCommunityIcons' />
          )
        }}
      />
      <Tab.Screen
        name='Calls'
        component={Calls}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name='phone' color={color} size={focused ? 28 : size} type={focused ? "FontAwesome" : "Feather"} />
          )
        }}
      />
      <Tab.Screen
        name='Profle'
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={focused ? "user" : "user-o"} color={color} size={size} type='FontAwesome' />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const BottomNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default BottomNavigation;