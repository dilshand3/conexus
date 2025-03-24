import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from '../../screens/Notification/Notification';
import Chat from '../../screens/Chat/Chat';
import { View, StyleSheet } from 'react-native';
import Icon from '../../utils/Icon';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (

    <Stack.Navigator initialRouteName='chat'>
        <Stack.Screen name='chat' component={Chat} options={{ headerShown: false }} />
        <Stack.Screen
            name='notification'
            component={Notification}
            options={({ navigation }) => ({
                title: 'Notifications',
                headerStyle: {
                    backgroundColor: "#F4FBFF",
                },
                headerTintColor: '#3498DB',
                headerLeft: () => (
                    <Icon
                        name="angle-left"
                        size={34}
                        color="#3498DB"
                        type='FontAwesome'
                        style={{ marginRight: "5%", marginLeft: "2%" }}
                        onPress={() => navigation.goBack()}
                    />
                ),
            })}
        />
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