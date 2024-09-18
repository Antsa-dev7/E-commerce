import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, StatusBar, TouchableOpacity  } from 'react-native';
import { Container, Header, Title,Subtitle, Button,Text,Content, Left,Card, CardItem, Right, Body,Footer,FooterTab, Icon, View } from 'native-base';
import { DatabaseConnection } from '../database/database-connection';
import { ScrollView } from 'react-native-gesture-handler';
import {
  useFonts,
  Cairo_200ExtraLight,
  Cairo_300Light,
  Cairo_400Regular,
  Cairo_600SemiBold,
  Cairo_700Bold,
  Cairo_900Black,
} from '@expo-google-fonts/cairo';


const db = DatabaseConnection.getConnection();

const ViewAllUser = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Cairo_900Black,
  });

  const onPressHandler = () => {
    navigation.navigate('Facturation');
  }
  

  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM table_user",
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  return (
    <View>
      <FlatList
            style={{ marginTop: 30 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={flatListItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) =>
                <View
                  key={item.user_id}
                  style={styles.container}>
                    <ScrollView>
                      <TouchableOpacity onPress={onPressHandler}>
                        <Card>
                            <CardItem header bordered>
                                <Text style={{fontFamily: 'Cairo_400Regular',color:"rgba(0, 0, 0, 0.6)"}}>Facture ( {item.user_facture} )</Text>
                                <Right>
                                    <Icon style={{color:"rgba(0, 0, 0, 0.6)"}} type="MaterialCommunityIcons" name="dots-vertical" />
                                </Right>
                            </CardItem>
                            <CardItem bordered>
                            <Body>
                            <Text style={{fontFamily: 'Cairo_400Regular'}}>N° de facture :   0000{item.user_id}</Text>
                                <Text style={{fontFamily: 'Cairo_400Regular'}}>Nom :   {item.user_name}</Text>
                                <Text style={{fontFamily: 'Cairo_400Regular'}}>Contact :   {item.user_contact}</Text>
                                <Text style={{fontFamily: 'Cairo_400Regular'}}>Adresse :   {item.user_address}</Text>
                                <Text style={{fontFamily: 'Cairo_400Regular'}}>Email :   {item.user_email}</Text>
                                <Text style={{fontFamily: 'Cairo_400Regular'}}>-------- Articles facturés --------</Text>
                                <Text style={{fontFamily: 'Cairo_400Regular'}}>Nom:   {item.user_produit} </Text>
                                <Text style={{fontFamily: 'Cairo_400Regular'}}>Prix :   {item.user_prix}  X  {item.user_description} </Text>
                                <Text style={{fontFamily: 'Cairo_400Regular'}}>Prix Total :   {item.user_total} Ar</Text>
                            </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Text style={{fontFamily: 'Cairo_400Regular'}}>Le {item.user_date} </Text>
                            </CardItem>
                        </Card>
                      </TouchableOpacity>
                    </ScrollView>
                </View>
          }
          />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 15,
      height:"100%",
      width:"100%"
  },
});

export default ViewAllUser;