import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';

interface addUser {
  name: string;
  username: string;
  avatar: any
}

const AddUser: React.FC<addUser> = ({ name, username, avatar }) => {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />

      <View style={styles.userInfo}>
        <Text style={styles.username}>{name}</Text>
        <Text style={styles.fullName}>@{username}</Text>
      </View>

      <View style={styles.actionContainer}>
        <Pressable style={styles.addButton} onPress={() => Alert.alert("Friend addded")}>
          <Text style={styles.addText}>Add</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default AddUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: "4.5%",
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#3498DB",
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  fullName: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: "2%"
  },
  addButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginLeft: 12,
  },
  addText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
})