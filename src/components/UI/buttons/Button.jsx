import React from 'react'
import './Button.css'

const Button = ({ text, className, fnc, id, type }) => {
  return (
    <button
      type={type}
      id={id}
      className={`main-button ${className}`}
      onClick={fnc}
    >
      {text}
    </button>
  )
}

export default Button
