import { useState, useEffect } from 'react';
import p from './page.module.css';
import { Link, useParams } from 'react-router-dom';
import CharPlace from '../CharactersLink/CharPlace';

const Fromlocation = () => {
  const { ids } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const LocationData = async () => {
      const result = await fetch(`https://rickandmortyapi.com/api/location/${ids}`);
      if (result.ok) {
        const resultJson = await result.json();
        setData(resultJson);
      }
    };
    LocationData();
  }, [ids]);


  if (!data) {
    return <h1 style={{ textAlign: 'center', position: 'relative', top: '120px' }}>Loading...</h1>;
  }

  return (
    <>
     <Link to='/location'>
      <div className={p.GoBack}>
        <img src="/Back.svg" />
        <h3>Go Back</h3>
      </div>
    </Link>

      <h1 style={{ textAlign: 'center', position: 'relative', top: '100px' }}>{data.name}</h1>

      <div className={p.info}>
        <div className={p.divInfo}>
          <div>
            <h3>Type</h3>
            <h4 className={p.text}>{data.type}</h4>
          </div>

          <div>
            <h3>Dimension</h3>
            <h4 className={p.text}>{data.dimension}</h4>
          </div>
        </div>
      </div>


      <div className={p.contain}>
      <div className={p.t}><h2 style={{color:'gray' ,display:'i'}}>Residents</h2></div>
        <div className={p.contain__div}>
          <CharPlace></CharPlace>
        </div>
      </div>
    </>
  );
};

export default Fromlocation