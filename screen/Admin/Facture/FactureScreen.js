import React, { Component } from 'react';
import { StyleSheet, StatusBar    } from 'react-native';
import { Container, Header, Title,Subtitle, Button,Text,Content,Tab, Tabs,TabHeading, Left,Card, CardItem, Right, Body,Footer,FooterTab, Icon, View } from 'native-base';
import {
    useFonts,
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Cairo_900Black,
  } from '@expo-google-fonts/cairo';
import Tab1 from './ViewAllUser';
import Tab2 from './FactureEnCours';
import Tab3 from './PastFacture';

 const FactureScreen =({navigation})=>{
    let [fontsLoaded] = useFonts({
        Cairo_200ExtraLight,
        Cairo_300Light,
        Cairo_400Regular,
        Cairo_600SemiBold,
        Cairo_700Bold,
        Cairo_900Black,
      });
    return (
        <View style={styles.container}>
            <Container>
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

                <Tabs tabBarUnderlineStyle = {{backgroundColor: '#17a6b1'}}>
                    <Tab  
                        heading={  
                            <TabHeading style={{backgroundColor: 'rgba(255, 255, 255 ,1)'}}>
                                <Text style={{color: '#17a6b1',fontFamily: 'Cairo_400Regular'}}>En attente</Text>
                            </TabHeading>
                        }
                    >
                        <Tab1 />
                    </Tab>
                    <Tab 
                        heading={  
                            <TabHeading style={{backgroundColor: 'rgba(255, 255, 255 ,1)'}}>
                                <Text style={{color: '#17a6b1',fontFamily: 'Cairo_400Regular'}}>En cours</Text>
                            </TabHeading>
                        }
                    >
                        <Tab2 />
                    </Tab>
                    <Tab
                     heading={  
                        <TabHeading style={{backgroundColor: 'rgba(255, 255, 255 ,1)'}}>
                            <Text style={{color: '#17a6b1',fontFamily: 'Cairo_400Regular'}}>Passés</Text>
                        </TabHeading>
                    }
                    >
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        </View>
    );
}
export default FactureScreen;
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