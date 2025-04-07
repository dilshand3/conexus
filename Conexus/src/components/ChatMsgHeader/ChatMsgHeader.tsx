import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from '../../utils/Icon';
import { useThemeColors } from '../../utils/color';

const ChatMsgHeader: React.FC = () => {
  const navigation = useNavigation();
  const avatar = require("../../assets/dp/dp.jpeg");
  const { accent } = useThemeColors();

  return (
    <View style={[styles.container,{borderColor : accent}]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon
          name="angle-left"
          size={32}
          color={accent}
          type="FontAwesome"
          style={styles.backIcon}
        />
      </Pressable>

      <Pressable style={styles.profileContainer} onPress={() => Alert.alert("Contact Info", "Open Contact Info screen")}>
        <Image source={avatar} style={styles.avatar} />
        <View>
          <Text style={styles.name}>Martha Craig</Text>
          <Text style={styles.subText}>tap here for contact info</Text>
        </View>
      </Pressable>

      <View style={styles.iconContainer}>
        <Pressable onPress={() => navigation.navigate("videocall")}>
          <Icon name="video" type="Feather" color={accent} size={24} style={styles.iconSpacing} />
        </Pressable>
        <Pressable onPress={() => Alert.alert("Audio Call", "Audio Call started")}>
          <Icon name="phone" type="Feather" color={accent} size={24} />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatMsgHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 7,
    justifyContent: 'space-between',
    borderBottomWidth : 0.9,
  },
  backIcon: {
    marginRight: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  iconSpacing: {
    marginRight: 25,
  },
});
