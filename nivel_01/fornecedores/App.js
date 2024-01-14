// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen.js";
import CadastrarFornecedoresScreen from "./src/screens/CadastrarFornecedoresScreen.js";
import ListarFornecedoresScreen from "./src/screens/ListarFornecedoresScreen.js";
import styles from "./src/Styles/styles.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor: "#fff",
          headerTitleStyle: styles.headerTitle,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Cadastrar Fornecedores"
          component={CadastrarFornecedoresScreen}
        />
        <Stack.Screen
          name="Listar Fornecedores"
          component={ListarFornecedoresScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
