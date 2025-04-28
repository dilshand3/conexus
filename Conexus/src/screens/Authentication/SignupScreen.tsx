import { StyleSheet, View, Image, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSignupMutation } from '../../Redux/AuthSlice/AutheSlice';
import Loader from '../../utils/Loader';
import EncryptedStorage from "react-native-encrypted-storage";

interface Isignup {
  navigation: any;
}

const SignupScreen: React.FC<Isignup> = ({ navigation }) => {
  const [username, setusername] = useState<string>("");
  const [name, setname] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const logo = require("../../assets/Logo/namelogo.png");
  const googleImg = require("../../assets/dp/google.png");
  const [signup, { isSuccess, isLoading, isError, error, data }] = useSignupMutation();
  const handleSubmit = (): void => {
    signup({ username, name, password })
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
              Inputname="name"
              isPassword={false}
              value={name}
              onChangeText={(text) => setname(text)}
            />
            <FormInput
              Inputname="password"
              isPassword={true}
              value={password}
              onChangeText={(text) => setpassword(text)}
            />
            <TouchableOpacity activeOpacity={0.4} style={styles.submitbtn} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>
                {isLoading ? <Loader color='white' /> : "SIGN-UP"}
              </Text>
            </TouchableOpacity>
            {isError && <Text style={styles.errormsg}>{error?.data?.message}</Text>}
            <View style={styles.separator}>
              <View style={styles.line} />
              <Text style={styles.or}>OR Sign Up With</Text>
              <View style={styles.line} />
            </View>
            <TouchableOpacity activeOpacity={0.4} style={styles.signOption}>
              <Image source={googleImg} />
              <Text style={styles.signupOptionTxt}>Sign Up with Google</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default SignupScreen;

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
  signOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#3498DB",
    paddingVertical: "2%",
    borderRadius: 5,
    gap: 10
  },
  signupOptionTxt: {
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