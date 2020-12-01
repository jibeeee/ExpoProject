import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, View, Image, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window')

const NewsDetail = ({item}) => {
    console.log('satunya')
    console.log(item.poster)
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView> 
                <Image style={{width: 'auto', height: 200,marginTop: 5, marginRight: 5,marginBottom: 10,marginLeft: 5 }} source={{uri: item.poster}}/>
                <Text style={styles.title}>{item.judul.trim()}</Text>
                <Text style={styles.text}>{item.body.trim().replace(/(\n)/gm,"\n\n\n\n\n").replace(/(\n\n\n|\r|\t)/gm, "")}</Text>
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    ScrollView: {
        backgroundColor: 'white',
        padding: 15
    },
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    text:{
        fontSize: 16,
        color: 'black',
        textAlign: 'auto', 
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10
    }
});

export default NewsDetail;