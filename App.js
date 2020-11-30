import * as React from 'react';
import { Button, Text, View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListsScreen from './screen/ListsScreen';
import DetailsScreen from './screen/DetailsScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is Profile!</Text>
    </View>
  );
}

// const HomeStack = createStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       <HomeStack.Screen name="Profile" component={ProfileScreen} />
//     </HomeStack.Navigator>
//   );
// }

const ListsStack = createStackNavigator();

function ListsStackScreen() {
  return (
    <ListsStack.Navigator>
      <ListsStack.Screen name="List News" component={ListsScreen} />
      <ListsStack.Screen name="Detail News" component={DetailsScreen} />
    </ListsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="News" component={ListsStackScreen} />
        {/* <Tab.Screen name="Home" component={HomeStackScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
