import {useState} from 'react'

const HandleClick = () => {
    const [lenght, setLanght] =useState(0)

  return (
    <>
       <h1>{lenght}</h1> 
       <button onClick={() => setLanght((count) => (count+1)%11)}>Add</button>
    </>
  )
}

export default HandleClick
