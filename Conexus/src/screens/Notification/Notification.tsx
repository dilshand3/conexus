import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import NotificationNavigation from '../../Navigation/NotificationTopNavigation/NotificationTopNavigation';

const Notification: React.FC = () => {
    return (
        <View style={styles.container}>
            <NotificationNavigation />
        </View>
    )
}

export default Notification;

const styles = StyleSheet.create({
    container: {
        paddingVertical: "1.8%",
        paddingHorizontal: "2%",
        backgroundColor: "#F4FBFF",
        flex: 1
    },
})