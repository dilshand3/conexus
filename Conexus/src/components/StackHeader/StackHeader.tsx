import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import Icon from '../../utils/Icon';
import { useNavigation } from '@react-navigation/native';
import {useSafeAreaInsets} from "react-native-safe-area-context"

interface Istackheader {
    title: string;
    left?: string;
}

const StackHeader: React.FC<Istackheader> = ({title,left}) => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    return (
        <View style={styles.parentCotainer}>
            <View style={[styles.container,{paddingTop : insets.top}]}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Icon
                        name="angle-left"
                        size={34}
                        color="#3498DB"
                        type='FontAwesome'
                        style={{ marginRight: "5%", marginLeft: "2%" }}
                    />
                </Pressable>
                <Text style={[styles.title,{marginLeft : left}]}>{title}</Text>
            </View>
        </View>
    )
}

export default StackHeader;

const styles = StyleSheet.create({
    parentCotainer : {
        backgroundColor: "#F4FBFF",
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "69%",
        justifyContent: "space-between",
        paddingHorizontal: "5.5%",
        // paddingTop: "4.5%",
    },
    title: {
        color: "#3498DB",
        fontWeight: "600",
        fontSize: 21
    }
})