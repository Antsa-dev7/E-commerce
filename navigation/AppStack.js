import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/HomeScreen';
import ScreenB from '../screens/ScreenB';
import Film_Detail from '../screens/FilmDetail';
import Edit from '../screens/Edit';
import Show from '../screens/Show';
import Index from '../screens/Index'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function DrawerMenu(props){
  const [loaded] = useFonts({
        Cairo: require('../assets/fonts/Playball-Regular.ttf')
      });
    
      if (!loaded) {
        return null;
      }
  return(
    <TouchableOpacity onPress={props.navigation}>
      <View style={styles.menuContainer}>
        <View style={styles.iconContainer}>
            <FontAwesome5 size={20} name={props.iconName} color={'#0080ff'}/>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.Text}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

function Menu(props){
  return(
    <View style={styles.container}>
      <View style={styles.bgContainer}>
        <TouchableOpacity>
          <View style={styles.userContainer}>
            <Image style={styles.image} source={require('../assets/images.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <DrawerMenu iconName='home' titleName='Home' navigation={() => props.navigation.navigate('Home')}/>
      <DrawerMenu iconName='file-invoice' titleName='Article' navigation={() => props.navigation.navigate('Screen_B')}/>
      {/* <DrawerMenu iconName='user' titleName='FilmDetail' navigation={() => props.navigation.navigate('FilmDetail')} /> */}
    </View>
  )
}

const Drawer = createDrawerNavigator();
function MyDrawer (){
    return(
            <Drawer.Navigator 
            initialRouteName="Login"
                drawerType="front"
                drawerStyle={{
                    backgroundColor:'#e6e6e6',
                    width:250
                }}
                screenOptions={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerStyle:{
                        backgroundColor:'#0080ff'
                    }
                }}
                drawerContent={(props)=> <Menu {...props}/>}>   
                <Drawer.Screen name = "Home" component={Home} />
                <Drawer.Screen name = "Screen_B" component={ScreenB} />
                <Drawer.Screen name = "FilmDetail" component={Film_Detail}/>
                <Drawer.Screen name = "Index" component={Index}/>
                <Drawer.Screen name = "Show" component={Show}/>
                <Drawer.Screen name = "Edit" component={Edit}/>
            </Drawer.Navigator>
    )
}

const styles= StyleSheet.create({
  container: {
    backgroundColor: '#A4A4A4',
    flex: 1,
  },
  bgContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#4A4A4A'
  },
  userContainer: {
      alignContent: 'center',
      justifyContent: 'center',
      marginTop: 30,
      padding: 50
  },
  menuContainer: {
    margin: 5,
    padding: 15,
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 5
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 35
  },
  Text: {
    color: '#474747',
    fontSize: 20,
    fontFamily: 'Cairo'
  }
})

export default class  AppStack extends React.Component {
    render(){
        return (
            <NavigationContainer independent={true}>
                <MyDrawer />
            </NavigationContainer>
        )
    }
}