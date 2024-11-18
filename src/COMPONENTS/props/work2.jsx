import React from 'react'
const Work2 = (props) => {
    function Button() {
        if(props.title){
            return props.title
        }
        else{
            return 'Error'
        }
    }
  return (
    <div>
      <button><Button></Button></button>
    </div>
  )
}

export default Work2
