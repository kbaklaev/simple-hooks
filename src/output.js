import React, { useState } from 'react'
import { myContext, UPDATE_TEXT } from './App'

export default function Output() {
  const { dispatch } = React.useContext(myContext)
  const [inputText, changeText] = useState("")
  const [propText, updatePropText] = useState("")
  const changeTextForm = (elem) => { changeText(elem.target.value) }

  return (
    <div className="borderOutput">
      <h3>Output component (child1)</h3>
      <input type="input" value={inputText} onChange={changeTextForm} />
      <button type="button" onClick={() => {
        dispatch({ type: UPDATE_TEXT, inputText: inputText })
        updatePropText(inputText)
      }}>START</button>
      <br />
      Output component text from useState hook: {propText}
      <br />
      Output component text from text form: {inputText}
    </div>
  )
}
