import React, { useState } from 'react';
import { Text, View, SafeAreaView , StyleSheet ,Dimensions } from 'react-native';
import Mytext from './components/Mytext';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { DatabaseConnection } from '../database/database-connection';
import { IconButton } from 'react-native-paper';
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
const {width, height} = Dimensions.get('window')

const ViewUser = ({navigation}) => {

  const goBack = () => {
    navigation.goBack()
  }

  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});
  let [fontsLoaded] = useFonts({
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Cairo_900Black,
  });

  let searchUser = () => {
    console.log(inputUserId);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('Utilisasteur non trouvé !');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
      <IconButton
                icon="chevron-left"
                color='#0080ff'
                onPress={goBack}
                size={30}
            />
        <View style={{ flex: 1 }} >
          <Mytext text="Rechercher" />
          <Mytextinput
            placeholder="Entrer le numero de facture"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="Valider" customClick={searchUser} />
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10
            },styles.cardView}>
            <Text style={{fontFamily: 'Cairo_400Regular', padding: 10}}>Nom : {userData.user_name}</Text>
            <Text style={{fontFamily: 'Cairo_400Regular', padding: 10}}>Contact : {userData.user_contact}</Text>
            <Text style={{fontFamily: 'Cairo_400Regular', padding: 10}}>Adresse : {userData.user_address}</Text>
            <Text style={{fontFamily: 'Cairo_400Regular', padding: 10}}>Email : {userData.user_email}</Text>
            <Text style={{fontFamily: 'Cairo_400Regular', padding: 10}}>Quantity : {userData.user_description}</Text>
            <Text style={{fontFamily: 'Cairo_400Regular', padding: 10}}>Nom d'article : {userData.user_produit}</Text>
            <Text style={{fontFamily: 'Cairo_400Regular', padding: 10}}>Date de Facture : {userData.user_date}</Text>
            <Text style={{fontFamily: 'Cairo_400Regular', padding: 10}}>Facture : ({userData.user_facture})</Text>
            <Text style={{fontFamily: 'Cairo_400Regular', padding: 10}}>Prix Total : {userData.user_total} Ar</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
});

export default ViewUser;