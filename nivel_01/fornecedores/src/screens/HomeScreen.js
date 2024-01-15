import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
  return <View style={styles.container}>
      <Text style={styles.titulo}>Home Screen</Text>
      <TouchableOpacity
      style={styles.botao}
        onPress={() => navigation.navigate("CadastrarFornecedores")}>
          <Text style={styles.botaoTexto}>Cadastrar Fornecedores</Text>
          </TouchableOpacity>
      <TouchableOpacity
      style={styles.botao}
        onPress={() => navigation.navigate("ListarFornecedores")}>
          <Text style={styles.botaoTexto}>Listar Fornecedores</Text>
      </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },  
  titulo: {
    textAlign:'center', 
    padding: 20,
    fontSize: 36,
    width: '100%'
  },
  botao: {
    backgroundColor: 'gray',
    borderRadius: 20,
    padding: 20,
    marginTop: '20%',
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16
  }
});

export default HomeScreen;
