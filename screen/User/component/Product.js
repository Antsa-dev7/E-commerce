import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';

export function Product({name, price, image, onPress, statut}) {
  const [loaded] = useFonts({
    Cairo: require('../../../assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf')
  });
  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>"{name}"</Text>
        <Text style={styles.price}> {price} Ar</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.statut}> Statut :</Text>
          <Text style={styles.statut1}> {statut}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 5
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#0080ff',
    fontFamily: 'Cairo',
  },
  statut: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#177615'
  },
  statut1: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Cairo',
    marginBottom: 8,
  }
});