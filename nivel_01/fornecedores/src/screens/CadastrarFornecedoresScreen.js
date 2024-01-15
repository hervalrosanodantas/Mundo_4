import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { adicionaDados } from "../salvaDados/FuncoesDados.js";

function CadastrarFornecedoresScreen() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");

  return <View style={styles.container}>
      <Text style={styles.heading}>Cadastrar Fornecedores</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(text) => setNome(text)}
        Defaultvalue={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        onChangeText={(text) => setCategoria(text)}
        Defaultvalue={categoria}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        onChangeText={(text) => setEndereco(text)}
        Defaultvalue={endereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        Defaultvalue={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Celular (21) 97936-4726"
        onChangeText={(text) => setTelefone(text)}
        Defaultvalue={telefone}
      />
      <TextInput
        style={styles.input}
        placeholder="Cole a URL de sua foto"
        onChangeText={(text) => setImagem(text)}
        Defaultvalue={imagem}
      />
      <TouchableOpacity title="Cadastrar" onPress={async() => {
        const lista = {"imagem": `${imagem}`, "nome": `${nome}`, "telefone": `${telefone}`, "email": `${email}`, "endereco": `${endereco}`, "categoria": `${categoria}`}
        await adicionaDados(lista)
      }} style={styles.button}>
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: '15%',
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: '10%',
  },
  button: {
    backgroundColor: 'grey',
    width: "80%",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  botaoTexto: {
    color: '#FFF', 
    textAlign:'center',
    fontSize: 20
  }
});
export default CadastrarFornecedoresScreen;
