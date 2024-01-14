import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../src/Styles/styles.js";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Cadastrar Fornecedores"
        onPress={() => navigation.navigate("CadastrarFornecedores")}
      />
      <Button
        title="Listar Fornecedores"
        onPress={() => navigation.navigate("ListarFornecedores")}
      />
    </View>
  );
};

export default HomeScreen;
