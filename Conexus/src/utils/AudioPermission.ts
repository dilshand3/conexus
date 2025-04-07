import { PermissionsAndroid, Platform } from 'react-native';

const userequestMicrophonePermission = async (): Promise<any> => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                {
                    title: 'Microphone Permission',
                    message: 'This app needs access to your microphone to record audio.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Microphone permission granted');
            } else {
                console.log('Microphone permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }
};

export { userequestMicrophonePermission }