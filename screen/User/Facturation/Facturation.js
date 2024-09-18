import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import MyImageButton from '../screens/pages/components/MyImageButton';
import { DatabaseConnection } from '../screens/database/database-connection';
import { IconButton } from 'react-native-paper';


const db = DatabaseConnection.getConnection();

const HomeScreen = ({ navigation, route }) => {
  
  const goBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255)), user_description VARCHAR(255), user_produit VARCHAR(255), user_date VARCHAR(255) ,user_facture VARCHAR(255)',
              []
            );
          }
        }
      );
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#D2D2D2', padding: 15 }}>
      <IconButton
                icon="chevron-left"
                color='#0080ff'
                onPress={goBack}
                size={30}
            />
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>

            {/* <MyImageButton
              title="Creation des Factures"
              btnColor='#2992C4'
              btnIcon="user-plus"
              customClick={() => navigation.navigate('RegisterUser')}
            /> */}

            <MyImageButton
              title="Editer une facture"
              btnColor='#177615'
              btnIcon="user-circle"
              customClick={() => navigation.navigate('Update')}
            />

            <MyImageButton
              title="Factures personnalisées"
              btnColor='#F9AD29'
              btnIcon="user"
              customClick={() => navigation.navigate('ViewUser')}
            />
            <MyImageButton
              title="Toutes les Factures"
              btnColor='#384F62'
              btnIcon="users"
              customClick={() => navigation.navigate('FactureScreen')}
            />
            <MyImageButton
              title="Suppression des Factures"
              btnColor='#D1503A'
              btnIcon="user-times"
              customClick={() => navigation.navigate('Delete')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;