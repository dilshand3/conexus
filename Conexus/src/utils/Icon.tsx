import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TextProps } from 'react-native';


interface IconProps extends TextProps {
  name: string;
  size?: number;
  color?: string;
  type?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size,
  color,
  type,
  ...props
}) => {
  const IconComponent = {
    MaterialIcons,
    Ionicons,
    Feather,
    FontAwesome,
    AntDesign,
    Entypo,
    MaterialCommunityIcons,
    EvilIcons,
    Fontisto,
    FontAwesome5
  }[type];

  return <IconComponent name={name} size={size} color={color} {...props} />;
};

export default Icon;
