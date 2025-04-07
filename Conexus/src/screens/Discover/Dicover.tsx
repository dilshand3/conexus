import { ScrollView, StyleSheet } from 'react-native'
import React from 'react';
import AddUser from '../../components/AddUser/AddUser';
import { exploreUser } from '../../dummyData/Chat';

const Dicover: React.FC = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {
                exploreUser.map((val, index) => (
                    <AddUser key={index} name={val.name} username={val.username} avatar={val.avatar} />
                ))
            }
        </ScrollView>
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