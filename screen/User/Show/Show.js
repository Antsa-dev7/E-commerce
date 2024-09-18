
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import firebase from '../../../firebase';

export default function ShowEdit({ navigation }) {

  const [listFire, setListFire] = useState(null);

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
            description: childItem.val().description,
            date: childItem.val().date,
            facture: childItem.val().facture,
            produit: childItem.val().produit,
            total: childItem.val().total,
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#D2D2D2' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ marginTop: 30 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={listFire}
            keyExtractor={(item) => item.key}
            renderItem={({ item, index }) => 
            <View
              style={{ backgroundColor: '#EEE', marginTop: 20, padding: 30, borderRadius: 10 }}
            >
          <View style={styles.Going}>
            <Text >*********************************</Text>
            <Text style={styles.textGoing}>GoingBeyond</Text>
            <Text>*********************************</Text>        
          </View>
          <View style={styles.bookContainer}>
            <Text style={styles.textheader}> N° de facture:</Text>
            <Text style={styles.textbottom}>{index + 1}</Text>
          </View>
          <View style={styles.bookContainer}>
            <Text style={styles.textheader}>Détails du client:</Text>
          </View>
          <View style={styles.bookContainer}>
            <Text style={styles.textsousheader}>- Nom:</Text>
            <Text style={styles.textbottom}>{item.name}</Text>
          </View>
          <View style={styles.bookContainer}>
            <Text style={styles.textsousheader}>- Contact:</Text>
            <Text style={styles.textbottom}>{item.contact}</Text>
          </View>
          <View style={styles.bookContainer}>
            <Text style={styles.textsousheader}>- Adresse:</Text>
          <Text style={styles.textbottom}>{item.address}</Text>
          </View >
          <View style={styles.bookContainer}>
            <Text style={styles.textheader}>Détails de la facture:</Text>
          </View>
          <View style={styles.bookContainer}>
            <Text style={styles.textsousheader}>- N° de facture:</Text>
            <Text style={styles.textbottom}>{item.facture}</Text>
          </View>
          <View style={styles.bookContainer}>
            <Text style={styles.textsousheader}>- Date de la facture:</Text>
            <Text style={styles.textdate}>{item.date}</Text>
          </View>
          <View style={styles.bookContainer}>
            <Text style={styles.textheader}>Détails de l'article:</Text>
          </View>
          <View style={styles.bookContainer}>
            <Text style={styles.textsousheader}>- Nom du produit:</Text>
            <Text style={styles.textbottom}>{item.produit}</Text>
          </View>
          <View style={styles.bookContainer}>
            <Text style={styles.textsousheader}>- Description:</Text>
            <Text style={styles.textbottom}>{item.description}</Text>
          </View>
          <View style={styles.bookContainer}>
            <Text style={styles.textsousheader}>- Total:</Text>
            <Text style={styles.textbottom}>{item.total} ar</Text>
          </View>
      </View>
          }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textheader: {
    color: '#111',
    fontSize: 18,
    fontWeight: '500',

  },
  textsousheader: {
    fontSize: 16,
    fontWeight: '300',
    color: 'grey',
    paddingHorizontal: 15
  },
  Going: {
    flex: 1,
    alignItems: 'center'
  },
  textGoing: {
    fontSize: 24,
    color: '#0080ff'
  },
  textbottom: {
    color: '#111',
    fontSize: 18,
    paddingHorizontal: 50
  },
  textdate: {
    fontSize: 14,
  },
  bookContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  ButtonContainer:{
    marginVertical: 20,
    height: 30,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'grey'
  },
});