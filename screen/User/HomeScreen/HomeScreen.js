import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet,Image, Dimensions,TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import useStatusBar from '../hooks/useStatusBar';

const {width, height} = Dimensions.get('window')

export default function HomeScreen ({navigation, route}) {
    useStatusBar('dark-content');

    const onPressHandler = () => {
      navigation.navigate('ProductsList');
    }
    const onPressHandler2 = () => {
        navigation.navigate('Facturation');
      }

    const [loaded] = useFonts({
        Cairo: require('../../../assets/fonts/Playball-Regular.ttf')
      });
  
      if (!loaded) {
        return null;
      }
    return (
        <View>
            <View style={styles.cardView}>
                <Image 
                  style={styles.logo}
                  source={require('../../../assets/goingBeyond.jpg')}
                />
            <Text style={styles.title}>Veuillez choisir la recherche que vous voulez</Text>
                    <Text style={styles.author}>Articles:</Text>
                    <Text style={styles.description}>- Informations sur toutes les articles...</Text>
                    <Text style={styles.description}>- Création des factures...</Text>
                            <TouchableOpacity
                                onPress={onPressHandler}
                            >
                                <View style={styles.ButtonContainer}>
                                    <Text style={styles.buttonText}>Articles</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.author}>Facturation:</Text>
                            <Text style={styles.description}>- Possibilité d’édition de la facture...</Text>
                            <Text style={styles.description}>- Possibilité de suppression de la facture...</Text>
                                    <TouchableOpacity
                                        onPress={onPressHandler2}
                                    >
                                        <View style={styles.ButtonContainer}>
                                            <Text style={styles.buttonText}>Facturation</Text>
                                        </View>
                            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 26,
        textAlign: 'center'
    },
    bonjour: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 16,
        color: '#0080ff'
    },
    logo: {
        width: 125,
        height: 100,
        margin: 20,
    },
    image : {
        height : height / 2,
        borderRadius: width * 0.02,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02,
        backgroundColor: 'grey'
    },
    description: {
        marginVertical: width * 0.01,
        marginHorizontal: width * 0.02,
        fontSize: 18,
        color: 'gray',
        marginLeft: width * 0.01
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 20,
        color: '#177615'
    },
    ButtonContainer:{
        marginVertical: 20,
        height: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#177615'
    },
    buttonText: {
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 16,
    },
})