import { StyleSheet } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScanQr from '../../screens/ScanQr/ScanQr';
import QrCode from '../../screens/QrCode/QrCode';
import StackHeader from '../../components/StackHeader/StackHeader';

const QrCodeNavigation: React.FC = () => {
    const Stack = createMaterialTopTabNavigator();
    return (
        <>
            <StackHeader title='SmartConnect' left='35%' />
            <Stack.Navigator
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
                <Stack.Screen name='QR Scanner' component={ScanQr} />
                <Stack.Screen name='My QR' component={QrCode} />
            </Stack.Navigator>
        </>
    )
}

export default QrCodeNavigation;

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