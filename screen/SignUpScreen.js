import React, { useState } from 'react';
import { 
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    TouchableOpacity, 
    StatusBar,
    TextInput
 } from 'react-native';
import * as Yup from 'yup';

import Colors from '../utils/colors';
import SafeView from '../components/SafeView';
import Form from '../components/Forms/Form';
import FormField from '../components/Forms/FormField';
import FormButton from '../components/Forms/FormButton';
import IconButton from '../components/IconButton';
import FormErrorMessage from '../components/Forms/FormErrorMessage';
import { registerWithEmail } from '../firebase';
import useStatusBar from '../hooks/useStatusBar';
import * as Animatable from 'react-native-animatable'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Veuillez entrer un nom!')
    .label('Name'),
  email: Yup.string()
    .required('Veuillez entrer un e-mail valide!')
    .email()
    .label('Email'),
  password: Yup.string()
    .required('Veuillez entrer un mot de passe!')
    .min(6, 'Le mot de passe doit avoir au moins 6 caractères')
    .label('Mot de passe'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Confirmer le mot de passe')
    .required('Le mot de passe est requis!')
});

export default function RegisterScreen({ navigation }) {
  useStatusBar('light-content');

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState('eye');
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(
    true
  );
  const [registerError, setRegisterError] = useState('');

  function handlePasswordVisibility() {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  }

  function handleConfirmPasswordVisibility() {
    if (confirmPasswordIcon === 'eye') {
      setConfirmPasswordIcon('eye-off');
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (confirmPasswordIcon === 'eye-off') {
      setConfirmPasswordIcon('eye');
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    }
  }

  async function handleOnSignUp(values, actions) {
    const { email, password } = values;
    try {
      await registerWithEmail(email, password);
    } catch (error) {
      setRegisterError(error.message);
    }
  }

  return (
    <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Inscriptions</Text>
            </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Form
                    initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={values => handleOnSignUp(values)}
                >
                    <FormField
                    name="name"
                    leftIcon="account"
                    placeholder="Entrer votre nom"
                    autoFocus={true}
                    />
                    <FormField
                    name="email"
                    leftIcon="email"
                    placeholder="Entrer votre e-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    />
                    <FormField
                    name="password"
                    leftIcon="lock"
                    placeholder="Entrer votre mot de passe"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={passwordVisibility}
                    textContentType="password"
                    rightIcon={rightIcon}
                    handlePasswordVisibility={handlePasswordVisibility}
                    />
                    <FormField
                    name="confirmPassword"
                    leftIcon="lock"
                    placeholder="Confirmer le mot de passe"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={confirmPasswordVisibility}
                    textContentType="password"
                    rightIcon={confirmPasswordIcon}
                    handlePasswordVisibility={handleConfirmPasswordVisibility}
                    />
                    <FormButton title={'Valider'}/>
                    {<FormErrorMessage error={registerError} visible={true} />}
                </Form>
                <IconButton
                    style={styles.backButton}
                    iconName="keyboard-backspace"
                    color={Colors.red}
                    size={30}
                    onPress={() => navigation.goBack()}
                />
            </Animatable.View>      
        </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 5,
    },
    footer: {
        flex: 4,
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
    backButton: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10
    }
});