import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from '../../utils/Icon';
import { useThemeColors } from '../../utils/color';

interface Iurl {
    url: string
}

const ShortURL: React.FC<Iurl> = ({url}) => {
    const { accent } = useThemeColors();
    return (
        <View style={[styles.container, { backgroundColor: accent }]}>
            <Icon name='link' type='Entypo' color={"white"} size={25} />
            <Text style={styles.url}>{url}</Text>
            <TouchableOpacity activeOpacity={0.5}>
                <Icon name='content-paste' type='MaterialCommunityIcons' color={"white"} size={25} />
            </TouchableOpacity>
        </View>
    )
}

export default ShortURL;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: "4%",
        justifyContent: "center",
        borderRadius: 9,
        gap: 5,
        marginTop: "2%"
    },
    url: {
        fontSize: 19,
        fontWeight: "600",
        color: "white"
    }
})