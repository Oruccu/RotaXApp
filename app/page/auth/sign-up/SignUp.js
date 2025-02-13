import React from 'react';
import { View, TouchableOpacity, Alert, Text } from 'react-native';
import { Formik } from 'formik';
import styles from './SignUpStyles';
import CircleBanner from '@/app/components/AuthComponents/CircleBanner';
import WelcomeBanner from '@/app/components/AuthComponents/WelcomeBanner';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import IconAntDesign from '@/app/components/Icons/IconExpo/IconAntDesign';
import IconMaterialCommunity from '@/app/components/Icons/IconExpo/IconMaterialCommunity';
import { LightModeColors } from '../../../styles/Color';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/config/firebase.js';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required('Kullanıcı adı gerekli'),
  email: Yup.string()
    .email('Geçerli bir e-posta girin')
    .required('E-posta gerekli'),
  password: Yup.string()
    .min(6, 'Şifre en az 6 karakter olmalı')
    .required('Şifre gerekli'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor')
    .required('Şifre doğrulaması gerekli'),
});

const SignUp = ({ navigation }) => {
  const handleSignUp = async (values) => {
    try {
      const { username, email, password } = values;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Kayıt başarılı:", userCredential.user);
      navigation.navigate('Main');
    } catch (error) {
      console.error("Kayıt hatası:", error);
      Alert.alert('Hata', error.message);
    }
  };

  const goToSignIn = () => {
    navigation.navigate('signin');
  };

  const handleGoogleSignUp = async () => {

  };

  const handleAppleSignUp = () => {

  };

  const handleFacebookSignUp = () => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <CircleBanner CircleBannerTitle={'Sign Up'} />
      </View>
      <View style={styles.welcomeContainer}>
        <WelcomeBanner />
      </View>

      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <View style={styles.innerContainer}>
              <View style={styles.inputContainer}>
                <Input
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  placeholder="Username"
                  value={values.username}
                  theme="Auth"
                />
                {touched.username && errors.username && (
                  <Text style={styles.errorText}>{errors.username}</Text>
                )}

                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Email"
                  value={values.email}
                  theme="Auth"
                  autoCapitalize="none"
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Password"
                  value={values.password}
                  theme="Auth"
                  secureTextEntry={true}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <Input
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  theme="Auth"
                  secureTextEntry={true}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>
              <Button
                ButtonName="Sign Up"
                onPress={handleSubmit}
                theme="Auth"
              />
            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.IconContainer}>
                <TouchableOpacity onPress={handleGoogleSignUp}>
                  <IconAntDesign
                    iconName={'google'}
                    color={LightModeColors.IconColor}
                    size={50}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAppleSignUp}>
                  <IconAntDesign
                    iconName={'apple1'}
                    color={LightModeColors.IconColor}
                    size={50}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleFacebookSignUp}>
                  <IconMaterialCommunity
                    iconName={'facebook'}
                    color={LightModeColors.IconColor}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.signUpButton}>
                <IconMaterialCommunity
                  iconName={'arrow-right-thin-circle-outline'}
                  color={LightModeColors.Primary}
                  onPress={goToSignIn}
                />
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;
