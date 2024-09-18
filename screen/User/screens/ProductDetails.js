import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet,
  TouchableOpacity
  } from 'react-native';
import { getProduct } from '../services/ProductsService';
import { CartContext } from '../CartContext';
import { IconButton } from 'react-native-paper';

export function ProductDetails({navigation, route}) {

  const { getItemsCount } = useContext(CartContext);

  const { productId } = route.params;
  const [product, setProduct] = useState({});

  let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getItemsCount());
    });

  const { addItemToCart, addItemToCart2 } = useContext(CartContext);

  const goBack = () => {
    navigation.goBack()
  }  

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  function onAddToCart() {
    addItemToCart(product.id);
  }
  function onAddToCart2() {
    addItemToCart2(product.id);
  }
  const onPressHandler = () => {
        navigation.navigate("Facture", product)
    }

  return (
    <SafeAreaView>
      <IconButton
                icon="chevron-left"
                color='#0080ff'
                onPress={goBack}
                size={30}
            />
      <ScrollView>
        <Image
          style={styles.image}
          source={product.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}> {product.name}</Text>
          <Text style={styles.price}> {product.price} Ar</Text>
          <Text style={styles.description}> {product.description}</Text>
            <View style={styles.OptionView}>
              <TouchableOpacity
                onPress={onAddToCart2}
                style={styles.btn}
              >
                <Text style={{ fontSize:18, color:'#FFF'}}> -</Text>
              </TouchableOpacity>
              <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 40}}>
                <Text style={{ fontSize: 25, fontWeight: '600', textAlign: 'center'}}>{total}</Text>
              </View>
              <TouchableOpacity
                onPress={onAddToCart}
                style={styles.btn}
              >
                <Text style={{ fontSize:18, color:'#FFF'}}> +</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={onPressHandler}
              >
                <View style={styles.ButtonContainer}>
                    <Text style={styles.buttonText}>Facture</Text>
                </View>
              </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#08d4c4',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  OptionView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 58,
    height: 38,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#384F62',
    borderWidth: 0.5
  },
  ButtonContainer:{
      marginVertical: 20,
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
    }
});
