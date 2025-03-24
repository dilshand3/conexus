import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import React, { useState } from 'react';

const dummyUsers = [
  {
    id: 1,
    username: 'dilshan.d3',
    fullName: 'Dilshan Hansal',
    avatar: require('../../assets/dp/dp.jpeg'),
  },
  {
    id: 2,
    username: 'ali.khan',
    fullName: 'Ali Khan',
    avatar: require('../../assets/dp/dp.jpeg'),
  },
  {
    id: 3,
    username: 'sana.s',
    fullName: 'Sana Sheikh',
    avatar: require('../../assets/dp/dp.jpeg'),
  },
  {
    id: 4,
    username: 'mohit.r',
    fullName: 'Mohit Rajput',
    avatar: require('../../assets/dp/dp.jpeg'),
  },
];

const AddUser = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const handleAddFriend = (id: number) => {
    setAddedIds([...addedIds, id]);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.userCard}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.fullName}>{item.fullName}</Text>
        <Text style={styles.username}>@{item.username}</Text>
      </View>

      {addedIds.includes(item.id) ? (
        <Text style={styles.addedText}>Added</Text>
      ) : (
        <Pressable style={styles.addBtn} onPress={() => handleAddFriend(item.id)}>
          <Text style={styles.btnText}>Add Friend</Text>
        </Pressable>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>People You May Know</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AddUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4FBFF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#3498DB',
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  username: {
    fontSize: 14,
    color: '#555',
  },
  addBtn: {
    backgroundColor: '#3498DB',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addedText: {
    color: 'green',
    fontWeight: 'bold',
  },
});
