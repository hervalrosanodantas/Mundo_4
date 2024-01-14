import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import RNFS from "react-native-fs";
import styles from "../src/Styles/styles.js";

const CadastrarFornecedoresScreen = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const saveToFornecedoresJson = async () => {
    const newFornecedor = { name, address, email, phone, image };

    try {
      const existingData = await RNFS.readFile(
        RNFS.DocumentDirectoryPath + "/fornecedores.json"
      );
      const jsonData = existingData ? JSON.parse(existingData) : [];
      jsonData.push(newFornecedor);
      await RNFS.writeFile(
        RNFS.DocumentDirectoryPath + "/fornecedores.json",
        JSON.stringify(jsonData)
      );
      alert("Fornecedor cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar o Fornecedor (fornecedores.json)", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cadastrar Fornecedores Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Celular (21) 97936-4726"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cole a URL de sua foto"
        value={image}
        onChangeText={(text) => setImage(text)}
      />
      <Button
        style={styles.button}
        title="Cadastrar"
        onPress={saveToFornecedoresJson}
      />
    </View>
  );
};

export default CadastrarFornecedoresScreen;
