import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UrlShortner from '../../screens/UrlShortner/UrlShortner';
import BottomNavigation from '../BottomTab/BottomNavigation';
import AuthenticationTopNavigation from '../../Navigation/AuthenticationTopNavigation/AuthenticationTopNavigation';

const ConexusStackNavigation : React.FC = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='urlShortner' screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='urlShortner'
                    component={UrlShortner}
                />
                <Stack.Screen
                    name='Authentication'
                    component={AuthenticationTopNavigation}
                />
                <Stack.Screen
                    name='conexus'
                    component={BottomNavigation}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ConexusStackNavigation;
