import { useState, useEffect } from 'react';
import z from './Page.module.css';
import { Link, useParams } from 'react-router-dom';
import CharEpisode from '../CharacterLink/Card';

const FromEpisode = () => {
  const { ide } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEpisodeData = async () => {
      try {
        const result = await fetch(`https://rickandmortyapi.com/api/episode/${ide}`);
        if (!result.ok) throw new Error('Failed to fetch episode data');
        
        const resultJson = await result.json();
        setData(resultJson);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchEpisodeData();
  }, [ide]); 

  if (error) {
    return <h1 style={{ textAlign: 'center', position: 'relative', top: '120px' }}>Error: {error}</h1>;
  }

  if (!data) {
    return <img src='/Loading.svg' style={{ textAlign: 'center', position: 'relative', top: '120px' }}/>
  }

  return (
    <>
      <Link to="/location">
        <div className={z.GoBack}>
          <img src="/Back.svg" alt="Go Back" />
          <h3>Go Back</h3>
        </div>
      </Link>

      <h1 style={{ textAlign: 'center', position: 'relative', top: '100px' }}>{data.name}</h1>

      <div className={z.info}>
        <div className={z.divInfo}>
          <div>
            <h3>Episode</h3>
            <h4 className={z.text}>{data.episode}</h4>
          </div>

          <div>
            <h3>Air Date</h3>
            <h4 className={z.text}>{data.air_date}</h4>
          </div>
        </div>
      </div>

      <div className={z.contain}>
        <div className={z.t}>
          <h2 style={{ color: 'gray', display: 'inline-block' }}>Residents</h2>
        </div>
        <div className={z.contain__div}>
          <CharEpisode characters={data.characters} /> 
        </div>
      </div>
    </>
  );
};

export default FromEpisode;