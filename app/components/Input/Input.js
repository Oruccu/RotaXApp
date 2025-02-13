import React from 'react';
import { View, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './InputStyles';

const Input = ({ onChangeText, placeholder, value, theme, secureTextEntry, onBlur, autoCapitalize }) => {
  const mode = useSelector((state) => state.settings?.mode?.toLowerCase()) || 'light';
  const themeStyles = styles[theme]?.[mode] || styles.RotaX.light;
  const placeholderColor = mode === 'dark' ? '#CCCCCC' : '#666666';

  return (
    <View style={themeStyles.container}>
      <TextInput
        style={themeStyles.input}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={placeholderColor}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

export default Input;
