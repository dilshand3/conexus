import { StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '../../utils/Icon';
import { Alert } from 'react-native';
import { shortUrls } from '../../dummyData/Chat';
import { useCreateShorturlMutation } from '../../Redux/ShortUrlSlice/ShortUrlSlice';

interface Inavigation {
  navigation : any;
}

const UrlShortner: React.FC<Inavigation> = ({ navigation }) => {
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [Navigate, setNavigate] = useState<number>(1)
  const [createShorturl, { data, isError, isLoading,isSuccess }] = useCreateShorturlMutation();
  const insets = useSafeAreaInsets();

  const handleSubmit = async () => {
    console.log(originalUrl)
    if (!originalUrl.trim()) {
      Alert.alert("Please enter a valid URL");
      return;
    }

    try {
      const res = await createShorturl(originalUrl);
      if (res.data?.success) {
        Alert.alert("Success", "Short URL created successfully");
        console.log(res)
        setOriginalUrl("");
      } else {
        console.log("Error response:", res);
        Alert.alert("Error", res?.error?.data?.message || "Something went wrong");
      }
    } catch (error) {
      console.log("Catch error:", error);
      Alert.alert("Error", "Unexpected error occurred");
    }
  };


  const handleNavigate = (): void => {
    if (Navigate < 3) {
      setNavigate(Navigate + 1)
    }
    else if (Navigate == 3) {
      navigation.navigate("Authentication")
    }
  }

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
      <Pressable style={styles.header}>
        <Icon name='link' type='Entypo' color={"#00396e"} size={30} />
        <Text style={styles.headerTxt}>CONEXUS</Text>
      </Pressable>
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          placeholder='Original URL'
          value={originalUrl}
          onChangeText={(text) => setOriginalUrl(text)} />
        <TouchableOpacity onPress={() => handleSubmit(originalUrl)} activeOpacity={0.4} style={styles.btn}><Text style={styles.shortURLbtn}>SHORT URL</Text></TouchableOpacity>
        <View style={styles.urlContainer}>
          <Pressable onPress={handleNavigate}>
            <Text style={styles.historyTitle}>Link History</Text>
          </Pressable>
          {
            shortUrls.map((val, index) => (
              <View style={styles.singleUrl} key={index}>
                <Icon name='link' type='Entypo' size={18} />
                <Text style={styles.linktxt}>{val}</Text>
                <Icon name='content-copy' type='MaterialCommunityIcons' size={18} />
              </View>
            ))
          }
        </View>
        <TouchableOpacity style={styles.btn}><Text style={styles.shortURLbtn}>DELETE ALL URL</Text></TouchableOpacity>
      </View>
    </ScrollView>
  )
}

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
    fontSize: 18
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
    height: "100%"
  },
  urlContainer: {
    borderWidth: 0.3,
    paddingVertical: "4%",
    paddingHorizontal: 12,
    borderRadius: 8,
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
  }
})