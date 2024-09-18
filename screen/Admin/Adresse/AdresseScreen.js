import React, { Component } from 'react';
import { StyleSheet, StatusBar,ScrollView} from 'react-native';
import { Container, Header, Title,Subtitle,List,ListItem ,Button,Text, Left,Card, CardItem, Right, Body,Footer,FooterTab, Icon, View } from 'native-base';


class AdresseScren extends Component {
  
    render() {

        return (
            <View style={styles.container}>
                <Container>
                    <Header  style={styles.header}>
                        <StatusBar barStyle = "light-content" hidden = {false} color="red" backgroundColor = "black" translucent = {false}/>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name="arrow-back"/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{fontSize:17,textTransform:'uppercase'}}>MES adresses</Title> 
                        </Body>
                    </Header>
                    <View style={styles.contenuAdresse}>
                        <ScrollView>
                            <List>
                                <ListItem itemDivider>
                                    <Text style={styles.majuscule}>MES  ADRESSES FAVORIS</Text>
                                </ListItem> 
                                <ListItem thumbnail>
                                    <Left>
                                        <Button transparent>
                                            <Icon style={styles.icon} type="Ionicons" name="home" />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Text style={styles.titleBody}>Maison</Text>
                                        <Text>
                                            Ankadinondry Sakay , Antananarivo Maadagascar
                                        </Text>
                                    </Body>
                                    <Right>
                                        <Button transparent>
                                            <Icon style={styles.iconright} type='AntDesign' name="plus"/>
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem thumbnail>
                                    <Left>
                                        <Button transparent>
                                            <Icon style={styles.icon} type="MaterialIcons" name="home-repair-service" />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Text>Bureau</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent>
                                            <Icon style={styles.iconright} type='AntDesign' name="plus"/>
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem thumbnail>
                                    <Left>
                                        <Button transparent>
                                            <Icon style={styles.icon} type="Ionicons" name="location" />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Text>Ajouter un autre adresse</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent>
                                            <Icon style={styles.iconright} type='AntDesign' name="plus"/>
                                        </Button>
                                    </Right>
                                </ListItem>
                            </List>
                        </ScrollView>
                    </View>
                </Container>
            </View>
            
        );
    }
}

export default AdresseScren;
const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%"
    },contenuAdresse:{
        flex:1,
        borderTopWidth:3,
        borderTopColor:'rgba(0, 0, 0, 0.1)'
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
    majuscule:{
        fontSize:13
    },
    icon:{
        color:"rgba(0, 0, 0, 0.6)"
    },
    iconright:{
        fontSize:18,
        color:"#17a6b1"
    },
    titleBody:{
        fontSize:15,
        color:"rgba(0, 0, 0, 0.6)"
    }
    
})