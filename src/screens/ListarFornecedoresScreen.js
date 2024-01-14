// Update ListarFornecedoresScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image } from "react-native";
import RNFS from "react-native-fs";
//import styles from "../Styles/styles.js";

const ListarFornecedoresScreen = () => {
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    const loadFornecedores = async () => {
      try {
        const jsonData = await RNFS.readFile(
          RNFS.DocumentDirectoryPath + "/fornecedores.json"
        );
        const parsedData = jsonData ? JSON.parse(jsonData) : [];
        setFornecedores(parsedData);
      } catch (error) {
        console.error("Erro ao Listar Fornecedores", error);
      }
    };

    loadFornecedores();
  }, []);

  return (
    <View style={styles.cardContainer}>
      <FlatList
        data={fornecedores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text
                style={styles.cardDetails}
              >{`Address: ${item.address}`}</Text>
              <Text style={styles.cardDetails}>{`Email: ${item.email}`}</Text>
              <Text style={styles.cardDetails}>{`Phone: ${item.phone}`}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListarFornecedoresScreen;
