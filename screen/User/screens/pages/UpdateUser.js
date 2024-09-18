import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  Image,
  Button, 
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Mytext from './components/Mytext';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { DatabaseConnection } from '../database/database-connection';
import { IconButton } from 'react-native-paper';
const db = DatabaseConnection.getConnection();

const UpdateUser = ({ navigation }) => {


  const goBack = () => {
    navigation.goBack()
  }

  let [inputUserId, setInputUserId] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [userDescription, setUserDescription] = useState('');
  let [userProduit, setUserProduit] = useState('');
  let [userDate, setUserDate] = useState('');
  let [userFacture, setUserFacture] = useState('');
  let [userPrix, setUserPrix] = useState('');
  let [userTotal, setUserTotal] = useState('');

  let updateAllStates = (name, contact, address, email, description, produit, date, facture, prix, total) => {
    setUserName(name);
    setUserContact(contact);
    setUserAddress(address);
    setUserEmail(email);
    setUserDescription(description);
    setUserProduit(produit);
    setUserDate(date);
    setUserFacture(facture);
    setUserPrix(prix);
    setUserTotal(total);
  };

  let searchUser = () => {
    console.log(inputUserId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(
              res.user_name,
              res.user_contact,
              res.user_address,
              res.user_email,
              res.user_description,
              res.user_produit,
              res.user_date,
              res.user_facture,
              res.user_prix,
              res.user_total,
            );
          } else {
            alert('Ok!');
            updateAllStates('', '', '', '', '', '', '','','','');
          }
        }
      );
    });
  };
  let updateUser = () => {
    console.log(inputUserId, userName, userContact, userAddress, userEmail, userDescription, userProduit, userDate, userFacture, userPrix ,userTotal);

    if (!inputUserId) {
      alert('...');
      return;
    }
    if (!userName) {
      alert('Veuillez entrer votre nom !');
      return;
    }
    if (!userContact) {
      alert('Veuillez entrer votre contact! !');
      return;
    }
    if (!userAddress) {
      alert('Veuillez entrer votre adresse! !');
      return;
    }
    if (!userEmail) {
      alert('Veuillez entrer votre Email! !');
      return;
    }
    if (!userDescription) {
      alert('Veuillez entrer la description! !');
      return;
    }
    if (!userProduit) {
      alert('Veuillez entrer le produit! !');
      return;
    }
    if (!userDate) {
      alert('Veuillez entrer le date! !');
      return;
    }
    if (!userFacture) {
      alert('Veuillez entrer le facture! !');
      return;
    }
    if (!userPrix) {
      alert('Veuillez entrer le facture! !');
      return;
    }
    if (!userTotal) {
      alert('Veuillez entrer la total! !');
      return;
    }
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_contact=? , user_address=? , user_description=? , user_email, user_produit , user_date=? , user_facture=?, user_prix ,user_total=? where user_id=?',
        [userName, userContact, userAddress, userEmail, userDescription, userProduit , userDate , userFacture, userPrix, userTotal, inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Operation réussie...',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Erreur...');
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
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytext text="Rechercher" />
              <Mytextinput
                placeholder="Entrer le numero de facture"
                style={{ padding: 10 }}
                onChangeText={
                  (inputUserId) => setInputUserId(inputUserId)
                }
              />
              <Mybutton
                title="Valider"
                customClick={searchUser}
              />
              <Mytext text="Nom" />
              <Mytextinput
                placeholder="Nom"
                value={userName}
                style={{ padding: 10 }}
                onChangeText={
                  (userName) => setUserName(userName)
                }
              />
              <Mytext text="Telephone" />
              <Mytextinput
                placeholder="Telephone"
                value={'' + userContact}
                onChangeText={
                  (userContact) => setUserContact(userContact)
                }
                maxLength={10}
                style={{ padding: 10 }}
                keyboardType="numeric"
              />
              <Mytext text="Adresse" />
              <Mytextinput
                value={userAddress}
                placeholder="Adresse"
                onChangeText={
                  (userAddress) => setUserAddress(userAddress)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mytext text="Email" />
              <Mytextinput
                placeholder="Email"
                value={userEmail}
                style={{ padding: 10 }}
                onChangeText={
                  (userEmail) => setUserEmail(userEmail)
                }
              />
              <Mytext text="Arcticle" />
              <Mytextinput
                placeholder="Produit"
                value={userProduit}
                style={{ padding: 10 }}
                onChangeText={
                  (userProduit) => setUserProduit(userProduit)
                }
              />
              <Mytext text="Date de Facture" />
              <Mytextinput
                placeholder="Date"
                value={userDate}
                style={{ padding: 10 }}
                onChangeText={
                  (userDate) => setUserDate(userDate)
                }
              />
              <Mytext text="Facture" />
              <Mytextinput
                placeholder="Facture"
                value={userFacture}
                style={{ padding: 10 }}
                onChangeText={
                  (userFacture) => setUserFacture(userFacture)
                }
              />
              <Mytext text="Prix" />
              <Mytextinput
                placeholder="Facture"
                value={userPrix}
                style={{ padding: 10 }}
                onChangeText={
                  (userPrix) => setUserPrix(userPrix)
                }
              />
              <Mytextinput
                placeholder="Prix total"
                value={userTotal}
                style={{ padding: 10 }}
                onChangeText={
                  (userTotal) => setUserTotal(userTotal)
                }
              />
              <Mytext text="Qty" />
              <View style={styles.OptionView}>
                <TouchableOpacity
                  onPress={()=>{}}
                  style={styles.btn}
                >
                  <Text style={{ fontSize:18, color:'#FFF'}}> -</Text>
                </TouchableOpacity>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 40}}>
                  <TextInput
                  value={userDescription} 
                  onChangeText={
                    (userDescription) => setUserDescription(userDescription)
                  }></TextInput>
                </View>
                <TouchableOpacity
                  onPress={()=>{}}
                  style={styles.btn}
                >
                  <Text style={{ fontSize:18, color:'#FFF'}}> +</Text>
                </TouchableOpacity>
            </View>
              <Mybutton
                title="Actualiser"
                customClick={updateUser}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
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
    alignItems: 'center',
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


export default UpdateUser;