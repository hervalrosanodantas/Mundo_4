import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { recuperaDados } from "../salvaDados/FuncoesDados.js";

function ListarFornecedoresScreen() {
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    const carregaDados = async () => {
        const listaDados = await recuperaDados();
        setFornecedores(listaDados);
    };

    carregaDados();
  }, []);

  return <ScrollView>
    {fornecedores.map((fornecedor, index) => {
      return <View style={styles.card}>
      <Image source={{uri: fornecedor.imagem}} style={styles.cardImage} />
      <View>
        <Text style={styles.cardTitle}>{fornecedor.nome}</Text>
        <Text style={styles.cardDetails}>{`Categoria: ${fornecedor.categoria}`}</Text>
        <Text style={styles.cardDetails}>{`Endereço: ${fornecedor.endereco}`}</Text>
        <Text style={styles.cardDetails}>{`Email: ${fornecedor.email}`}</Text>
        <Text style={styles.cardDetails}>{`Telefone: ${fornecedor.telefone}`}</Text>
      </View>
    </View>
    })}
  </ScrollView>
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    width: '90%',
    alignSelf: 'center'
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 25,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDetails: {
    color: "gray",
  },
});

export default ListarFornecedoresScreen;
