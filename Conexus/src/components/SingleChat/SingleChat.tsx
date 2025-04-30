import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

interface ISingleChatData {
    name: string;
    dpimg: any;
    date: string;
    lastmsg: string
}

const SingleChat: React.FC<ISingleChatData> = ({ name, dpimg, date, lastmsg }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.chatContainer}>
            <Image source={dpimg} style={styles.dp} />
            <Pressable style={styles.chatContent} onPress={() => navigation.navigate("chatmsg")}>
                <View style={styles.chatHeader}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <Text style={styles.message}>{lastmsg}</Text>
                <Text style={styles.totalmsgNum}>2</Text>
            </Pressable>
        </View>
    )
}

export default SingleChat;

const styles = StyleSheet.create({
    chatContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    dp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#3498DB"
    },
    chatContent: {
        flex: 1,
        marginLeft: 12,
    },
    chatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2C3E50',
    },
    date: {
        fontSize: 12,
        color: '#888',
    },
    message: {
        fontSize: 14,
        color: '#555',
    },
    totalmsgNum : {
        position : "absolute",
        right : 0,
        bottom : -2,
        backgroundColor : "#3498DB",
        color : "white",
        paddingHorizontal : 8,
        paddingVertical : 2,
        borderRadius : 100,
        justifyContent : "center"
    }
});
