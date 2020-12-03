import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
      flex:1
  },
  ScrollView: {
      backgroundColor: 'white',
      padding: 15
  },
  title: {
      color: '#ffff',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 10,
      marginRight: 10,
      marginBottom: 10,
      marginLeft: 10
  },
  text:{
      fontSize: 16,
      color: '#ffff',
      textAlign: 'auto', 
      marginTop: 10,
      marginRight: 10,
      marginBottom: 10,
      marginLeft: 10
  }
});

const DetailsScreen = ({route}) => {

  const baseUrl = 'https://www.news.developeridn.com/detail/?url='
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { link } = route.params;


    useEffect(() => {
    fetch(baseUrl + link)
      .then((response) => response.json())
      .then((json) => 
      {
        if (json.data[0].message === "network error") {
        throw new Error('Network error')
        }
        setData(json.data)
      })
      .catch((error) => alert(new Error(error.message)))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <View style={{backgroundColor:'#202125'}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={(item , index) => index}
          renderItem={({item}) => (
                <SafeAreaView style={styles.container}>
                  <ScrollView> 
                    <Image style={{width: 'auto', height: 200,marginTop: 5, marginRight: 5,marginBottom: 10,marginLeft: 5 }} source={{uri: item.poster}}/>
                    <Text style={styles.title}>{item.judul.trim()}</Text>
                    <Text style={styles.text}>{item.body.trim().replace(/(\n)/gm,"\n\n\n\n\n").replace(/(\n\n\n|\r|\t)/gm, "")}</Text>
                  </ScrollView>
                </SafeAreaView>
              )}
        />
      )}
    </View>
  );
};

export default DetailsScreen;