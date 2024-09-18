import React, { useEffect,useState } from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    TouchableOpacity, 
    StatusBar, TextInput
} from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { auth } from '../firebase';

const SignInScreen = ({ navigation }) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [data, setData] = React.useState({
        email:'',
        password:'',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const signIn =()=>{
        auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            var errorMessage = error.message;
            alert('E-mail ou mot de passe incorect !!!');
        });
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const user = auth.currentUser;
                if(user.email=="admin@gmail.com"){
                    navigation.navigate('Admin')
                }else{
                    navigation.navigate('User')
                }
            } else {
                navigation.navigate('SignInScreen')
            }
        });
        return unsubscribe;
    }, [])


    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    return (
        <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome</Text>
            </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapilatlize="none"
                        onChangeText={(val)=> setEmail(val)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View 
                        animation="bounceIn"
                    >
                        <Feather 
                            name="check-circle"
                            color="green"
                            size={2}
                        />
                    </Animatable.View>
                    : null }
                </View>

                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapilatlize="none"
                        onChangeText={(val)=> setPassword(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>
                <View style={{margin: 5, alignSelf: 'flex-end',}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SettingScreen')}>
                        <Text style={styles.link2}>Mot de passe oublié</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={signIn} style={styles.signIn}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            
                                <Text style={styles.textSign, {
                                    color:'#fff'
                                }}> Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <Text>Vous n'avez pas de compte ?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}>
                            <Text style={styles.link}>S'inscrire</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>      
        </View>
    )
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        padding: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        marginTop: 30,
        alignSelf:"center"
    },
    link: {
        fontWeight: 'bold',
        color: "#17a6b1",
        marginLeft:5
    },
    link2: {
        fontWeight: 'bold',
        color: "#05375a",
        marginLeft:5
    },
});