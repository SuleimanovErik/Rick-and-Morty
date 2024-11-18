import React from 'react'

const Modul2 = ({time}) => {
    function Day() {
        if (time>4 && time<11) {
            return 'Good morning'
        }
        else if(time>11 && time<18) {
            return 'Good afternoon'
        }
        else if(time>18 && time<22) {
            return 'Good evening'
        }
    }
  return (
    <div>
      <h1>{Day()}</h1>
    </div>
  )
}

export default Modul2
