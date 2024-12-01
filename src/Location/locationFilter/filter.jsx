import {useEffect,useState} from 'react'
import l from './filter.module.css'
import loader from '../../Epizodes/card__epizodes/loader.svg'
import CardBox from '../LocationCard/card'

const LocationList = () => {
    const [data,setData]=useState([])
    const [filterName,setFilterName]=useState('')
    const [error,setError]=useState(true)
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    useEffect(()=>{
        async function GetData() {
          setTimeout(()=>{
            setLoading(false)
          }, 300)
           const result= await fetch(`https://rickandmortyapi.com/api/location?name=${filterName}&page=${page}`)
          if (result.ok) {
           const rasultJson=await result.json()
           setData(rasultJson.results)
          }
          else{
           setError(false)
          }
          if (result.ok) {
           setError(true)
         }
         
         }
         GetData()
       
        
           },[filterName,page])
           if(loading){
            return(
              <div className={l.render__Contain}>
              <img className={l.render} src={loader} />
            </div>
            )
           }
  return (
    <>
    <div className={l.div__found}>
        <input className={l.input} type="text" placeholder="Filter by name or episodes(ex. S01 or S01E02)" value={filterName} onChange={(e)=>setFilterName(e.target.value)}></input>
    </div>

    <div className={l.div__contain}>
        <div className={l.contain}>

        {error && data.map((item, index)=>(<CardBox info={item} key={index}></CardBox>))}

    {!error && <div style={{width:'100%',height:'300px', display:'flex',justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
      <div style={{width:'20%',paddingTop:'80px'}}><img  style={{maxWidth:'100%'}} src="https://rick-morty-lime.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpickle.d0091c27.png&w=640&q=75"/></div> <h1>Episode not Found!</h1>
      </div>}
        </div>
    </div>
    <div className={l.ShoyMor}><div><button className={l.Page__btn} onClick={(()=>{setPage((prev)=>prev == 7?prev=1:prev+1 )})}><h3>{`Page-${page} `}</h3></button></div></div>
    </>
  )
}

export default LocationList