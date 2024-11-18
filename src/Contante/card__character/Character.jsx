import { useEffect,useState } from "react"
import card from './Character.module.css'
import loader from './loading.svg'
function Character() {
    const [data,setData]=useState([])
    const [selectGender,setSelectGender]=useState("")
    const [selectSpecies,setSelectSpecies]=useState("")
    const [selectStatus,setSelectStatus]=useState("")
    const [filterName,setFilterName]=useState('')
    const [error,setError]=useState(true)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
     async function GetData() {
      setTimeout(()=>{
        setLoading(false)
      }, 840)
        const result= await fetch(`https://rickandmortyapi.com/api/character/?name=${filterName}&gender=${selectGender}&species=${selectSpecies}&status=${selectStatus}`)
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
  
    },)

    if (loading) {
      return (
        <div className={card.render__Contain}>
          <img className={card.render} src={loader} alt="" />
        </div>
      )
    }
    return (
        <>
        <input className={card.input} type="text" placeholder="Фильтрация по имени" value={filterName} onChange={(e)=>setFilterName(e.target.value)}></input>
        <select className={card.select1}  value={selectSpecies} onChange={(e)=>setSelectSpecies(e.target.value)}>
            <option  disabled value={''}>Раса</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
        </select>

        <select className={card.select1}  value={selectGender} onChange={(e)=>setSelectGender(e.target.value)}>
          
            <option  disabled value={''}>Гендер</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>

        <select className={card.select1} value={selectStatus} onChange={(e)=>setSelectStatus(e.target.value)}>
            <option  disabled value={''}>Статус</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
        </select>

        {error && data.map((item,index)=>(<div className={card.Card} key={index}>
          <img className={card.Character__img} src={item.image} />
          <div className={card.Name}>
          <h3>{item.name}</h3>
          <div className={card.Information}>
          <p style={{fontSize:'18px'}}>{item.species}</p> - <p style={{fontSize:'18px'}}>{item.gender}</p>
          </div>
          </div>
        </div>))}
        {!error && <div style={{width:'100%',height:'300px', display:'flex',justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
          <div style={{width:'20%',paddingTop:'80px'}}><img style={{maxWidth:'100%'}} src="https://rick-morty-lime.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpickle.d0091c27.png&w=640&q=75"/></div> <h1>Characters not Found!</h1>
        </div>}
        </>
      )
      }
      
      
      export default Character
