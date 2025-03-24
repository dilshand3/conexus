import { Image, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react';
import Icon from "../../utils/Icon";
import { useThemeColors } from '../../utils/color';
import ProfileDetail from '../../components/ProfileDetail/ProfileDetail';
import { profileDetailData } from '../../dummyData/Chat';

const Profile: React.FC = () => {
    const dpImg = require("../../assets/dp/dp.jpeg");
    const { accent } = useThemeColors();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.dpContainer}>
                <Image source={dpImg} style={styles.img} />
                <Pressable style={[styles.updateDp, { backgroundColor: accent }]}>
                    <Icon name='camera-outline' color={"white"} size={24} type='Ionicons' />
                </Pressable>
            </View>
            <View style={styles.username}>
                <Icon name='user' type='Entypo' size={29} color={accent} />
                <Text style={[styles.username, { marginTop: "-0.3%" }]}>dilshan.d3</Text>
            </View>
            {
                profileDetailData.map((val, index) => (
                    <ProfileDetail key={index} name={val.name} iconname={val.iconname} type={val.type} title={val.title} />
                ))
            }
            <View style={styles.bottombtn}>
                <Pressable style={[styles.btn, styles.editbtn]}><Text style={[styles.btntxt, { color: "#3498DB" }]}>Edit Profile</Text></Pressable>
                <Pressable style={styles.btn}><Text style={styles.btntxt}>LogOut</Text></Pressable>
            </View>
        </ScrollView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        paddingVertical: "1.8%",
        paddingHorizontal: "2%",
        backgroundColor: "#F4FBFF",
        flex: 1
    },
    dpContainer: {
        alignSelf: 'center',
        position: 'relative',
        marginTop: "8%"
    },
    img: {
        borderRadius: 370,
        height: 190,
        width: 190
    },
    updateDp: {
        position: 'absolute',
        bottom: 3,
        right: 9,
        borderRadius: 50,
        padding: 14,
    },
    username: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 26,
        fontWeight: "700",
        marginTop: "3%",
        gap: 10,
        color: "#3498DB"
    },
    bottombtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: "2%",
        marginBottom: "8%",
        gap: "5%",
        paddingHorizontal: "5%",
        marginTop: "4.5%"
    },
    btn: {
        paddingVertical: "3%",
        width: "50%",
        borderRadius: 13,
        borderWidth: 1.3,
        borderColor: "#3498DB",
        backgroundColor: "#3498DB",
    },
    btntxt: {
        fontWeight: "600",
        fontSize: 22,
        textAlign: "center",
        color: "white"
    },
    editbtn: {
        backgroundColor: "transparent"
    }
});
