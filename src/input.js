import React from 'react'

export default function Input(textFromApp) {
  return (
    <div>
      <h3>Input component (child2)</h3>
      Text in Input component from Output: {textFromApp.text}
    </div>
  )
}
