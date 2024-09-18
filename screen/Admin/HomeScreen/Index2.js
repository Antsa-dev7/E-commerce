
import * as React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons,FontAwesome5} from "@expo/vector-icons";
import { useFonts } from 'expo-font';

import {DrawerContent} from '../SideBar/DrawerContent';
import HomeScreen from './HomeScreen';
import ListeFacture from '../Facture/FactureScreen';
import FacturationScreen from '../Facturartion/Facturation';
import DeleteScreen from '../pages/DeleteUser';
import UpdateScreen from '../pages/UpdateUser';
import NotificationScreen from '../Notification/NotificationScreen';
import AboutScreen from '../About/AboutScreen';
import AdresseScreen from '../Adresse/AdresseScreen';

  
const Drawer = createDrawerNavigator();

export default index = () =>{
    const [loaded] = useFonts({
        Cairo: require('../../../assets/fonts/Cairo/Cairo-Regular.ttf'),
    });
    
    if (!loaded) {
    return null;
    }
    return (
            <Drawer.Navigator 
                initialRouteName="Homme"
                drawerContent={props =><DrawerContent {...props}/>}
                drawerContentOptions={{
                    activeBackgroundColor:"white",
                    activeTintColor:"#000",
                    activetintColor:"#000",
                    itemsContainerStyles:{
                        marginTop:16,
                        textTransform:"uppercase",
                        marginHorizontal:8
                    },
                    itemStyle:{
                        borderRadius:6
                    }
                }}
            >
                
                <Drawer.Screen 
                    name="Notification" 
                    component={NotificationScreen}
                    options={{
                        drawerIcon: () => (
                            <Ionicons
                            name="notifications"
                            size={20}
                            color="#009387"
                            />
                        ),
                        swipeEnabled: false ,
                        drawerLabel: 'NOTIFICATIONS'
                    }}
                />
                <Drawer.Screen 
                    name="Facture" 
                    component={ListeFacture}
                    options={{
                        drawerIcon: () => (
                            <Ionicons
                            name="list"
                            size={20}
                            color="#009387"
                            />
                        ),
                        swipeEnabled: false ,
                        drawerLabel: 'GERER  FACTURES',
                    }}
                />
                <Drawer.Screen 
                    name="Facturation" 
                    component={FacturationScreen}
                    options={{
                        drawerIcon: () => (
                            <Ionicons
                            name="list"
                            size={20}
                            color="#009387"
                            />
                        ),
                        swipeEnabled: false ,
                        drawerLabel: 'FACTURATION',
                    }}
                />
                <Drawer.Screen 
                    name="About" 
                    component={AboutScreen}
                    options={{
                        drawerIcon: () => (
                            <Ionicons
                            name="md-document-text"
                            size={20}
                            color="#009387"
                            />
                        ),
                        swipeEnabled: false,
                        drawerLabel: 'A PROPOS'
                    }}
                />
                <Drawer.Screen 
                    name="Adresse" 
                    component={AdresseScreen}
                    options={{
                        drawerIcon: () => (
                            <Ionicons
                            name="location"
                            size={20}
                            color="#009387"
                            />
                        ),
                        swipeEnabled: false ,
                        drawerLabel: 'ADRESSE'
                    }}
                />
                <Drawer.Screen
                    name="Homme"
                    component={HomeScreen} 
                    options={{
                        drawerLabel: () => null
                    }}
                />
                <Drawer.Screen
                    name="DeleteUser"
                    component={DeleteScreen} 
                    options={{
                        drawerLabel: () => null
                    }}
                />
                <Drawer.Screen
                    name="UpdateUser"
                    component={UpdateScreen} 
                    options={{
                        drawerLabel: () => null
                    }}
                />
            </Drawer.Navigator>
    );
}
  