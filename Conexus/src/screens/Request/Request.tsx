import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import RequestUser from '../../components/RequestUser/RequestUser';
import { requestedUser } from '../../dummyData/Chat';
import { useSafeAreaInsets } from "react-native-safe-area-context"

const Request: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={[styles.container, { paddingBottom: insets.bottom }]} showsVerticalScrollIndicator={false}>
      {
        requestedUser.map((val, index) => (
          <RequestUser key={index} name={val.name} avatar={val.avatar} username={val.username} />
        ))
      }
    </ScrollView>
  )
}

export default Request;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "1.8%",
    backgroundColor: "#F4FBFF",
    flex: 1,
    marginTop: "-4%"
  },
})