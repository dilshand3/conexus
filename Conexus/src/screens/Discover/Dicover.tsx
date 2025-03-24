import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AddUser from '../../components/AddUser/AddUser';

const Dicover = () => {
    return (
        <View style={styles.container}>
            <AddUser/>
        </View>
    )
}

export default Dicover;

const styles = StyleSheet.create({
    container: {
        paddingVertical: "1.8%",
        paddingHorizontal: "2%",
        backgroundColor: "#F4FBFF",
        flex: 1
    },
})