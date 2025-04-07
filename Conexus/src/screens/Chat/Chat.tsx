import { Pressable, RefreshControl, ScrollView, StyleSheet, View,StatusBar } from 'react-native';
import React, { useState } from 'react';
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import { useThemeColors } from "../../utils/color";
import SingleChat from "../../components/SingleChat/SingleChat";
import { chatList } from "../../dummyData/Chat";
import SearchInput from '../../components/SearchInput/SearchInput';
import ChatFooter from '../../components/ChatFooter/ChatFooter';
import Icon from '../../utils/Icon';
import Loader from '../../utils/Loader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Chat: React.FC = ({ navigation }) => {
  const { color, accent } = useThemeColors();
  const [refreshing, setrefreshing] = useState<boolean>(false)

  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      setrefreshing(false)
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <StatusBar/>
      <ChatHeader />
      <ScrollView showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="transparent" colors={["transparent"]} />}>
        <SearchInput placeholder='Search Within Circle' />
        {
          refreshing && (
            <View style={{ marginVertical: "0.7%", marginHorizontal: "auto" }}>
              <Loader />
            </View>
          )
        }
        {
          chatList.map((val, index) => (
            <SingleChat key={index} name={val.name} dpimg={val.dpimg} date={val.date} lastmsg={val.lastmsg} />
          ))
        }
        <ChatFooter />
      </ScrollView>
      <Pressable style={styles.addIcon} onPress={() => navigation.navigate("notification")}>
        <Icon name='heart' type='EvilIcons' color={"white"} size={38} />
      </Pressable>
    </View>
  )
}

export default Chat;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "1.8%",
    paddingHorizontal: "2%",
    backgroundColor: "#F4FBFF",
    flex: 1
  },
  addIcon: {
    backgroundColor: "#3498DB",
    alignSelf: "center",
    padding: 14,
    borderRadius: 50,
    position: "absolute",
    bottom: "5%",
    right: "5%",
    height: 60,
    width: 60,
    paddingLeft: 11
  }
})