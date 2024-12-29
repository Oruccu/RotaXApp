import { View, TextInput } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './InputStyles';

const Input = ({ onChange, placeholder, value, theme }) => {
  const mode = useSelector((state) => state.settings?.mode?.toLowerCase()) || 'light';

  const themeStyles = styles[theme]?.[mode] || styles.RotaX.light;
  const placeholderColor = mode === 'dark' ? '#CCCCCC' : '#666666';

  return (
    <View style={themeStyles.container}>
      <TextInput
        style={themeStyles.input}
        onChangeText={onChange}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={placeholderColor}
      />
    </View>
  );
};

export default Input;