import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/syles.js';


const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Lógica de inicio de sesión
  
    // Después de iniciar sesión con éxito, navegar a la pantalla de inicio
    navigation.navigate("Main");  // Aquí se usa "Main" ya que es el nombre que diste a la pantalla en tu Stack.Navigator
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        {/* Fondo azul claro */}
      </View>

      <Card style={styles.card}>
        {/* Logo centrado en la card */}
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />

        {/* Etiquetas fuera de los campos de texto */}
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput secureTextEntry style={styles.input} />

        {/* Botón de inicio de sesión más grande */}
        <Button mode="contained" style={styles.loginButton} onPress={handleLogin}>
          Iniciar sesión
        </Button>
      </Card>

      {/* Iconos de redes sociales */}
      <View style={styles.socialIcons}>
        <Icon name="facebook" size={30} color="#3b5998" />
        <Icon name="whatsapp" size={30} color="#25D366" />
        <Icon name="twitter" size={30} color="#1DA1F2" />
      </View>
    </View>
  );
};

export default LoginScreen;
