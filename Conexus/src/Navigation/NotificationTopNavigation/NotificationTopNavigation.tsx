import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Request from '../../screens/Request/Request';
import Discover from '../../screens/Discover/Dicover';
import Icon from "../../utils/Icon";
import { View, Text, StyleSheet } from 'react-native';
import StackHeader from '../../components/StackHeader/StackHeader';

const NotificationNavigation = () => {
    const Tab = createMaterialTopTabNavigator();

    return (
        <>
        <StackHeader title='Notification'/>
            <Tab.Navigator
                tabBarPosition="top"
                swipeEnabled={false}
                screenOptions={{
                    tabBarShowIcon: true,
                    tabBarStyle: styles.tabBar,
                    tabBarIndicatorStyle: styles.tabBarIndicator,
                    tabBarLabelStyle: styles.tabLabel,
                    tabBarActiveTintColor: '#3498DB',
                    tabBarInactiveTintColor: '#555',
                    tabBarIndicatorStyle: {
                        height: 0,
                    },
                }}
            >
                <Tab.Screen
                    name='Requests'
                    component={Request}
                    options={{
                        tabBarLabel: ({ color, focused }) => (
                            <View style={styles.tabContent}>
                                <Icon
                                    name={"user-plus"}
                                    color={focused ? '#3498DB' : '#555'}
                                    size={18}
                                    type={focused ? "FontAwesome5" : "Feather"}
                                />
                                <Text style={[styles.tabText, { color: focused ? '#3498DB' : '#555' }]}>
                                    Requests
                                </Text>
                            </View>
                        )
                    }}
                />
                <Tab.Screen
                    name='Discover'
                    component={Discover}
                    options={{
                        tabBarLabel: ({ color, focused }) => (
                            <View style={styles.tabContent}>
                                <Icon
                                    name={focused ? "compass" : "compass-outline"}
                                    color={focused ? '#3498DB' : '#555'}
                                    size={18}
                                    type={"Ionicons"}
                                />
                                <Text style={[styles.tabText, { color: focused ? '#3498DB' : '#555' }]}>
                                    Discover
                                </Text>
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        </>
    );
};

export default NotificationNavigation;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#F4FBFF',
        elevation: 0,
    },
    tabBarIndicator: {
        backgroundColor: '#3498DB',
        height: 3,
        borderRadius: 2,
    },
    tabLabel: {
        textTransform: 'none',
    },
    tabContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tabText: {
        marginLeft: 6,
        fontSize: 14,
    },
});
