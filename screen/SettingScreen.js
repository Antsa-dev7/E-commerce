import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import * as Yup from 'yup';

import Colors from '../utils/colors';
import SafeView from '../components/SafeView';
import Form from '../components/Forms/Form';
import FormField from '../components/Forms/FormField';
import FormButton from '../components/Forms/FormButton';
import IconButton from '../components/IconButton';
import { passwordReset } from '../firebase';
import FormErrorMessage from '../components/Forms/FormErrorMessage';
import useStatusBar from '../hooks/useStatusBar';
import * as Animatable from 'react-native-animatable'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Veuillez entrer un e-mail valide')
    .required('Veuillez saisir une adresse e-mail enregistrée')
});

export default function ForgotPasswordScreen({ navigation }) {
  useStatusBar('light-content');

  const [customError, setCustomError] = useState('');

  async function handlePasswordReset(values) {
    const { email } = values;

    try {
      await passwordReset(email);
      navigation.navigate('Welcome');
    } catch (error) {
      setCustomError(error.message);
    }
  }

  return (
    <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Mot de passe oublié?</Text>
            </View>
            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Form
                    initialValues={{ email: '' }}
                    validationSchema={validationSchema}
                    onSubmit={values => handlePasswordReset(values)}
                >
                    <FormField
                    name="email"
                    leftIcon="email"
                    placeholder="Entrer votre e-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    />
                    <FormButton title="Mot de passe oublié" />
                    {<FormErrorMessage error={customError} visible={true} />}
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
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 70,
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
});
