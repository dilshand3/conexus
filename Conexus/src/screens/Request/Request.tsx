import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import RequestUser from '../../components/RequestUser/RequestUser';
import { requestedUser } from '../../dummyData/Chat';

const Request: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {
        requestedUser.map((val,index) => (
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
    marginTop : "-4%"
  },
})