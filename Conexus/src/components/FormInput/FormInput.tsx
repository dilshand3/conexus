import { StyleSheet, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react';
import Icon from '../../utils/Icon';

interface IFormInput {
  Inputname: string;
  isPassword: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

const FormInput: React.FC<IFormInput> = ({ Inputname, isPassword, value, onChangeText }) => {
  const [Password, setPassword] = useState<boolean>(isPassword);
  const [isFocused, setisFocused] = useState(false)
  return (
    <View style={[
      styles.container,
      { borderWidth : isFocused ? 2.4 : 1.4 }, 
    ]}>
      <TextInput style={styles.input} value={value}
        placeholder={Inputname}
        placeholderTextColor={"#85c1e9"} onChangeText={onChangeText}
        secureTextEntry={Password} keyboardType='default'
        cursorColor="#3498DB"
        onFocus={() => setisFocused(true)} 
        onBlur={() => setisFocused(false)} 
      />
      {
        isPassword && (
          <Pressable onPress={() => setPassword(!Password)} style={styles.eyeIcon}>
            <Icon
              name={Password ? 'eye' : 'eye-off'}
              size={20}
              color="#3498DB"
              type='Feather'
            />
          </Pressable>
        )
      }
    </View>
  )
}

export default FormInput;

const styles = StyleSheet.create({
  container: {
    borderColor: '#3498DB',
    borderWidth: 1.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#f5f9f9',
    borderRadius: 7,
    marginVertical: 10,
    paddingVertical: "2.7%"
  },
  input: {
    color: '#3498DB',
    fontSize: 15,
    flex: 1,
    paddingVertical: 10,
  },
  eyeIcon: {
    padding: -16,
  },
});
