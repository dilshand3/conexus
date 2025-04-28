import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import SingleCall from '../../components/SingleCall/SingleCall';
import Icon from '../../utils/Icon';
import { useThemeColors } from '../../utils/color';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import { callsData } from '../../dummyData/Chat';

const Calls: React.FC = () => {
  const { accent } = useThemeColors();
  const inset = useSafeAreaInsets();
  return (
    <View style={[styles.container,{paddingTop : inset.top}]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: accent }]}>Recent Calls</Text>
        <Pressable >
          <Icon name='dots-three-vertical' color={accent} size={25} type='Entypo' />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          callsData.map((val, index) => (
            <SingleCall key={index} avatar={val.avatar} name={val.name} type={val.type} count={val.count} direction={val.direction} answered={val.answered} date={val.date} />
          ))
        }
      </ScrollView>
    </View>
  )
}

export default Calls;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "1.8%",
    paddingHorizontal: "2%",
    backgroundColor: "#F4FBFF",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "1%",
    paddingHorizontal: "2.5%",
    marginBottom : "2%"
  },
  headerTitle: {
    fontSize: 27,
    fontWeight: "600"
  }
})