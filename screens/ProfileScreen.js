import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import CommentInput from '../components/CommentInput';
import CommentItem from '../components/CommentItem';
import Ionicons from "@expo/vector-icons/Ionicons";

export function ProfileScreen({ route, navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState([]);

  function handleHomePress() {
    navigation.navigate('Home');
  }
  const getData = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users/1');
      const json = await response.json();
      setData([json.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
                <View style={styles.wrap}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: `${(item.avatar =
                        'https://reqres.in/img/faces/3-image.jpg')}`,
                    }}
                  />

                  <View style={styles.header}>
                    <Text style={styles.item1}> Hello </Text>
                    <Text style={styles.itemName}>
                      {(item.first_name = 'Emma')} {(item.last_name = 'Wong')}
                    </Text>
                    <Text style={styles.item1}> !</Text>
                  </View>
                </View>

                <View style={styles.info}>
                  <Text style={styles.infoTxt}>University of London</Text>
                  <View style={styles.iconAdding}>
                  <Ionicons name={"football-outline"} size={20} color={"#fbfcfb"} style={styles.icon} />
                  <Text style={styles.infoTxt}>Football, Cats and Food</Text>
                  </View>
                  <View style={styles.iconAdding}>
                  <Ionicons name={"star-half-outline"} size={20} color={"#fbfcfb"} style={styles.icon} />
                  <Text style={styles.infoTxt}>Virgo</Text>
                  </View>
                  <Text style={styles.infoTxtShow}>Show more</Text>
                </View>

                <View>
                  <Text style={styles.highlight}>Member since: </Text>
                  <Text style={styles.normalTxt}> 2007</Text>
                  <Text style={styles.highlight}>Blogs posted:</Text>
                  <Text style={styles.normalTxt}> 2,983</Text>
                  <Text style={styles.highlight}>Comments on blogs: </Text>
                  <Text style={styles.normalTxt}> 8,965</Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item1: {
    color: '#c7d7bf',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  itemName: {
    color: '#749d62',
    fontSize: 20,
    paddingTop: 10,
  },
  image: {
    width: 80,
    height: 80,
    paddingLeft: 10,
    borderRadius: 20,
  },
  wrap: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  info: {
    backgroundColor: '#749d62',
    margin: 10,
    borderRadius: 30,
    padding: 10,
  },
  infoTxt: {
    color: '#fbfcfb',
    textAlign: 'center',
    fontSize: 16,
  },
  infoTxtShow: {
    color: '#fbfcfb',
    textAlign: 'center',
    fontSize: 12,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  highlight: {
    fontWeight: 400,
    fontSize: 16,
    textAlign: 'center',
  },
  normalTxt: {
    fontWeight: 200,
    textAlign: 'center',
  },
  iconAdding: {
    flexDirection: "row",
    alignSelf: 'center',
  }
});
