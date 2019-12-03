import React from 'react';
import Output from './output' // импорт компонента output(из которого берется текст)
import Input from './input' // импорт компонента input(дочерний для App, в который заходит текст)

export const UPDATE_TEXT="UPDATE_TEXT" // инициализация переменной описывающей экшн и ее экспорт для компонента outlook

// редуктор для изменения текста или возврата начального состояния
function reducer(state, action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        inputText: action.inputText
      }
    default:
      return {
        initialState
      }
  }
}

// начальное значение для текста пустая строка
const initialState = {
  inputText: ""
}

// инициализация контекста
export const myContext = React.createContext('')

function App() {
  const [text, dispatch] = React.useReducer(reducer, initialState)
  return (
    <div>
      <myContext.Provider value={{ text, dispatch }}>
        <Output />
        <h3>App component (parent)</h3>
        App component text from Output component: {text.inputText}
        <p />
      </myContext.Provider>
      <br/>
      <Input text={text.inputText} />
    </div>
  );
}

export default App;
