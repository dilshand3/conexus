import { StyleSheet, Text, View, Pressable, StatusBar } from 'react-native'
import React from 'react';
import Icon from "../../utils/Icon";
import { useThemeColors } from '../../utils/color';
import { useNavigation } from '@react-navigation/native';
import {useSafeAreaInsets} from "react-native-safe-area-context"

const ChatHeader: React.FC = () => {
    const navigation = useNavigation()
    const { accent, background } = useThemeColors();
    const inets = useSafeAreaInsets()
    return (
        <View style={[styles.header,{paddingTop : inets.top}]}>
            <StatusBar backgroundColor={background} barStyle="dark-content" />
            <Text style={styles.headingtxt}>Conexus</Text>
            <View style={styles.iconContainer}>
                <Pressable onPress={() => navigation.navigate("qrcode")}>
                    <Icon name='qrcode-scan' color={accent} size={28} type='MaterialCommunityIcons' />
                </Pressable>
                <Pressable>
                    <Icon name='dots-three-vertical' color={accent} size={25} type='Entypo' />
                </Pressable>
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
        paddingBottom: "1%",
        paddingLeft: "2.7%",
        // paddingTop: "4%"
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
        gap: "9%"
    }
})