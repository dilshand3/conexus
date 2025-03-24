import { StyleSheet, View } from 'react-native'
import React from 'react';
import BottomNavigation from "./src/Navigation/BottomTab/BottomNavigation"
import { useThemeColors } from "./src/utils/color"

const App: React.FC = () => {
  const { background } = useThemeColors();
  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <BottomNavigation/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})