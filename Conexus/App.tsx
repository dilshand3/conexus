import { StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react';
import { useThemeColors } from "./src/utils/color";
import { useCameraPermission } from 'react-native-vision-camera';
import { userequestMicrophonePermission } from "./src/utils/AudioPermission";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/Redux/store";
import { Provider } from 'react-redux';
import ConexusStackNavigation from './src/Navigation/ConexusStackNavigation/ConexusStackNavigation';

const App: React.FC = () => {
  const { background } = useThemeColors();
  const { requestPermission, hasPermission } = useCameraPermission()
  useEffect(() => {
    requestPermission();
    userequestMicrophonePermission();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
          <ConexusStackNavigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})