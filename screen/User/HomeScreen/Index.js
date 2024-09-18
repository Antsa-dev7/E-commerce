import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Buttom } from 'react-native';
import { useFonts } from 'expo-font'

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../HomeScreen/HomeScreen';
import Facturation from '../Facturation/Facturation';
import Edit from '../Edit/Edit';
import Show from '../Show/Show';
import Index from '../Index';
import ShowEdit from '../ShowEdit/ShowEdit';
import RegisterUser from '../screens/pages/RegisterUser';
import Update from '../screens/pages/UpdateUser';
import ViewUser from '../screens/pages/ViewUser';
import FactureScreen from '../screens/pages/FactureScreen';
import Delete from '../screens/pages/DeleteUser';
import About from '../About/About'
import { ProductsList } from '../screens/ProductsList';
import { ProductDetails } from '../screens/ProductDetails';
import Facture from '../screens/Facture';
import { Cart } from '../screens/Cart';
import { CartIcon } from '../component/CartIcon';
import { CartProvider } from '../CartContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {auth} from '../../../firebase';


function DrawerMenu(props){
  return(
    <TouchableOpacity onPress={props.navigation}>
      <View style={styles.menuContainer}>
        <View style={styles.iconContainer}>
            <FontAwesome5 size={20} name={props.iconName} color={'#177615'}/>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.Text}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

function Menu(props){
  
  const signOut =()=>{
    auth.signOut().then(() => {
        navigation.navigate("Login")
    }).catch((error) => {
  });
  }

  const [loaded] = useFonts({
    Cairo: require('../../../assets/fonts/Playball-Regular.ttf')
  });
  if (!loaded) {
    return null;
  }

  const user = auth.currentUser;

  return(
    <View style={styles.container}>
      <View style={styles.bgContainer}>
        <TouchableOpacity>
          <View style={styles.userContainer, {padding: 20}}>
            <Image style={styles.image} source={require('../../../assets/images.png')} />
            <Text style={{ fontFamily: 'Cairo' , fontSize: 20}}>{user.email}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerMenu iconName='home' titleName='Home' navigation={() => props.navigation.navigate('Home')}/>
      <DrawerMenu iconName='newspaper' titleName='Articles' navigation={() => props.navigation.navigate('ProductsList')}/>
      <DrawerMenu iconName='file-invoice' titleName='  Facturation' navigation={() => props.navigation.navigate('Facturation')} />
      <DrawerMenu iconName='info-circle' titleName='A propos' navigation={() => props.navigation.navigate('About')} />
      <TouchableOpacity
        onPress={signOut}
      >
      <View style={styles.menuContainer}>
          <View style={styles.iconContainer}>
              <FontAwesome5 size={20} name='sign-out-alt' color={'#177615'}/>
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.Text}>Déconnecter</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const Drawer = createDrawerNavigator();
function MyDrawer (){
    return(
            <Drawer.Navigator 
                initialRouteName="Home"
                drawerType="front"
                drawerStyle={{
                    backgroundColor:'#e6e6e6',
                    width:270
                }}
                screenOptions={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerStyle:{
                        backgroundColor:'#009387'
                    }
                }}
                drawerContent={(props)=> <Menu {...props}/>}>   
                <Drawer.Screen name = "Home" component={Home} />
                <Drawer.Screen name = "Facturation" component={Facturation}/>
                <Drawer.Screen name = "Index" component={Index}/>
                <Drawer.Screen name = "About" component={About} />
                <Drawer.Screen name = "Show" component={Show}/>
                <Drawer.Screen name = "RegisterUser" component={RegisterUser}/>
                <Drawer.Screen name = "Edit" component={Edit}/>
                <Drawer.Screen name = "Facture" component={Facture}/>
                <Drawer.Screen name = "Update" component={Update}/>
                <Drawer.Screen name = "ViewUser" component={ViewUser}/>
                <Drawer.Screen name = "FactureScreen" component={FactureScreen}/>
                <Drawer.Screen name = "Delete" component={Delete}/>
                <Drawer.Screen name = "ShowEdit" component={ShowEdit}/>
                <Drawer.Screen name = "ProductsList" component={ProductsList} options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
                <Drawer.Screen name = "ProductDetails" component={ProductDetails} options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })}/>
                <Drawer.Screen name = "Cart" component={Cart} options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })}/>
            </Drawer.Navigator>
    )
}

const styles= StyleSheet.create({
  container: {
    backgroundColor: '#A4A4A4',
    flex: 1,
  },
  bgContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#177615',
    backgroundColor: '#009387'
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
    fontSize: 14,
  }
})

export default class  AppStack extends React.Component {
    render(){
        return (
          <CartProvider>
            <NavigationContainer independent={true}>
              <MyDrawer />
            </NavigationContainer>
          </CartProvider>
        )
    }
}