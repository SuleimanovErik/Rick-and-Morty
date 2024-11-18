import React from 'react'

const Modul1 = ({isLoading ,data}) => {
    function Loading() {
        if (isLoading==true) {
            return 'Loading.....'
        }
        else if(isLoading==false){
            return data.map((item , index)=> <h1 key={index}>{Object.values(item)}</h1>  )
        }
        
    }
  return (
    <div style={{width:'100%', display:'flex' ,justifyContent:'center',height:'600px',alignItems:'center', flexDirection:'column'}}>
      <Loading></Loading>
    </div>
  )
}

export default Modul1
