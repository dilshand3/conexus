import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Icon from "../../utils/Icon";
import { useThemeColors } from '../../utils/color';

const ChatHeader: React.FC = () => {
    const { accent } = useThemeColors();
    return (
        <View style={styles.header}>
            <Text style={styles.headingtxt}>Conexus</Text>
            <View style={styles.iconContainer}>
                <Icon name='qrcode-scan' color={accent} size={28} type='MaterialCommunityIcons' />
                <Icon name='camera-outline' color={accent} size={32} type='Ionicons' />
                <Icon name='dots-three-vertical' color={accent} size={25} type='Entypo' />
            </View>
        </View>
    )
}

export default ChatHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "1.5%",
        paddingLeft: "2.7%",
    },
    headingtxt: {
        fontSize: 29,
        color: "#3498DB",
        fontWeight: "500"
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "5%"
    }
})