import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'


const { width, height } = Dimensions.get('window')


const NewsCard = ({item, navigation}) => {
    return (
        <TouchableOpacity
        style={styles.cardView} 
        onPress={() => {navigation.navigate('Detail News', {
            link: item.link
        })}}> 
                    <Text style={styles.title}>{item.judul}</Text>
                    <Text style={styles.type}>{item.tipe}</Text>
                    <Image style={styles.image} source={{uri: item.poster.replace(/\??w=.*/sg,"?w=650")}}/>
                    <Text style={styles.time}>{item.waktu}</Text>
         </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: '#313236',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3

    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: '#ffffff',
        fontSize: 23,
        fontWeight: 'bold'

    },
    time: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.05,
        color: '#adaeb3',
        fontSize: 13
    },
    image: {
        borderRadius: width * 0.03,
        height: height/3,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02

    },
    type: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 18,
        color: '#90b3ed'

    }
})



export default NewsCard