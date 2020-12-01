import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';
import NewsDetail from '../Component/NewsDetail'

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
    <View>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          renderItem={({item}) => (
                  <NewsDetail item={item}/>
              )}
        />
      )}
    </View>
  );
};

export default DetailsScreen;