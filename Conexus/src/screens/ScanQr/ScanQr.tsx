import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

const ScanQr: React.FC = () => {
  const device = useCameraDevice("back");

  if (device == null) {
    return (
      <View>
        <Text>Device not found</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          isActive={true}
          device={device}
        />
      </View>
      <Pressable>
        <Text>Scan To Add</Text>
      </Pressable>
    </ScrollView>
  )
}

export default ScanQr;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "1.8%",
    paddingHorizontal: "2%",
    backgroundColor: "#F4FBFF",
    flex: 1
  },
  cameraContainer: {
    height : "2000%",
    width: "100%",
    borderRadius : 50
  },
  camera: {
    flex: 1,
    borderRadius : 50
  }
})