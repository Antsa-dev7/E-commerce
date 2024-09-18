import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Title,Subtitle, Button,Text,Content,Tab, Tabs,TabHeading, Left,Card, CardItem, Right, Body,Footer,FooterTab, Icon, View } from 'native-base';
import MyImageButton from '../../User/screens/pages/components/MyImageButton';
import { DatabaseConnection } from '../../User/screens/database/database-connection';
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
        <Header  style={styles.header}>
                    <StatusBar barStyle = "light-content" hidden = {false} color="red" backgroundColor = "black" translucent = {false}/>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{fontSize:17,textTransform:'uppercase',fontFamily: 'Cairo_400Regular'}}>Mes Factures</Title> 
                    </Body>
                </Header>
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
              title="Repondre"
              btnColor='#177615'
              btnIcon="user-circle"
              customClick={() => navigation.navigate('UpdateUser')}
            />
            <MyImageButton
              title="Supprimer"
              btnColor='#D1503A'
              btnIcon="user-times"
              customClick={() => navigation.navigate('DeleteUser')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height:"100%",
        width:"100%"
    },contenuCommande:{
        padding:10,
        flex:1,
        borderTopWidth:3,
        borderTopColor:'rgba(0, 0, 0, 0.1)',
        justifyContent:"center",
        alignItems:"center",
        
    },
    header:{
        backgroundColor:"#17a6b1",
        marginBottom: 0,
    }
})