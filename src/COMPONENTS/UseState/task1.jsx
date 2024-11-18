import {useState} from 'react'
const Task1 = () => {
const [name, setName]=useState('')
const [email, setEmail]=useState('')
function NameChange() {
    setName(e.target.value)
}
function EmailChange() {
    setEmail(e.target.value)
}
function Delete() {
    setName('')
    setEmail('')
    
}



  return (
    <div>
        <form>
            <input type="text" placeholder='name'  onChange={NameChange}/>
            <input type="email" placeholder='email '  onChange={EmailChange}/>
            <button onClick={Delete}>Delete</button>


            <h1>Text:</h1>
            <h2>{name}</h2>
            <h2>{email}</h2>
        </form>
    </div>
  )
}

export default Task1