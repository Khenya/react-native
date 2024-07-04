import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Square = ({ color }) => {
  return <View style={{
    width: 100,
    height: 100,
    backgroundColor: color,
    margin: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }}><Text style={{ fontSize: 24, color: 'white' }}>1</Text></View>;
}

// stateless (solo devuelve un view)
// un fragmente engloba muchas cosas
export default function App() {
  const [cont, setCont ]= useState(0);
  const addCount = () =>{
    setCont(cont + 1);
  }
  const subtractCount = () =>{
    setCont(cont - 1);
  }
return (
  <View style={styles.container}>
    <Text>Valor de mi contador = {cont}</Text>
    
    <View style={styles.cajaGrande}>
        <Square color="red" />
        <Square color="black" />
        <Square color="yellow" />
      </View>
    {/* <Button
      onPress={addCount}
      color="#841584"
      title="Sumar"
    />
    <Button
      onPress={subtractCount}
      color="#841584"
      title="Restar"
    /> */}
    
  </View>
);
}

const styles = StyleSheet.create({
  cajaGrande: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tectInfo: {
    flex: 1,
    backgroundColor: '#9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
});
