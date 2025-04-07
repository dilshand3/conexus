import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import React from 'react';
import Icon from '../../utils/Icon';
import { useThemeColors } from '../../utils/color';

interface call {
  avatar: any;
  name: string;
  count?: number;
  type: "audio" | "video",
  direction: 'incoming' | 'outgoing';
  answered: boolean;
  date: string;
}

const SingleCall: React.FC<call> = ({ avatar, name, count, type, direction, answered, date }) => {
  const { accent } = useThemeColors();
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />

      <View style={styles.info}>
        <Text style={styles.name}>{name} {count && <Text>({count})</Text>}</Text>
        <View style={styles.subRow}>
          <Icon
            name={direction === "incoming" ? "arrow-down-left" : "arrow-up-right"}
            type="Feather"
            color={answered === true ? "green" : "red"}
            size={16}
            style={{ marginRight: 5 }}
          />
          <Text style={styles.time}>{date}</Text>
        </View>
      </View>
      <Pressable onPress={() => Alert.alert("Video Call started")}>
        <Icon name={type === "audio" ? "phone" : "video"} type="Feather" color={accent} size={27} />
      </Pressable>
    </View>
  );
};

export default SingleCall;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 8,
    paddingRight: "4%"
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#3498DB',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },
  subRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  time: {
    fontSize: 13,
    color: '#555',
  },
});
