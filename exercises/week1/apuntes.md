# Fundamentos de React Native

## Introducción a React Native
- **React.js** es una librería para la web que utiliza componentes y etiquetas HTML.
- **React Native** es una librería para aplicaciones móviles que utiliza componentes nativos, convirtiendo el código en nativo.
- **DOM (Document Object Model)** es un árbol donde si se modifica algo, se modifica todo el árbol.
- **Virtual DOM** es similar a un árbol, pero solo modifica sus hijos y actualiza el DOM real solo cuando termina el proceso.
- Para React Native existen dos herramientas principales:
  - **Expo**: Ideal para prototipos.
  - **Create React Native App (CLI)**: Ideal para proyectos grandes.

## Componentes
- Un **componente** es una función.
- Solo devuelven una etiqueta.
- Una **propiedad** es algo que no cambia, es constante.
- Un **state** cambia, es una variable. Un **estado** es algo que cambia, un input o un botón actualizan y cambian el estado.
### Componente Stateless (Sin Estado)
  Los componentes stateless no tienen su propio estado interno. Solo reciben datos a través de props y los renderizan. Son puramente de presentación y dependen completamente de las props.

  Ejemplo:
  
  ```jsx
import React from 'react';
import { View, Text } from 'react-native';

const TextComponent = ({ message }) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default TextComponent;

  ```
  ### Componente Stateful (Con Estado)  
  Los componentes stateful tienen su propio estado interno, lo que les permite tener una lógica más compleja y responder a las interacciones del usuario.

Ejemplo:

  ```jsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ContadorComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default ContadorComponent;
  ```
## Hooks
- **Hooks** son ganchos que se enganchan en las tres fases de la vida de un componente:
  - Antes de crearse.
  - Después de crearse.
  - Cuando se destruye.
- Todo lo que inicia con `use` es un hook.

## Exportación
- `export default`: Se utiliza cuando solo exportamos una cosa.

## JavaScript
- `let` es una variable, ya no se usa `var`.
- `const` es una constante.
- BigInt y Number no se pueden operar directamente.

## Objetos: Puedes utilizar console.table para mostrar objetos de manera más clara.
  ```jsx
const ESTUDIANTE = { nombre: 'Juan', edad: 20 };
console.table(ESTUDIANTE);
  ```
Cuando llamas a un atributo que no está en el objeto, JavaScript lo agrega.
Para pasar todos los elementos a un nuevo elemento, se usan los ....
  ```jsx
  const nuevoObjeto = { ...auto, ...conductor, licencia: "123" };`
  ```
## Listas y Objetos
- Para manejar listas se utiliza `map` para iterar y generar elementos.
  ```jsx
  const items = ['item1', 'item2', 'item3'];
  const listItems = items.map(item => <Text key={item}>{item}</Text>);
