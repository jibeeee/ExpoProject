import React from 'react';
import { Text, 
    SafeAreaView, 
    FlatList, 
    StyleSheet, 
    TouchableOpacity } from 'react-native';

const DetailsScreen = ({navigation}) =>{
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is Detail News!</Text>
      </View>
    );
  }

export default DetailsScreen;