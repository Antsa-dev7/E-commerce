import React, { useState } from 'react';
import { View, Alert, SafeAreaView } from 'react-native';
import Mytextinput from '../../User/components/components/Mytextinput';
import Mybutton from '../../User/components/components/Mybutton';
import { DatabaseConnection } from '../../User/screens/database/database-connection';
import { IconButton } from 'react-native-paper';

const db = DatabaseConnection.getConnection();

const DeleteUser = ({ navigation }) => {

  const goBack = () => {
    navigation.goBack()
  }  

  let [inputUserId, setInputUserId] = useState('');

  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Enregistré avec Succès !!!',
                  'Success !!!',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Homme'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Non trouvé!!!');
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
        <View style={{ flex: 1 }}>
          <Mytextinput
            placeholder="Entrer le numero de facture"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="SUPPRIMER" customClick={deleteUser} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeleteUser;