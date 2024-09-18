import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import Mytextinput from './components/components/Mytextinput';
import Mybutton from './components/components/Mybutton';

import firebase from '../../firebase';

export default function Index({ navigation, route }) {

  const item = route.params;

  const Month = new Date().getMonth() + 1
  const DATE = new Date().getDate() + '/' + Month + '/' + new Date().getFullYear() + ' à ' +new Date().getHours()+ ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
  
  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);
  const [address, setAddress] = useState(null);
  const [date, setDate] = useState(DATE);
  const [facture, setFacture] = useState(null);
  const [produit, setProduit] = useState(item.name);
  const [description, setDescription] = useState(null);
  const [total, setTotal] = useState(item.price);


  const [listFire, setListFire] = useState(null);

  const goBack = () => {
    navigation.goBack()
  }


  useEffect(() => {
    try {
      firebase.database().ref('/Going').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            name: childItem.val().name,
            contact: childItem.val().contact,
            address: childItem.val().address,
            address: childItem.val().address,
            date: childItem.val().date,
            facture: childItem.val().facture,
            Produit: childItem.val().produit,
            total: childItem.val().total,
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function createFire() {
    try {
      firebase.database().ref('/Going').push({
        name: name,
        contact: contact,
        address: address,
        date: date,
        facture: facture,
        produit: produit,
        description: description,
        total: total
      })
      alert('Success!!!')

    } catch (error) {
      alert(error);
    }
    finally {
      setName('');
      setContact('');
      setAddress('');
      setDate(DATE);
      setFacture('');
      setProduit(item.name);
      setDescription('');
      setTotal(item.price);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#D2D2D2' }}>
      <IconButton
                icon="chevron-left"
                color='#0080ff'
                onPress={goBack}
            />
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Entrer votre nom"
                onChangeText={name => setName(name)} value={name}
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Numéro de téléphone"
                onChangeText={
                  (contact) => setContact(contact)
                } value={contact}
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Entrer votre adresse"
                onChangeText={
                  (address) => setAddress(address)
                } value={address}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mytextinput
                placeholder="Entrer le numero de facture"
                onChangeText={
                  (facture) => setFacture(facture)
                } value={facture}
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Entrer sa Description"
                onChangeText={
                  (description) => setDescription(description)
                } value={description}
                style={{ padding: 10 }}
              />
              <Mybutton title="Validation" customClick={createFire} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}