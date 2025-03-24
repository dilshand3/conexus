import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Calls: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Calls</Text>
    </ScrollView>
  )
}

export default Calls;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "1.8%",
    paddingHorizontal: "2%",
    backgroundColor: "#F4FBFF",
    flex: 1
  }
})