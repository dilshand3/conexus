import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react'
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import SearchInput from "../../components/SearchInput/SearchInput"
import ChatFooter from '../../components/ChatFooter/ChatFooter';
import SingleChat from '../../components/SingleChat/SingleChat';
import { groupList } from '../../dummyData/Chat';

const Group = () => {
    return (
        <View style={styles.container}>
            <ChatHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
                <SearchInput placeholder='Search Within Groups' />
                {
                    groupList.map((val, index) => (
                        <SingleChat key={index} name={val.name} dpimg={val.dpimg} date={val.date} lastmsg={val.lastmsg} />
                    ))
                }
                <ChatFooter />
            </ScrollView>
        </View>
    )
}

export default Group;

const styles = StyleSheet.create({
    container: {
        paddingVertical: "1.8%",
        paddingHorizontal: "2%",
        backgroundColor: "#F4FBFF",
        flex: 1
    },
})