import React from 'react'

const Work4 = (props) => {
    function Li() {
    return props.items.map((item, index)=><li key={index}>{item}</li>)
    }
  return (
    <div>
        <h1>Final</h1>
      <ul>
        <Li></Li>
      </ul>
    </div>
  )
}

export default Work4
