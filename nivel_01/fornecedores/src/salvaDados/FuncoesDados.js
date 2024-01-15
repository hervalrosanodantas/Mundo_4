import AsyncStorage from '@react-native-async-storage/async-storage';

const recuperaDados = async () => {
    const listaDados = await AsyncStorage.getItem('dados');
    if (listaDados != null) {
        return JSON.parse(listaDados)
    } else {
        return []
    }
};

const adicionaDados = async (lista) => {
    const recuperaLista = await recuperaDados();
    recuperaLista.push(lista);
    await AsyncStorage.setItem('dados', JSON.stringify(recuperaLista));
    console.log('adicionou');
};

export { recuperaDados, adicionaDados }