import React, { Component } from 'react';
import { StyleSheet, StatusBar} from 'react-native';
import { Container, Header, Title,Subtitle,List,ListItem, Button,Text,Content, Left,Card, CardItem, Right, Body,Footer,FooterTab, Icon, View } from 'native-base';

class AideScreen extends Component {
  
    render() {
        return (
            <View style={styles.container}>
                <Container>
                    <Header  style={styles.header}>
                        <StatusBar barStyle = "light-content" hidden = {false} color="red" backgroundColor = "black" translucent = {false}/>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="arrow-back" />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{fontSize:17,textTransform:'uppercase'}}>aides</Title> 
                        </Body>
                    </Header>
                    <View style={styles.contenuAide}>
                        <List>
                            <ListItem>
                                <Text>Conditions Générales d'Utilisation</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Politique de confidalité</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Commande prise en charge</Text>
                            </ListItem>
                        </List>
                    </View>
                </Container>
            </View>
        );
    }
}

export default AideScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        height:"100%",
        width:"100%"
    },contenuAide:{
        flex:1,
        borderTopWidth:3,
        borderTopColor:'rgba(0, 0, 0, 0.1)',
    },
    header:{
        backgroundColor:"#17a6b1"
    }
})