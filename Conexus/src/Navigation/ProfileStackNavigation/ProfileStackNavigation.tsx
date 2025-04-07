import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../screens/Profile/Profile';
import EditProfile from '../../screens/EditProfile/EditProfile';

const ProfileStackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='profile' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='profile' component={Profile} />
            <Stack.Screen name='editProfile' component={EditProfile} />
        </Stack.Navigator>
    )
}

export default ProfileStackNavigation;