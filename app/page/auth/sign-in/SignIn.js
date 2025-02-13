import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './SignInStyles';
import CircleBanner from '@/app/components/AuthComponents/CircleBanner';
import WelcomeBanner from '@/app/components/AuthComponents/WelcomeBanner';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import IconAntDesign from '@/app/components/Icons/IconExpo/IconAntDesign';
import IconMaterialCommunity from '@/app/components/Icons/IconExpo/IconMaterialCommunity';
import { LightModeColors } from '../../../styles/Color';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/config/firebase'; 

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password); 
      const user = userCredential.user;
      console.log('Giriş başarılı:', user);
      navigation.navigate('Main');
    } catch (error) {
      console.error('Giriş hatası:', error);
    }
  };

  const forgotPassword = () => {
    navigation.navigate('resetpassword'); 
  };

  const handleGoogleSignIn = () => {

  };

  const handleAppleSignIn = () => {

  };

  const handleFacebookSignIn = () => {

  };

  const signUpButton = () => {
    navigation.navigate('signup'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <CircleBanner CircleBannerTitle={'Sign In'} />
      </View>
      <View style={styles.welcomeContainer}>
        <WelcomeBanner />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={(text) => setEmail(text.toLowerCase())}
            placeholder="Email"
            value={email}
            theme="Auth"
            autoCapitalize="none"
          />
          <Input
            onChangeText={setPassword}
            placeholder="Password"
            value={password}
            theme="Auth"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.forgotPassContainer}>
          <Button
            ButtonName="Forgot password?"
            onPress={forgotPassword}
            theme="ForgotPass"
          />
        </View>
        <Button
          ButtonName="Sign In"
          onPress={handleSignIn}
          theme="Auth"
        />
      </View>
      <View style={styles.IconContainer}>
        <TouchableOpacity onPress={handleGoogleSignIn}>
          <IconAntDesign
            iconName={'google'}
            color={LightModeColors.IconColor}
            size={50}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAppleSignIn}>
          <IconAntDesign
            iconName={'apple1'}
            color={LightModeColors.IconColor}
            size={50}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFacebookSignIn}>
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
          onPress={signUpButton}
        />
      </View>
    </View>
  );
};

export default SignIn;
