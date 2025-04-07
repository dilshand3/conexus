import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native'
import React from 'react';
import ChatMsgHeader from '../../components/ChatMsgHeader/ChatMsgHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColors } from '../../utils/color';
import UserMessage from '../../components/UserMessage/UserMessage';
import FriendMessage from '../../components/FriendMessage/FriendMessage';
import ChatInput from '../../components/ChatInput/ChatInput';

const ChatDate = () => {
  const { accent } = useThemeColors();
  return (
    <>
      <Text style={[dateStyle.container]} >Fri, Jul 25</Text>
    </>
  )
}

const ChatMsg: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <ChatMsgHeader />
      <ChatDate />
      <UserMessage />
      <FriendMessage/>
      <ChatInput/>
    </SafeAreaView>
  )
}

export default ChatMsg;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "1.8%",
    paddingHorizontal: "2%",
    backgroundColor: "#F4FBFF",
    flex: 1
  },
})

const dateStyle = StyleSheet.create({
  container: {
    textAlign: "center",
    fontWeight: "600",
    backgroundColor: "#EDF1F5",
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 7,
    marginTop: "3%"
  }
})