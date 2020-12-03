import React, { version } from 'react';
import { Button, Text, View, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, props, Image, ImageBackground, DrawerLayoutAndroid } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const HomeScreen =  () => {

const image = { uri: "https://images.pexels.com/photos/758742/pexels-photo-758742.jpeg?cs=srgb&dl=pexels-ahmad-syahrir-758742.jpg&fm=jpg" };

const navigationView = () => {
  return null;
}

  return (
    <DrawerLayoutAndroid
      drawerWidth={250}
      drawerPosition={'left'}
      renderNavigationView = {() => navigationView}>
    <View>
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
      

        <ScrollView> 
          <View style={{padding: 20, paddingVertical: 20}}> 
              <Text style={{color:'white', fontSize: 22, fontWeight: 'bold'}}> My Profile </Text>
              <Image source={require('../assets/profil.jpg')} style={{width: 170, height: 250, borderRadius: 10, marginTop:10}}/>
          </View>
        </ScrollView>
      </SafeAreaView>

    </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
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