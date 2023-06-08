import React from 'react'

const Forms = (props) => {
  return (
  <form onSubmit={onSubmit}>
    {props.children}
  </form>
  )
}

export default Forms