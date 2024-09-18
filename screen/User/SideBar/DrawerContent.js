import React from "react";
import { View,Button,Alert,Text,StyleSheet,ScrollView,ImageBackground,Image, SafeAreaView } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,DrawerItem
} from '@react-navigation/drawer';
import {Ionicons} from "@expo/vector-icons";
import { useFonts } from 'expo-font';
import {auth} from '../../../firebase';

export function DrawerContent(props){
    const [loaded] = useFonts({
        Cairo : require('../../../assets/fonts/Cairo/Cairo-Regular.ttf'),
    });
      
    if (!loaded) {
        return null;
    }
    const user = auth.currentUser;

    return(
        <SafeAreaView>
            <View style={styles.viewBG}>
                <Image source={{uri:user.photoURL}} style={styles.profile}/>
                <View style={{flexDirection:"column",marginLeft:20}}>
                    <Text style={styles.name}>{user.displayName}</Text>
                    <Text style={styles.followers}>{user.email}</Text>
                </View>
                <Ionicons name="chevron-forward" size={25} style={{marginLeft:25}} color="#FFF"/>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <DrawerItemList {...props}labelStyle={{fontFamily: 'Cairo'}} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
    

   
};
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    viewBG:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#17a6b1",
        color:"#FFF",
        height:"20%",
        flexDirection:"row",
        fontFamily:"Cairo"
    },
    profile:{
        width:65,
        height:65,
        borderRadius:50,
        borderWidth:1,
        borderColor:"#FFF"
    },
    name:{
        color:"#FFF",
        fontSize:19,
        fontWeight:"800",
        marginVertical:8,fontFamily: 'Cairo'
    },
    followers:{
        color:"rgba(255,255,255,0.8)",
        fontSize:13,
        marginRight:4,fontFamily: 'Cairo'
    }
});