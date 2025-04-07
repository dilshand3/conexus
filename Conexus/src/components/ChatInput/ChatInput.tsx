import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useRef, useEffect } from 'react';
import Icon from '../../utils/Icon';

const ChatInput = () => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 300); 
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      style={styles.wrapper}
    >
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            ref={inputRef}
            placeholder="Message"
            style={styles.textInput}
            placeholderTextColor="#999"
          />
        </View>

        <Icon name="camera" type="Feather" size={20} color="#3498DB" style={styles.icon} />
        <Icon name="mic" type="Feather" size={20} color="#3498DB" style={styles.icon} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    position : "absolute",
    bottom : 0,
    width : "100%"
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  textInput: {
    fontSize: 16,
    color: '#2C3E50',
  },
  icon: {
    marginLeft: 12,
  },
});
