import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Icon from "../../utils/Icon";
import { useThemeColors } from '../../utils/color';

interface IProfileDetailProps {
  iconname : string;
  type : string;
  title : string;
  name : string;
}

const ProfileDetail: React.FC<IProfileDetailProps> = ({iconname,type,title,name}) => {
  const { accent } = useThemeColors();
  return (
    <View style={styles.container}>
      <Icon name={iconname} type={type} color={accent} size={32} />
      <View style={styles.content} >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title2}>{name}</Text>
      </View>
    </View>
  )
}

export default ProfileDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "8%",
    gap: "5%",
    marginTop : "9%"
  },
  content : {
marginTop : "-1%"
  },
  title: {
    fontSize: 20,
    fontWeight: "600"
  },
  title2: {
    fontSize: 18,
    fontWeight: "400"
  }
})