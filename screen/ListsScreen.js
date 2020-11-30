import React, {Component} from 'react';
import { Text,
    Button, 
    SafeAreaView, 
    FlatList, 
    StyleSheet, 
    TouchableOpacity,
    View, 
    ActivityIndicator} from 'react-native';


  
// const styles = StyleSheet.create({
//     container: {
//     flex :1
//     },
//     item:{
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderBottomColor: 'black',
//     borderBottomWidth: 1
//     },
//     title:{
//     fontsize: 32
//     }
// })
    
// const Item = ({item}) => {
//     return(
//         <TouchableOpacity style={styles.item} onPress={() => {alert(item.title)}}>
//             <Text style={styles.title}>{item.title}</Text>
//         </TouchableOpacity> 
//     )
// };

// const data = [
//     {id: '1', title: 'Berita 1'},
//     {id: '2', title: 'Berita 2'},
//     {id: '3', title: 'Berita 3'},
//     {id: '4', title: 'Berita 4'},
//     {id: '5', title: 'Berita 5'},
//     {id: '6', title: 'Berita 6'},
//     {id: '7', title: 'Berita 7'},
//     {id: '8', title: 'Berita 8'},
//     {id: '9', title: 'Berita 9'},
//     {id: '10', title: 'Berita 10'}
// ];

// const ListsScreen = ({navigation}) => {
//     const renderItem = ({item}) =>{
//       return (
//         <Item item = {item}/>
//       );
//     }

// const renderItem = ({item}) =>{
//     return (
//       <Item item = {item}/>
//     );


//     return (

//         <SafeAreaView style={styles.container}>
//             <Button
//         title="Go to Detail News"
//         onPress={() => navigation.navigate('DetailsScreen', {name:'Detail News'})}
//       />
//           <FlatList
//             data={data}
//             renderItem={renderItem}
//             keyExtracto={(item) => item.id}
//           /> 
//         </SafeAreaView>
//       );
// }

class ListsScreen extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            data: [[]],
            isLoading: true,
        };
    }

    componentDidMount(){
      fetch('https://www.news.developeridn.com')
        .then((response) => response.json())
        .then((json) => {
            this.setState({data: json.data});
        })
        .catch((error) => console.error(error))
        .finally(() => {
            this.setState({isLoading: false});
        });
    }

    render() {
        const {data, isLoading} = this.state;

        return(
        <View style={{flex:1, padding: 24}}>
          {isLoading ? (
              <ActivityIndicator color="#0000ff"/>
          ) : (
          <FlatList
            data={data}
            // keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
                    <Text> 
                        {item.judul}, {item.link}, {item.poster}, {item.tipe}, {item.waktu}    
                    </Text>
            )}
          /> 
          )}
        </View>
    
        );
    }

}

export default ListsScreen;
  