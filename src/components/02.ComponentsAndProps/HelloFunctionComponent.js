// "rfce" short-hand for function component snippet
import React from 'react'

function HelloFunctionComponent(props) {
    console.log(props);
  return (
    <h1>Hello {props.student}, from function component</h1>
  )
}

export default HelloFunctionComponent