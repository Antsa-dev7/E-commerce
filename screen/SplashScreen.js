import * as React from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                        animation="bounceIn"
                        duraton="1500"
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.title}>Stay connect with GOINGBEYOND</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={['#08d4c4', '#17a6b1']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Get Started</Text>
                            <MaterialIcons 
                                name="navigate-next"
                                color="#009387"
                                size={25}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.45;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#17a6b1'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});
