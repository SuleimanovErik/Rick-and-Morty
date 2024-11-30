import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import place from './CharPlace.module.css';


const CharPlace = () => {
  const { ids } = useParams();
  const [placeChar, setPlaceChar] = useState([]); 

  useEffect(() => {
    const LocationData = async () => {
      const result = await fetch(`https://rickandmortyapi.com/api/location/${ids}`);
      if (result.ok) {
        const resultJson = await result.json();

        const placeLinks = resultJson.residents; 
        const placeResponse = await Promise.all(
          placeLinks.map((url) => fetch(url).then((res) => res.json()))
        );

        setPlaceChar(placeResponse);
      }
    };
    LocationData();
  }, [ids]);

  return (
    <>
      {placeChar ? (
        placeChar.map((item, index) => (
          <Link className={place.CardLink} to={`/character/${item.id}`} key={index}>
          <div className={place.Card}>
            <img className={place.Character__img}src={item.image}/>
            <div className={place.Name}>
              <h3>{item.name}</h3>
              <div className={place.Information}>
                <p style={{ fontSize: '18px' }}>{item.species}</p>  -  <p style={{ fontSize: '18px' }}>{item.gender}</p>
              </div>
            </div>
          </div>
          </Link>
        ))
      ) : (
        <div className={place.loader}><img className={place.render} src='Loading.svg' /></div>
      )}
    </>
  );
};

export default CharPlace;
