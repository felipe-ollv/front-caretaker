import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';

const InputComponent = ({ placeholder, inputMode, }: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={[styles.input, isFocused && styles.inputFocused]}>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        inputMode={inputMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
      borderWidth: 0, // border: none
      padding: 4, // 1rem ≈ 16px
      borderRadius: 16, // 1rem ≈ 16px
      backgroundColor: '#e8e8e8',
      elevation: 5, // Sombra no Android (simula box-shadow)
      shadowColor: '#000', // Sombra no iOS
      shadowOffset: { width: 10, height: 10 }, // Simula box-shadow: 20px 20px 60px
      shadowOpacity: 0.2, // Opacidade da sombra
      shadowRadius: 10, // Suavização da sombra
    },
    inputFocused: {
      backgroundColor: '#e8e8e8',
      borderWidth: 1,
      borderColor: '#4682B4',
      elevation: 0, // Remove a elevação no Android
      shadowColor: '#000', // Sombra no iOS
      shadowOffset: { width: 0, height: 0 }, // Remove o deslocamento da sombra
      shadowOpacity: 0, // Remove a opacidade da sombra
      shadowRadius: 0, // Remove o raio da sombra
    },
  });

export default InputComponent;