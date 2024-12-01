import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import char from './Card.module.css';
import { EpisodeAll } from '../../../api/api.episode';

const CharEpisode = () => {
  const { ide } = useParams();
  const [placeChar, setPlaceChar] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const EpisodeData = async () => {
      try {
        setLoading(true); 
        const result = await fetch(`https://rickandmortyapi.com/api/episode/${ide}`);
        if (!result.ok)throw new Error('Failed to fetch episode data');
        const resultJson = await result.json();
        const placeLinks = resultJson.characters; 
        const placeResponse = await Promise.all(
          placeLinks.map((url) => fetch(url).then((res) => res.json()))
        );


        setPlaceChar(placeResponse);
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    EpisodeData();
  }, [ide]); 

  if (loading) {
    return (
      <div className={char.loader}>
       <div><img className={char.render} src="/Loading.svg" /></div> 
      </div>
    );
  }

  if (error) {
    return <div className={char.error}>Error: {error}</div>;
  }

  return (
    <>
      {placeChar.length > 0 ? (
        placeChar.map((item) => (
          <Link className={char.CardLink} to={`/character/${item.id}`} key={item.id}>
            <div className={char.Card}>
              <img className={char.Character__img} src={item.image} alt={item.name} />
              <div className={char.Name}>
                <h3>{item.name}</h3>
                <div className={char.Information}>
                  <p style={{ fontSize: '18px' }}>{item.species}</p> -{' '}
                  <p style={{ fontSize: '18px' }}>{item.gender}</p>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div>Error</div>
      )}
    </>
  );
};

export default CharEpisode;


