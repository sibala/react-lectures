import React from 'react'

function ChildComponentButton({ passingUpProps }) {
  return (
    <button onClick={() => { passingUpProps('Hello from ChildComponentButton') }}>
        Pass up props from child to parent
    </button>
  )
}

export default ChildComponentButton