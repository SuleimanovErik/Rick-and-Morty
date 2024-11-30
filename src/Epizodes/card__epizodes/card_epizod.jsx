import { useEffect, useState } from 'react';
import ep from './Card_epizod.module.css';
import { EpisodeAll } from '../../api/api.episode';
import { Link } from 'react-router-dom';

const CardEpizod = () => {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const GetData = async () => {
     

      try {
        const response = await EpisodeAll.getAllEpisode({ name: filterName });

        if (response && response.results && response.results.length > 0) {
          setData(response.results);
          setError(false);
        } else {
          setData([]);
          setError(true);
        }
      } catch (err) {
        console.error('error');
        setError(true); 
      } 
    };

    GetData();
  }, [filterName]);

  if (loader) {
    return (
      <div className={ep.render__Contain}>
        <img className={ep.render} src='/Loading.svg' />
      </div>
    );
  }

  return (
    <>
      <div className={ep.div__found}>
        <input
          className={ep.input}
          type="text"
          placeholder="Filter by name or episodes (e.g., S01 or S01E02)"
          onChange={(e) => setFilterName(e.target.value)}
        />
      </div>

      <div className={ep.div__contain}>
        <div className={ep.contain}>
          {error ? (
            <div
              style={{
                width: '100%',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <div style={{ width: '20%', paddingTop: '80px' }}>
                <img
                  style={{ maxWidth: '100%' }}
                  src="https://rick-morty-lime.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpickle.d0091c27.png&w=640&q=75"
                  alt="Not Found"
                />
              </div>
              <h1>Episode not Found!</h1>
            </div>
          ) : (
            data.map((item) => (
              <Link to={`/episodes/characters/${item.id}`} className={ep.Card} key={item.id}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: '6px' }}>
                  <h3>{item.name}</h3>
                  <div>
                    <div>{item.air_date}</div>
                    <h5>{item.episode}</h5>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CardEpizod;


