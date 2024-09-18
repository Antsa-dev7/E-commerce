import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,ScrollView,
  KeyboardAvoidingView,
  SafeAreaView, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Mytextinput from '../components/components/Mytextinput';
import Mybutton from '../components/components/Mybutton';
import firebase from '../../../firebase';


export default function Update({ navigation, route }) {
    const [name, setName] = useState(route.params.name);
    const [contact, setContact] = useState(route.params.contact);
    const [address, setAddress] = useState(route.params.address);
    const [produit, setProduit] = useState(route.params.produit);

   
  function upDateFire() {
    try {
      firebase.database().ref('/Going/'+route.params.key).update({
        name: name,
        contact: contact,
        address: address,
        produit: produit
      })

    } catch (error) {
      alert(error);
    }
    finally {
      setContact('');
      setName('');
      setAddress('');
      setProduit('');
      navigation.navigate("Index")
    }
  }

    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#D2D2D2' }}>
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
                onChangeText={contact => setContact(contact)} value={contact}
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Entrer votre adresse"
                onChangeText={address => setAddress(address)} value={address}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mytextinput
                placeholder="Produits"
                onChangeText={produit => setProduit(produit)} value={produit}
                style={{ padding: 10 }}
              />
              <Mybutton title="Update" customClick={() => { upDateFire() }} />
              <Mybutton title="Cancel" customClick={() => navigation.navigate("Home")} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewCenter: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    btnEnviar: {
        borderWidth: 1,
        borderColor: 'red',
        width: 100,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    textInput: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 5
    },
});