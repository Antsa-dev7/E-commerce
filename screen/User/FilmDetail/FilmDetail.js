import React, {useState} from "react";
import { Text, View, StyleSheet,Image, Dimensions,TouchableOpacity, Button } from "react-native";
import { IconButton } from 'react-native-paper';
import { useFonts } from 'expo-font';

const {width, height} = Dimensions.get('window')

export default function FilmDetails ({navigation, route}) {
    
    const item = route.params;

    const qty = item.Qty

    const [counter, setCounter] = useState(1);
    let incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);

    if(counter <=1 ){
        decrementCounter = () => setCounter(1)
    }

    if(counter >= qty ){
        incrementCounter = () => setCounter(qty)
    }

    const goBack = () => {
        navigation.goBack()
    }
    const onPressHandler = () => {
        navigation.navigate('Index', item)
    }

    const [loaded] = useFonts({
        Cairo: require('../../../assets/fonts/Playball-Regular.ttf')
      });
  
      if (!loaded) {
        return null;
      }
    return (
        <View>
            <IconButton
                icon="chevron-left"
                color='#0080ff'
                onPress={goBack}
            />
            <View style={styles.cardView}>
                <View style={styles.header}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <Text style={styles.author}>{item.author}</Text>
                <Image
                    style = {styles.image}
                    source = {item.poster_path}
                />
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.buttonPrice}>
                    <Text style={styles.price}>Prix: {item.price * counter} Fmg</Text>
                    <View style={styles.crement}>
                        <TouchableOpacity onPress={decrementCounter}><View style={styles.buttoncrement}><Text style={styles.textcrement}>-</Text></View></TouchableOpacity>
                            <Text style={styles.counter}>{counter}</Text>
                        <TouchableOpacity onPress={incrementCounter}><View style={styles.buttoncrement}><Text style={styles.textcrement}>+</Text></View></TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={onPressHandler}
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
        shadowOffset: {width: 0.3, height: 0.3},
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    header: {
        flexDirection: 'row',
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 24,
        fontFamily: 'Cairo',
        flex : 1,
    },
    price: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.02,
        fontWeight : 'bold',
        fontSize : 18,
        color : '#666666',
        fontFamily: 'Cairo',
    },
    qty: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.02,
        fontWeight : 'bold',
        fontSize : 18,
        color : '#666666',
        fontFamily: 'Cairo',
    },
    buttonPrice: {
        flexDirection: 'row'
    },
    image : {
        height: 240,
        width: 161,
        borderRadius: width * 0.02,
        marginLeft: width * 0.05,
        marginRight: width * 0.50,
        marginVertical: height * 0.02,
    },
    description: {
        marginVertical: width * 0.01,
        marginHorizontal: width * 0.02,
        fontSize: 18,
        color: 'gray'
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'
    },
    crement: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.01,
        flexDirection: 'row',
    },
    buttoncrement: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#D1503A'
    },
    textcrement: {
        fontSize: 18,
        textAlign: 'center'
    },
    counter: {
        fontSize: 20,
        margin: 3
    },
    ButtonContainer:{
        marginVertical: 10,
        height: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#5d57ff'
    },
    buttonText: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 16,
    },
})