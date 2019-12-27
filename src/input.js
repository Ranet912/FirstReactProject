import React, { Component } from 'react'

const Input = (props) => {
  return (
    <div>
      <p>{props.label}</p>
        <input
         type={props.type}
         value={props.value}
         onChange={props.onChange}
        />
    </div>
  )
}

export default Input
