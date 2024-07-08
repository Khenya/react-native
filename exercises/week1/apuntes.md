# Curso de Certificación en React Native

## Día 1: Componentes Básicos y JSX

### Objetivos del Día
- Aprender a utilizar JSX para estructurar componentes.
- Practicar la creación y renderización de componentes.
- Comprender la diferencia entre componentes stateless y stateful.

### Fundamentos de React Native

#### Introducción a React Native
- **React Native** es un framework desarrollado por Facebook para construir aplicaciones móviles utilizando JavaScript y React.
- Permite crear aplicaciones nativas para iOS y Android usando una base de código compartida.
- Utiliza componentes nativos en lugar de web views, lo que resulta en un rendimiento superior y una experiencia más cercana a la de una aplicación nativa.

### Componentes Básicos y JSX
- **Componentes** son las piezas fundamentales de una aplicación en React Native. Pueden ser **funcionales** (stateless) o **de clase** (stateful).
- **JSX** (JavaScript XML) es una extensión de JavaScript que permite escribir código similar a HTML dentro de JavaScript.
- Componentes básicos en React Native incluyen:
  - `<View>`: Contenedor para otros componentes.
  - `<Text>`: Para mostrar texto.
  - `<Image>`: Para mostrar imágenes.
  - `<ScrollView>`: Para vistas desplazables.
  - `<TextInput>`: Para campos de entrada de texto.

### Estructura de un Componente

Un componente en React o React Native se puede definir utilizando una función o una clase, pero nos estaremos centrando en los componentes funcionales con JSX.

#### Ejemplo en React
```jsx
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, UPB!</h1>
    </div>
  );
};
