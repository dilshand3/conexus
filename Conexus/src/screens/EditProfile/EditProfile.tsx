import { ScrollView, StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from '../../utils/Icon';
import { useThemeColors } from '../../utils/color';
import EditInput from '../../components/EditInput/EditInput';
import { SvgUri } from 'react-native-svg';

const EditProfile: React.FC = () => {
    const avatars = [
        "https://api.dicebear.com/7.x/adventurer/svg?seed=CoolBoy",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=SkaterDude",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=GamerBoy",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Rockstar",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=StreetKid",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=AnimeBoy",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=CyberNerd",
    ];

    const navigation = useNavigation();
    const { accent } = useThemeColors();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Icon name='chevron-left' color={accent} size={37} type='Entypo' />
                </Pressable>
                <Text style={[styles.headerTxt, { color: accent }]}>Edit Profile</Text>
            </View>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        avatars.map((val, index) => (
                            <SvgUri key={index} uri={val} height={100} width={100} />
                        ))
                    }
                </ScrollView>
                <EditInput value={"dilshan hansal"} />
            </View>
        </ScrollView>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        paddingVertical: "1.8%",
        paddingHorizontal: "2%",
        backgroundColor: "#F4FBFF",
        flex: 1
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: "2.8%",
        alignSelf: "flex-start",
        gap: "23%",
        marginLeft: "1.5%"
    },
    headerTxt: {
        fontSize: 25,
        fontWeight: "500"
    }
})