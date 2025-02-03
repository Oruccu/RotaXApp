import { View, Text } from 'react-native'
import React, { useState } from 'react';
import styles from './SingInStyles'
import CircleBanner from '@/app/components/AuthComponents/CircleBanner'
import WelcomeBanner from '@/app/components/AuthComponents/WelcomeBanner'
import Input from '@/app/components/Input'
import Button from '@/app/components/Button'
const SingIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <CircleBanner CircleBannerTitle={'Sing In'} />
      </View>
      <View style={styles.welcomeContainer}>
        <WelcomeBanner />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
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
          />
        </View>
        <View>
          <Text>Forgot password?</Text>
        </View>

        <Button
          ButtonName="Sign In"
          onPress={handleSignIn}
          theme="Intro"
        />
      </View>
      <View style={styles.kalan}>

      </View>
    </View>
  )
}

export default SingIn