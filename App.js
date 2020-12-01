import * as React from 'react';
import { Button, Text, View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, props, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListsScreen from './screen/ListsScreen';
import DetailsScreen from './screen/DetailsScreen';
import HomeScreen from './screen/HomeScreen';

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is Profile!</Text>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}

const ListsStack = createStackNavigator();

function ListsStackScreen() {
  return (
    <ListsStack.Navigator>
      <ListsStack.Screen name="List News" component={ListsScreen} />
      <ListsStack.Screen name="Detail News" component={DetailsScreen}/>
    </ListsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} 
          // option={{
          //   title: "Home",
          //   tabBarIcon: (props) => {
          //     <iconBottom data={props} image={require('./assets/Home.png')}/>
          //   }
          // }} 
          />
        <Tab.Screen name="News" component={ListsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
