import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Calls from '../../screens/Calls/Calls.tsx';
import ProfileStackNavigation from '../ProfileStackNavigation/ProfileStackNavigation.tsx';
import Icon from '../../utils/Icon.tsx';
import { useThemeColors } from "../../utils/color.ts";
import StackNavigation from "../ChatStackNavigation/ChatStackNavigation.tsx";
import Search from '../../screens/Search/Search.tsx';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { color, accent } = useThemeColors();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? '';

        return {
          headerShown: false,
          tabBarActiveTintColor: accent,
          tabBarInactiveTintColor: color,
          tabBarIconStyle: {
            marginTop: "0.3%"
          },
          tabBarLabelStyle: {
            fontWeight: "400",
            fontSize: 15,
            textAlign: "center",
            marginTop: "-3%"
          },
          tabBarStyle: ['chatmsg', 'notification', 'qrcode','videocall'].includes(routeName)
            ? { display: 'none' }
            : { backgroundColor: "#F4FBFF" }
        };
      }}
    >
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
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={"search-outline"} color={color} size={30} type='Ionicons' />
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
        component={ProfileStackNavigation}
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
    <>
      <TabNavigator />
    </>
  )
}

export default BottomNavigation;