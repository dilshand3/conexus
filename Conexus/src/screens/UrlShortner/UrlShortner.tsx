import { StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '../../utils/Icon';
import { Alert } from 'react-native';
import { useCreateShorturlMutation } from '../../Redux/ShortUrlSlice/ShortUrlSlice';
import Loader from '../../utils/Loader';
import EncryptedStorage from 'react-native-encrypted-storage';

interface Inavigation {
  navigation: any;
}

interface ShortUrl {
  originalUrl: string;
  shortUrl: string;
}

const UrlShortner: React.FC<Inavigation> = ({ navigation }) => {
  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [shortUrls, setShortUrls] = useState<ShortUrl[]>([]);
  const [createShorturl, { data, isError, isLoading, isSuccess, error }] = useCreateShorturlMutation();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const loadStoredUrls = async () => {
      try {
        const storedUrls = await EncryptedStorage.getItem('short_urls');
        if (storedUrls) {
          setShortUrls(JSON.parse(storedUrls));
        }
      } catch (error) {
        console.error('Failed to load stored URLs:', error);
      }
    };
    loadStoredUrls();
  }, []);

  useEffect(() => {
    if (isSuccess && data?.success && data?.data) {
      const newUrl = {
        originalUrl,
        shortUrl: (data.data as any).shortUrl, 
      };
      const updatedUrls = [newUrl, ...shortUrls];
      setShortUrls(updatedUrls);
      setOriginalUrl('');
      Alert.alert('Success', 'URL created successfully');

      EncryptedStorage.setItem('short_urls', JSON.stringify(updatedUrls)).catch((error) => {
        console.error('Failed to save URLs:', error);
      });
    }
    if (isError) {
      console.log(error)
      Alert.alert('Error', 'Failed to create URL');
    }
  }, [isSuccess, isError, data,isLoading]);

  const handleSubmit = async (): Promise<void> => {
    if (!originalUrl.trim()) {
      Alert.alert('Error', 'Please enter a valid URL');
      return;
    }
    await createShorturl({ originalUrl });
  };

  const handleDeleteAll = async (): Promise<void> => {
    try {
      await EncryptedStorage.removeItem('short_urls');
      setShortUrls([]);
      Alert.alert('Success', 'All URLs deleted');
    } catch (error) {
      console.error('Failed to delete URLs:', error);
      Alert.alert('Error', 'Failed to delete URLs');
    }
  };

  const handleNavigateToAuth = (): void => {
    navigation.navigate('Authentication');
  };

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
      <Pressable style={styles.header}>
        <Icon name="link" type="Entypo" color="#00396e" size={30} />
        <Text style={styles.headerTxt}>CONEXUS</Text>
      </Pressable>
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          placeholder="Original URL"
          value={originalUrl}
          onChangeText={(text) => setOriginalUrl(text)}
        />
        <TouchableOpacity onPress={handleSubmit} activeOpacity={0.4} style={styles.btn}>
          <Text style={styles.shortURLbtn}>{isLoading ? <Loader /> : 'SHORT URL'}</Text>
        </TouchableOpacity>
        <View style={styles.urlContainer}>
          <Pressable onPress={handleNavigateToAuth}>
            <Text style={styles.historyTitle}>Link History</Text>
          </Pressable>
          {shortUrls.length > 0 ? (
            shortUrls.map((val, index) => (
              <View style={styles.singleUrl} key={index}>
                <Icon name="link" type="Entypo" size={18} />
                <Text style={styles.linktxt}>{val.shortUrl}</Text>
                <Icon name="content-copy" type="MaterialCommunityIcons" size={18} />
              </View>
            ))
          ) : (
            <Text style={styles.nourlMsg}>No URLs available</Text>
          )}
        </View>
        <TouchableOpacity onPress={handleDeleteAll} style={styles.btn}>
          <Text style={styles.shortURLbtn}>DELETE ALL URLS</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UrlShortner;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
    backgroundColor: "#F4FBFF",
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: '3%'
  },
  headerTxt: {
    fontSize: 28,
    fontWeight: "700",
    color: "#00396e"
  },
  input: {
    width: "100%",
    borderWidth: 0.7,
    borderRadius: 7,
    borderColor: "#00396e",
    paddingHorizontal: "4%",
    fontSize: 18,
    height : 60
  },
  btn: {
    backgroundColor: "#00396e",
    alignSelf: "center",
    borderRadius: 7,
    width: "100%",
    paddingVertical: "2%"
  },
  shortURLbtn: {
    fontSize: 23,
    fontWeight: '400',
    color: "white",
    textAlign: 'center'
  },
  mainContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    gap : 10
  },
  urlContainer: {
    borderWidth: 0.7,
    paddingVertical: "4%",
    paddingHorizontal: 12,
    borderRadius: 8,
    width : "100%"
  },
  historyTitle: {
    fontSize: 23,
    fontWeight: "600"
  },
  singleUrl: {
    flexDirection: "row",
    alignItems: "center",
    gap: "2.1%",
    marginTop: 10,
    backgroundColor: "#fdfefe",
    paddingVertical: 5,
    borderRadius: 4,
  },
  linktxt: {
    fontSize: 18,
    fontWeight: "400"
  },
  nourlMsg : {
    color : "red",
    fontSize : 15,
    textAlign : "center",
    marginTop : 10
  }
})
