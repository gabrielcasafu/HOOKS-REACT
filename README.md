## Presentando Hooks

Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.

### `Hook de estado`

const [state, setState] = useState(initialState);<br />
Devuelve un valor con estado y una función para actualizarlo.

Durante el renderizado inicial, el estado devuelto (state) es el mismo que el valor pasado como primer argumento (initialState).

La función setState se usa para actualizar el estado. Acepta un nuevo valor de estado y sitúa en la cola una nueva renderización del componente.

### `Hook de efecto`

useEffect(() => {document.title = `You clicked ${count} times`;});<br />

Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse. React recordará la función que le hemos pasado (nos referiremos a ella como nuestro “efecto”), y la llamará más tarde después de actualizar el DOM. En este efecto, actualizamos el título del documento, pero también podríamos hacer peticiones de datos o invocar alguna API imperativa.

