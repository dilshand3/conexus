import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useThemeColors } from '../../utils/color';

const FriendMessage = () => {
  const { color } = useThemeColors(); 
  return (
    <View style={styles.container}>
      <View style={styles.messageBubble}>
        <Text style={[styles.messageText, { color }]}>Looks like a dream place to visit!</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>10:12</Text>
        </View>
      </View>
    </View>
  );
};

export default FriendMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  messageBubble: {
    backgroundColor: '#E6F0F8',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#808080',
  },
});
