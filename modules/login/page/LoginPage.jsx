import React from "react";
import { View } from "react-native";
import Form from "../components/Form.jsx";
import { useNavigate } from "react-router-native";

export default function LoginPage({ validateUser }) {
  const navigate = useNavigate();

  const handlerFormSubmit = (data) => {
    validateUser(navigate, data);
  };

  return (
    <View>
      <Form onFormSubmit={handlerFormSubmit} />
    </View>
  );
}