import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../../utils/Icon';

interface requestUserDetail {
    username: string;
    name: string;
    avatar: any;
}

const RequestUser: React.FC<requestUserDetail> = ({ username, name, avatar }) => {

    return (
        <View style={styles.container}>
            <Image source={avatar} style={styles.avatar} />

            <View style={styles.userInfo}>
                <Text style={styles.username}>{name}</Text>
                <Text style={styles.fullName}>@{username}</Text>
            </View>

            <View style={styles.actionContainer}>
                <Pressable style={styles.acceptButton} onPress={() => Alert.alert("Request Accepted")}>
                    <Text style={styles.acceptText}>Confirm</Text>
                </Pressable>
                <Icon
                    name='cross'
                    type='Entypo'
                    color='#3498DB'
                    size={37}
                    onPress={() => Alert.alert("Request Rejected")}
                />
            </View>
        </View>
    );
};

export default RequestUser;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: "4.5%",
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#3498DB",
    },
    userInfo: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2C3E50',
    },
    fullName: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: "2%"
    },
    acceptButton: {
        backgroundColor: '#3498DB',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginLeft: 12,
    },
    acceptText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
