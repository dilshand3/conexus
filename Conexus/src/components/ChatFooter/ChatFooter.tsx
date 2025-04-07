import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useThemeColors } from '../../utils/color';
import Icon from "../../utils/Icon";

const ChatFooter: React.FC = () => {
    const { accent } = useThemeColors();
    return (
        <View style={styles.bottomtxt}>
            <View>
                <Icon name='lock' color={accent} type='FontAwesome' size={22} />
            </View>
            <Text style={styles.bottomtxt}>Chats are end-to-end Encrypted</Text>
        </View>
    )
}

export default ChatFooter;

const styles = StyleSheet.create({
    bottomtxt: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "1%",
        fontWeight: "500",
        color: "#3498DB",
        gap: 10
    },
})