import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';

const QrCode: React.FC = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text>QrCode</Text>
        </ScrollView>
    )
}

export default QrCode;

const styles = StyleSheet.create({
    container: {
        paddingVertical: "1.8%",
        paddingHorizontal: "2%",
        backgroundColor: "#F4FBFF",
        flex: 1
    }
})