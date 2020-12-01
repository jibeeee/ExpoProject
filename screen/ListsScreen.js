import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import NewsCard from '../Component/NewsCard'

const ListsScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.news.developeridn.com/')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <View>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}) => (
                <NewsCard item={item} navigation={navigation}/>
              )}
        />
      )}
    </View>
  );
};

export default ListsScreen;