import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useCameraDevice, Camera } from 'react-native-vision-camera';
import Icon from '../../utils/Icon';

const VideoCallScreen: React.FC = () => {
  const frontCamera = useCameraDevice('front');
  const backCamera = useCameraDevice('back');

  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCallActive, setIsCallActive] = useState(true);

  const toggleCamera = () => setIsCameraOn(prev => !prev);
  const toggleMic = () => setIsMicOn(prev => !prev);
  const endCall = () => setIsCallActive(false);

  if (!frontCamera || !backCamera) return <Text>Loading cameras...</Text>;

  if (!isCallActive) return <Text style={styles.callEnded}>Call Ended</Text>;

  return (
    <View style={styles.container}>
      {/* Front Camera Preview */}
      {isCameraOn && (
        <Camera
          style={styles.frontCamera}
          device={frontCamera}
          isActive={true}
          video={true}
        />
      )}

      {/* Back Camera as small picture-in-picture */}
      {isCameraOn && (
        <Camera
          style={styles.backCamera}
          device={backCamera}
          isActive={true}
          video={true}
        />
      )}

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={toggleMic}>
          <Icon
            name={isMicOn ? 'mic' : 'mic-off'}
            type="Feather"
            size={26}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleCamera}>
          <Icon
            name={isCameraOn ? 'video' : 'video-off'}
            type="Feather"
            size={26}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={endCall} style={styles.endCallButton}>
          <Icon name="phone-off" type="Feather" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoCallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  frontCamera: {
    flex: 1,
  },
  backCamera: {
    width: 120,
    height: 180,
    position: 'absolute',
    top: 40,
    right: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  controls: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  endCallButton: {
    backgroundColor: '#E74C3C',
    padding: 10,
    borderRadius: 50,
  },
  callEnded: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: 'red',
  },
});
