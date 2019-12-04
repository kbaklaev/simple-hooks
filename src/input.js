import React from 'react'

export default function Input(textFromApp) {
  return (
    <div className='borderInput'>
      <h3>Input component (child2)</h3>
      Input component text from App component: {textFromApp.text}
    </div>
  )
}
