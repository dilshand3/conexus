import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, Pressable } from "react-native";
import LoginScreen from "../../screens/Authentication/LoginScreen";
import SignupScreen from "../../screens/Authentication/SignupScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

interface ICustomTab {
    state: any;
    descriptors: any;
    navigation: any;
}

const CustomTabBar: React.FC<ICustomTab> = ({ state, descriptors, navigation }) => {
    const inset = useSafeAreaInsets();
    return (
        <View
            style={{
                flexDirection: "row",
                backgroundColor: "#F4FBFF",
                marginHorizontal: 20,
                borderRadius: 8,
                overflow: "hidden",
                justifyContent: "space-between",
                padding: 5,
                marginTop: inset.top,
                borderWidth: 2.4,
                borderColor: "#3498DB"
            }}
        >
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                return (
                    <Pressable
                        key={index}
                        onPress={() => navigation.navigate(route.name)}
                        style={{
                            flex: 1,
                            marginHorizontal: index === 0 ? 0 : 5,
                            backgroundColor: isFocused ? "#3498DB" : "transparent",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 8,
                            paddingVertical: 13,
                        }}
                    >
                        <Text
                            style={{
                                color: isFocused ? "#fff" : "#3498DB",
                                fontSize: 16,
                                fontWeight: "700",
                            }}
                        >
                            {label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
};

const AuthenticationTopNavigation = () => {
    const inset = useSafeAreaInsets();
    return (
        <View style={{ flex: 1, backgroundColor: "#F4FBFF",paddingTop : inset.top }}>
            <Tab.Navigator
                tabBar={(props) => <CustomTabBar {...props} />}
                screenOptions={{
                    swipeEnabled: true,
                    animationEnabled: true,
                }}
            >
                <Tab.Screen name="Sign In" component={LoginScreen} />
                <Tab.Screen name="Sign Up" component={SignupScreen} />
            </Tab.Navigator>
        </View>
    );
};

export default AuthenticationTopNavigation;
