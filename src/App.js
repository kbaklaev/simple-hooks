import React from 'react';
import Output from './output'
import Input from './input'
import './style.css'

export const UPDATE_TEXT="UPDATE_TEXT"

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
    <body className="borderApp">
      <myContext.Provider value={{ text, dispatch }}>
        <Output />
        <h3>App component (parent)</h3>
        App component text from Output component: {text.inputText}
        <p />
      </myContext.Provider>
      <br/>
      <div>
        <Input text={text.inputText} />
      </div>
    </body>
  );
}

export default App;
