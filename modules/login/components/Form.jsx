import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, TextInput, Button, ActivityIndicator, MD3Colors } from "react-native-paper";

export default function Form({ onFormSubmit }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!usuario || !password) {
      return alert("Por favor, completa todos los campos.");
    }
    setLoading(true);

    setTimeout(() => {
      onFormSubmit({ usuario, contraseña: password });
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={require("../../../assets/nexus.png")} style={{ width: 350 }} />
        <Card.Title title="Inicio de sesión" titleStyle={styles.cardTitle} />
        <Card.Content>
          <Text variant="bodyMedium" style={styles.text}>
            Usuario
          </Text>
          <TextInput
            label="Usuario"
            value={usuario}
            onChangeText={(text) => setUsuario(text)}
            style={styles.input}
            mode="outlined"
          />
          <Text variant="bodyMedium" style={styles.text}>
            Contraseña
          </Text>
          <TextInput
            label="Contraseña"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            mode="outlined"
            secureTextEntry
          />
          <Button mode="contained" onPress={handleClick} style={styles.button}>
            {loading ? (
              <ActivityIndicator animating={true} size="large" color={MD3Colors.deepPurple900} />
            ) : (
              "Iniciar sesión"
            )}
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#222",
    borderRadius: 10,
    padding: 20,
    maxWidth: 400,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#1e90ff",
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    marginBottom: 5,
  },
});