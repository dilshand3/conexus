import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from '../../screens/Notification/Notification';
import Chat from '../../screens/Chat/Chat';
import { View, StyleSheet } from 'react-native';
import ChatMsg from '../../screens/ChatMsg/ChatMsg';
import QrCodeNavigation from '../QrCodeNavigation/QrCodeNavigation';
import VideoCallScreen from '../../screens/VideoCallScreen/VideoCallScreen';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (

    <Stack.Navigator initialRouteName='chat'>
        <Stack.Screen name='chat' component={Chat} options={{ headerShown: false }} />
        <Stack.Screen
            name='notification'
            component={Notification}
            options={{ headerShown: false }}
        />
        <Stack.Screen name='qrcode' component={QrCodeNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='chatmsg' component={ChatMsg} options={{ headerShown: false }} />
        <Stack.Screen name='videocall' component={VideoCallScreen} options={{headerShown : false}} />
    </Stack.Navigator>
)

const StackNavigation: React.FC = () => {
    return (
        <View style={styles.container}>
            <StackNavigator />
        </View>
    )
}

export default StackNavigation;

export const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})