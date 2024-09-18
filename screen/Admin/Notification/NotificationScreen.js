import React, { Component } from 'react';
import { StyleSheet, StatusBar,Dimensions} from 'react-native';
import { Container, Header, Title,Subtitle, Button,Text,Content, Left,Card, CardItem, Right, Body,Footer,FooterTab, Icon, View } from 'native-base';
//import MapView from 'react-native-maps';

class NotificationScreen extends Component {
  
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
                            <Title style={{fontSize:17,textTransform:'uppercase'}}>MES NOTIfications</Title> 
                        </Body>
                    </Header>
                    <View style={styles.contenuNotif}>
                    <MapView style={styles.map} />
                    </View>
                </Container>
            </View>
            
        );
    }
}

export default NotificationScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        height:"100%",
        width:"100%"
    },contenuNotif:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderTopWidth:3,
        borderTopColor:'rgba(0, 0, 0, 0.1)'
    },
    header:{
        backgroundColor:"#17a6b1"
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }
})