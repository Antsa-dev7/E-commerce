import React, { Component ,useState, useEffect, useContext} from 'react';
import { StyleSheet, StatusBar,ScrollView, Alert} from 'react-native';
import { Container, Header, Title,Input,List,ListItem,Toast, Button,Text,Form,Textarea,Item, Left,Label,Card, CardItem, Right, Body,Footer,FooterTab, Icon, View } from 'native-base';
import {
    useFonts,
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Cairo_900Black,
  } from '@expo-google-fonts/cairo';
  import { CartContext } from '../CartContext';
  import {auth} from '../../../firebase';
  import { DatabaseConnection } from './database/database-connection';

const db = DatabaseConnection.getConnection();

const NewLivraisonScren  =({ navigation, route }) => {

    const { getItemsCount, getTotalPrice} = useContext(CartContext);
    const [currentDate, setCurrentDate] = useState('')
    const product = route.params;

    const user = auth.currentUser;

    const month = new Date().getMonth() + 1;
    useEffect(()=> {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        setCurrentDate(
            date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
        );
    }, []);

    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');
    let [userEmail, setUserEmail] = useState(user.email);
    let [userDescription, setUserDescription] = useState(getItemsCount());
    let [userProduit, setUserProduit] = useState(product.name);
    let [userDate, setUserDate] = useState(new Date().getDate() + '/' + month + '/' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
    let [userFacture, setUserFacture] = useState('En attente');
    let [userPrix, setUserPrix] = useState(product.price);
    let [userTotal, setUserTotal] = useState(getTotalPrice());
    
    let [fontsLoaded] = useFonts({
        Cairo_200ExtraLight,
        Cairo_300Light,
        Cairo_400Regular,
        Cairo_600SemiBold,
        Cairo_700Bold,
        Cairo_900Black,
      });

      let register_user = () => {
        console.log(userName, userContact, userAddress, userEmail, userDescription, userProduit, userDate, userFacture, userPrix, userTotal);
    
        if (!userName) {
          alert('Veuillez remplir le nom !');
          return;
        }
        if (!userContact) {
          alert('Veuillez remplir le contact');
          return;
        }
        if (!userAddress) {
          alert('Veuillez remplir l adresse !');
          return;
        }
        if (!userEmail) {
            alert('Veuillez remplir l adresse !');
            return;
          }
        if (!userDescription) {
          alert('Veuillez remplir la description !');
          return;
        }
        if (!userProduit) {
          alert('Veuillez remplir le produit');
          return;
        }
        if (!userDate) {
          alert('Veuillez remplir la date !');
          return;
        }
        if (!userFacture) {
          alert('Veuillez remplir la facture !');
          return;
        }
        if (!userPrix) {
            alert('Veuillez remplir la facture !');
            return;
          }
        if (!userTotal) {
            alert('Veuillez remplir la total !');
            return;
          }
        db.transaction(function (tx) {
            // tx.executeSql('ALTER TABLE table_user ADD user_prix VARCHAR(255)', []);
          tx.executeSql(
            'INSERT INTO table_user (user_name, user_contact, user_address, user_email,user_description, user_produit, user_date, user_facture, user_prix ,user_total) VALUES (?,?,?,?,?,?,?,?,?,?)',
            [userName, userContact, userAddress, userEmail, userDescription, userProduit, userDate, userFacture, userPrix, userTotal],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                Alert.alert(
                  'Enregistré avec Succès !!!',
                  'Success !!!',
                  [
                    {
                      text: 'Ok',
                      onPress: () => navigation.navigate('Home'),
                    },
                  ],
                  { cancelable: false }
                );
              } else alert('Echec !!!');
            }
          );
        });
      };

        return (
        <View style={styles.container}>
            <Container>
                <Button   style={styles.absoluteButton}  onPress={register_user}>
                    <Text  style={{fontFamily: 'Cairo_400Regular'}} numberOfLines={1} >Parfait !!</Text>
                </Button >
                <View>
                    <ScrollView>
                        <View style={styles.contenuNewLivraison}>
                            <Form>
                                <Text style={styles.title}>
                                    Entrer tous les détails essentiels! ?
                                </Text>
                            
                                <Textarea 
                                    style={styles.textarea} 
                                    rowSpan={3}
                                    bordered 
                                    placeholder="Votre nom ..."
                                    value={userName}
                                    onChangeText={(userName) => setUserName(userName)}
                                 />
                                <Text style={styles.title}>
                                    Adresse
                                </Text>
                                <List style={styles.adresse}>
                                    <ListItem >
                                        <Body>
                                            <Input
                                                style={styles.input}
                                                placeholder="Enter ici votre adresse ..."
                                                value={userAddress}
                                                onChangeText={(userAddress) => setUserAddress(userAddress)}
                                            />
                                        </Body>
                                    </ListItem>
                                </List>
                                <Text style={styles.title}>
                                    Telephone :
                                </Text>
                                <List style={styles.adresse}>
                                    <ListItem >
                                        <Item >
                                            <Text style={styles.icon1} numberOfLines={1}>+261  </Text>
                                            <Icon style={styles.icon} type='AntDesign' name='down' />
                                            <Input 
                                                style={styles.input}
                                                keyboardType='numeric' 
                                                placeholder="Télépnone ..."
                                                value={userContact}
                                                onChangeText={(userContact) => setUserContact(userContact)}
                                            />
                                        </Item>
                                    </ListItem>
                                </List>
                            </Form>
                        </View>
                        
                    </ScrollView>
                </View>
            </Container> 
        </View>
        
    );
}
export default NewLivraisonScren;
const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        fontFamily: 'Cairo_400Regular'
    },contenuNewLivraison:{
        flex:1,
        borderTopWidth:3,
        borderTopColor:'rgba(0, 0, 0, 0.1)',
        paddingHorizontal: 10,
        paddingBottom: 150,
    },
    header:{
        backgroundColor:"#17a6b1",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    title:{
        color:"rgba(0, 0, 0, 0.6)",
        textTransform:'uppercase',
        marginVertical:5,
        fontFamily: 'Cairo_400Regular'
    },
    textarea:{
        borderRadius:5,
        padding:5,
        shadowColor: "#000",
        fontFamily: 'Cairo_400Regular',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 1,
    },
    adresse:{
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },
    iconright:{
        color:"#17a6b1" 
    },
    input:{
        fontSize:15,
        color:"rgba(0, 0, 0, 0.6)"
    },
    icon1:{
        color:"rgba(0, 0, 0, 0.8)",
        fontSize:16
    },
    icon:{
        color:"#17a6b1" ,
        fontSize:14
    },
    absoluteButton:{
        width:"100%",
        backgroundColor:"#17a6b8",
        alignItems:"center",
        justifyContent:"center",
        position:'absolute',
        bottom:50,
        zIndex:1,
        alignSelf:"center"

    }
    
})