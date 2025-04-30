import { StyleSheet, View, Image, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useLoginMutation } from '../../Redux/AuthSlice/AutheSlice';
import EncryptedStorage from 'react-native-encrypted-storage';
import Loader from '../../utils/Loader';

interface Ilogin {
    navigation: any;
}

const LoginScreen: React.FC<Ilogin> = ({ navigation }) => {
    const [username, setusername] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const logo = require("../../assets/Logo/namelogo.png");
    const googleImg = require("../../assets/dp/google.png");
    const [login, { data, isLoading, isSuccess, isError, error }] = useLoginMutation();
    const handleSubmit = (): void => {
        login({ username, password })
    }

    useEffect(() => {
        if (isSuccess && data?.usId) {
            (async () => {
                try {
                    await EncryptedStorage.setItem("usId", data.usId);
                    navigation.navigate("conexus");
                } catch (storageError) {
                    console.log("Error storing token:", storageError);
                }
            })();
        }
    }, [isSuccess])

    return (
        <View style={[styles.container]}>
            <KeyboardAwareScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
                extraScrollHeight={50}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ gap: 3 }}>
                        <Image source={logo} style={styles.logo} />
                        <FormInput
                            Inputname="username"
                            isPassword={false}
                            value={username}
                            onChangeText={(text) => setusername(text)}
                        />
                        <FormInput
                            Inputname="password"
                            isPassword={true}
                            value={password}
                            onChangeText={(text) => setpassword(text)}
                        />
                        <TouchableOpacity activeOpacity={0.4} style={styles.submitbtn} onPress={handleSubmit}>
                            <Text style={styles.submitButtonText}>
                                {isLoading ? <Loader color='white' /> : "LOGIN"}
                            </Text>
                        </TouchableOpacity>
                        {isError && <Text style={styles.errormsg}>{error?.data?.message}</Text>}
                        <View style={styles.separator}>
                            <View style={styles.line} />
                            <Text style={styles.or}>OR Login With</Text>
                            <View style={styles.line} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("conexus")} activeOpacity={0.4} style={styles.loginOption}>
                            <Image source={googleImg} />
                            <Text style={styles.loginOptionTxt}>Login with Google</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4FBFF"
    },
    scrollContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: "10%",
        gap: 4,
        paddingHorizontal: 20
    },
    logo: {
        width: 150,
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    submitbtn: {
        backgroundColor: '#3498DB',
        paddingVertical: 12,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    switchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 1,
        paddingVertical: "3.5%",
        borderColor: "#3498DB",
        borderRadius: 4,
    },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    or: {
        marginHorizontal: 8,
        color: '#888',
        fontWeight: '500',
    },
    loginOption: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#3498DB",
        paddingVertical: "2%",
        borderRadius: 5,
        gap: 10
    },
    loginOptionTxt: {
        fontSize: 20,
        fontWeight: "700",
        color: "#3498DB"
    },
    errormsg: {
        textAlign: "center",
        marginTop: 2,
        color: "red",
        fontSize: 18
    }
})