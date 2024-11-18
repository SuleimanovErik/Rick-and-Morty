import {useState} from 'react'

const Task3 = () => {
    const [text,setText]=useState(false)
    function Lorem() {
        setText(!text)
    }
  return (
    <div>
      <h1>Lorem...</h1><button onClick={Lorem}>{text&&'hidden'}{!text&&'open'}</button>
      {text && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, quia.</p>}
      {!text && <p></p>}
    </div>
  )
}

export default Task3
