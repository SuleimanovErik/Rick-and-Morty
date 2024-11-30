import { Routes,Route } from "react-router-dom"
import FullMainList from "./Character/Pages/Pages"
import FullEpizodList from "./Epizodes/Pages/Pages_Epizod"
import PagesLocation from "./Location/Pages/Pages"
import Header from "./Character/Header/header"
import CharInfo from "./Character/CharacterInfo/CaracterList/Info"
import Fromlocation from "./Location/Characters__Location/Pages__Location/page"
import FromEpisode from "./Epizodes/Characters__Episode/PagesEpisode/Pages"
import { UserContext } from "./UserContext/User"
import { useState } from "react"
import Slider from "./Character/Slider/Slider"
function App() {
const [data, setData]=useState([])
const providerData ={
  onchange:setData,
  products:data
}
return (
  <>
  <UserContext.Provider value={providerData}>
  <Header></Header>
  <Routes>
    <Route path={'/'} element={<FullMainList/>}/>
    <Route path={'/location'} element={<PagesLocation></PagesLocation>}/>
    <Route path={'/episodes'} element={<FullEpizodList></FullEpizodList>}/>
    <Route path={'/character/:id'} element={<CharInfo></CharInfo>}></Route>
    <Route path={'/location/characters/:ids'} element={<Fromlocation></Fromlocation>}></Route>
    <Route path={'/episodes/characters/:ide'} element={<FromEpisode></FromEpisode>}></Route>
    <Route path={'*'}  element={<div style={{display:'flex',justifyContent:'center'}}> <h1 style={{textAlign:'center', marginTop:'300px', color:'red',position:'fixed'}}>Error 404</h1></div>}/>
  </Routes>

  </UserContext.Provider>
 
  </>
)
}


export default App