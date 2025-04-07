import { StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react';
import BottomNavigation from "./src/Navigation/BottomTab/BottomNavigation"
import { useThemeColors } from "./src/utils/color";
import { useCameraPermission } from 'react-native-vision-camera';
import { userequestMicrophonePermission } from "./src/utils/AudioPermission"

const App: React.FC = () => {
  const { background } = useThemeColors();
  const { requestPermission, hasPermission } = useCameraPermission()
  useEffect(() => {
    requestPermission();
    userequestMicrophonePermission();
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
      <BottomNavigation />
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})