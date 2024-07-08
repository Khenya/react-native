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
- **Stateless** (sin estado): No tiene estado.
- **Stateful** (con estado): Tiene estado.
- Solo devuelven una etiqueta.
- Una **propiedad** es algo que no cambia, es constante.
- Un **state** cambia, es una variable. Un **estado** es algo que cambia, un input o un botón actualizan y cambian el estado.

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

## Listas y Objetos
- Para manejar listas se utiliza `map` para iterar y generar elementos.
  ```jsx
  const items = ['item1', 'item2', 'item3'];
  const listItems = items.map(item => <Text key={item}>{item}</Text>);
