import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './SignUpStyles';
import CircleBanner from '@/app/components/AuthComponents/CircleBanner';
import WelcomeBanner from '@/app/components/AuthComponents/WelcomeBanner';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import IconAntDesign from '@/app/components/Icons/IconExpo/IconAntDesign';
import IconMaterialCommunity from '@/app/components/Icons/IconExpo/IconMaterialCommunity';
import { LightModeColors } from '../../../styles/Color';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential  } from 'firebase/auth';
import { auth } from '@/app/config/firebase.js';
import * as Google from 'expo-auth-session/providers/google';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Kayıt başarılı:", userCredential.user);
    } catch (error) {
      console.error("Kayıt hatası:", error);
    }
  };

  const goToSignIn = () => {
    navigation.navigate('signin'); 
  };

  const handleGoogleSignUp = async () => {
    try {
      const { type, idToken } = await Google.logInAsync({
        clientId: '<YOUR_GOOGLE_CLIENT_ID>',

      });
  
      if (type === 'success' && idToken) {
        const credential = GoogleAuthProvider.credential(idToken);
        const userCredential = await signInWithCredential(auth, credential);
        console.log("Google ile oturum açıldı:", userCredential.user);
      } else {

        console.log("Google oturum açma iptal edildi");
      }
    } catch (error) {
      console.error("Google oturum açma hatası:", error);
    }
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
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={setUsername}
            placeholder="Username"
            value={username}
            theme="Auth"
          />
          <Input
            onChangeText={setEmail}
            placeholder="Email"
            value={email}
            theme="Auth"
          />
          <Input
            onChangeText={setPassword}
            placeholder="Password"
            value={password}
            theme="Auth"
            secureTextEntry={true}
          />
          <Input
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            value={confirmPassword}
            theme="Auth"
            secureTextEntry={true}
          />
        </View>
        <Button
          ButtonName="Sign Up"
          onPress={handleSignUp}
          theme="Auth"
        />
      </View>
      <View style={styles.IconContainer}>
        <TouchableOpacity onPress={handleGoogleSignUp}>
          <IconAntDesign
            iconName={'google'}
            color={LightModeColors.IconColor}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAppleSignUp}>
          <IconAntDesign
            iconName={'apple1'}
            color={LightModeColors.IconColor}
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
  );
};

export default SignUp;
