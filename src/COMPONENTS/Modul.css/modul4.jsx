import React from 'react'

const Modul4 = ({type}) => {
    function Color() {
        if (type == 'success') {
            return {color:'green'}
        }
        else if (type == 'error') {
            return {color:'red'}
        }
        else if (type == 'warning') {
            return {color:'orange'}
        }
    }
    console.log(Color());
    
  return (
    <div>
        <h1 style={Color(type)}>{type}</h1>
    </div>
  )
}

export default Modul4