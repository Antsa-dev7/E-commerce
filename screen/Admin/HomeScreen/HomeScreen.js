import React, { Component } from 'react';
import { StyleSheet, StatusBar ,ScrollView,TouchableOpacity } from 'react-native';
import { Container, Header, Title,Subtitle, Button,Text,Content, Left,Card, CardItem, Right, Body,Footer,FooterTab, Icon, View } from 'native-base';
import {
    useFonts,
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Cairo_900Black,
  } from '@expo-google-fonts/cairo';
  import {auth} from '../../../firebase';
import {TabView} from 'react-native-tab-view';

const HomeScreen  =({navigation}) => {
    let [fontsLoaded] = useFonts({
        Cairo_200ExtraLight,
        Cairo_300Light,
        Cairo_400Regular,
        Cairo_600SemiBold,
        Cairo_700Bold,
        Cairo_900Black,
      });
    const signOut =()=>{
        auth.signOut().then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
    });
      }
    return (
        <View style={styles.container}>
            <Container>
                <Header  style={styles.header}>
                    <StatusBar barStyle = "light-content" hidden = {false}  backgroundColor = "black" translucent = {false}/>
                    <Left>
                        <Button transparent onPress={() => navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{fontSize:13,fontFamily: 'Cairo_400Regular'}}>VOTRE ADRESSE</Title> 
                        <Subtitle style={{fontSize:12,fontFamily: 'Cairo_400Regular'}} numberOfLines={1}>ANTANANARIVO </Subtitle>                      
                    </Body>
                    <Button onPress={signOut} transparent style={{alignSelf:"center"}}>
                        <Icon type="Ionicons" name='log-out'/>
                    </Button>
                </Header>
                <View style={styles.contenuHomme}>
                    <ScrollView >
                        <Text style={{fontFamily: 'Cairo_400Regular',alignSelf:"center"}} >Tableau de bord</Text>
                    
                    </ScrollView>
                </View>
            </Container>
        </View>
    );

}

export default HomeScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        height:"100%",
        width:"100%",
        fontFamily: 'Cairo_400Regular'
    },contenuHomme:{
        flex:1,
        borderTopWidth:3,
        borderTopColor:'rgba(0, 0, 0, 0.1)',
        padding:10,
    },
    header:{
        backgroundColor:"#009387",
    },
    absoluteButton:{
        backgroundColor:"#009387",
        alignItems:"center",
        justifyContent:"center",
        position:'absolute',
        bottom:25,
        zIndex:1,
        alignSelf:"center"

    }
})