import React, { useState } from "react";
import { View } from "react-native";
import { PaperProvider, MD3DarkTheme as DefaultTheme } from "react-native-paper";
import LoginPage from "./modules/login/page/LoginPage.jsx";
import HomePage from "./modules/home/page/homePage.jsx";
import { NativeRouter, Route, Routes } from "react-router-native";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: DefaultTheme.colors.background,
  },
};

const App = () => {
  const [auth, setAuth] = useState(false);
  const usuarioValidado = {
    usuario: "usuario123",
    password: "1234",
  };

  const validateUser = (navigate, data) => {
    if(!data ){
      return alert("Datos de usuario no proporcionados");
    }
    const { usuario, password } = data;
    if (usuario === usuarioValidado.usuario &&
      password === usuarioValidado.contraseña) {
      setAuth(true);
      navigate("/home");
    } else {
      setAuth(false);
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <PaperProvider theme={theme}>
      <NativeRouter>
        <View style={{ flex: 1, backgroundColor: DefaultTheme.colors.background }}>
          <Routes>
            <Route path="/" element={<LoginPage validateUser={validateUser} />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </View>
      </NativeRouter>
    </PaperProvider>
  );
};

export default App;