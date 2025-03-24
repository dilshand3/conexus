import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';

interface SingleChatData {
    name: string;
    dpimg: any;
    date: string;
    lastmsg: string
}

const SingleChat: React.FC<SingleChatData> = ({ name, dpimg, date, lastmsg }) => {
    return (
        <View style={styles.chatContainer}>
            <Image source={dpimg} style={styles.dp} />
            <Pressable style={styles.chatContent} onPress={() => Alert.alert("i am dilshan")}>
                <View style={styles.chatHeader}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <Text style={styles.message}>{lastmsg}</Text>
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
});
