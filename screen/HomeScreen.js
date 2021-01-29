import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Dimensions, Image, ImageBackground, DrawerLayoutAndroid } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FlatList, ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window')


const createCategoryView = () => {
  var dataBerita = data
  var dataTipe = []

  dataBerita.forEach(element=> {
      if (!dataTipe.includes(element.tipe)){
      dataTipe.push(element.tipe)
      dataTipe[element.tipe] = []
      }
      dataTipe[element.tipe].push(element)
  })

  console.log()
  var palePale = []
  dataTipe.forEach(element,index => {
          palePale.push(
          <View style={{padding: 20}}> 
              <Text style={{color:'white', fontSize: 22, fontWeight: 'bold'}}> {index}</Text>
              <FlatList
              horizontal={true}
              data={element[index]}
              keyExtractor={(item , index) => index}
              renderItem={({item}) => {
              return(
                  <View style={{paddingVertical: 20}}>
                      <TouchableOpacity> 
                      <Image source={{uri :item.poster.replace(/\??w=.*/sg,"?w=650")}}
                      style={{width: width- 50, marginRight: 30, height: 250, borderRadius: 10}}/>
                      <View style={styles.ImageOverlay}></View>
                      <Text style={styles.ImageText}>{item.judul} </Text>
                      </TouchableOpacity>
                  </View>
              )
              }}/>
          </View>
      )
     
  })
  console.log(palePale)
  return palePale
}

const HomeScreen =  ({navigation}) => {
  const image = { uri: "https://images.pexels.com/photos/758742/pexels-photo-758742.jpeg?cs=srgb&dl=pexels-ahmad-syahrir-758742.jpg&fm=jpg" };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.news.developeridn.com/')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  const navigationView = () => {
    return null;
  }

    

  return (
    <DrawerLayoutAndroid
      drawerWidth={250}
      drawerPosition={'left'}
      renderNavigationView = {() => navigationView}>
    <ScrollView>
      <SafeAreaView> 
          <ImageBackground 
            source={image}
            style={{width: '100%', height: 270}}
            imageStyle={{borderBottomRightRadius: 65}}
          >
            <View style={styles.DarkOverlay}></View>
            <View style={styles.ContainerUser}>
              <Text style={styles.UserName}>Hi Yusuf</Text>
              <Text style={styles.UserText}>How do you feel today?</Text>
            </View>

              <View> 
                <TextInput
                style={styles.searchBox}
                placeholder='Search News'
                placeholderTextColor='#666'>
                </TextInput> 
                  
                <MaterialCommunityIcons name='search-web' size={25} color='#666' style={
                    {position: 'absolute', top:30, right: 70, opacity:0.6}}/>
              </View>
              <MaterialCommunityIcons name='menu' size={25} color='#fff' style={
                  {position: 'absolute', top:40, left:16}}/>

              <MaterialCommunityIcons name='bell' size={23} color='#fff' style={
                  {position: 'absolute', top:40, right:30, opacity:0.8}}/>
            </ImageBackground>


        <View> 
              
              <View style={{flex:1, justifyContent: 'center', alignItems: 'center', marginTop:15 ,backgroundColor: '#000', opacity:0.8} } >
                <Text style={{color:'white', fontSize: 22, fontWeight: 'bold'}}> My Profile </Text>
                <Image source={require('../assets/profil.jpg')} style={{width: 170, height: 250, borderRadius: 10, marginTop:15}}/>
                <Text style={{color:'white', fontSize: 14, marginTop:10, width:300, textAlign: 'center'}}>
                Hello my name is Moch Yusuf Fathussalam, Im from Indonesia. I was born in Surabaya City 2nd May 2000. I study at IT Telkom Surabaya. Hope you like my app</Text>
              </View>
              
              <View style={{padding: 20}}> 
              <Text style={{color:'white', fontSize: 22, fontWeight: 'bold'}}>Today News</Text>
              <FlatList
              horizontal={true}
              data={data}
              keyExtractor={(item , index) => index}
              renderItem={({item}) => {
              return(
                  <View style={{paddingVertical: 20}}>
                      <TouchableOpacity> 
                      <Image source={{uri :item.poster.replace(/\??w=.*/sg,"?w=650")}}
                      style={{width: width- 50, marginRight: 30, height: 250, borderRadius: 10}}/>
                      <View style={styles.ImageOverlay}></View>
                      <Text style={styles.ImageText}>{item.judul} </Text>
                      </TouchableOpacity>
                  </View>
              )
              }}/>
          </View>
        </View>
        
      </SafeAreaView>

    </ScrollView>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  ImageText:{
    width: width-80,
    position: 'absolute',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 4,
    fontSize: 15,
    left: 15,
    bottom: 10,
  },
  ImageOverlay:{
    width: 350,
    marginRight: 8,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.2
  },
  DarkOverlay:{
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: '#000',
    opacity: 0.2,
    borderBottomRightRadius: 65
  },
  ContainerUser: {
    paddingTop: 100,
    paddingLeft: 16
  },
  UserName: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white'
  },
  UserText:{
    fontSize:16,
    fontWeight: 'normal',
    color: 'white'
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: '90%'

  }

})

export default HomeScreen;