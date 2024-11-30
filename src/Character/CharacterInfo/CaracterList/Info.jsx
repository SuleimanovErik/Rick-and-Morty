import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import i from "./Info.module.css";

const CharInfo = () => {
  const [data, setData] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [image, setImage] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate(); 

  const BigImage = () => {
    setImage(!image);
  };

  const goBack = () => {
    navigate(-1);  
  };

  useEffect(() => {
    async function fetchCharacterData() {
      const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      if (result.ok) {
        const json = await result.json();
        setData(json);

        const episodeLinks = json.episode;
        console.log(json.episode);

        const episodeResponse = await Promise.all(
          episodeLinks.map((url) => fetch(url).then((res) => res.json()))
        );

        setEpisodes(episodeResponse);
      }
    }
    fetchCharacterData();
  }, [id]);

  if (!data) {
    return (
      <div>
        <img style={{ maxWidth: "300px" }} src="Loading.svg" />
      </div>
    );
  }

  return (
    <>
      <div className={i.GoBack} onClick={goBack}>
        <img src="/Back.svg" alt="Go Back" />
        <h3>Go Back</h3>
      </div>

      <div className={i.div__Rick}>
        <img
          className={image ? i.img__Profile : i.img__Rick}
          src={data.image}
          onClick={BigImage}
          alt={data.name}
        />
        <h1>{data.name}</h1>
      </div>

      <div className={i.contain__information}>
        <div className={i.dav}>
          <div className={i.div__Informss}>
            <h2 className={i.Information}>Information</h2>
            <div className={i.info}>
              <h3>Gender</h3>
              <p>{data.gender}</p>
            </div>
          </div>

          <div className={i.div__Inform}>
            <div className={i.info}>
              <h3>Status</h3>
              <p>{data.status}</p>
            </div>
          </div>

          <div className={i.div__Inform}>
            <div className={i.info}>
              <h3>Species</h3>
              <p>{data.species}</p>
            </div>
          </div>

          <div className={i.div__Inform}>
            <div className={i.info}>
              <h3>Origin</h3>
              <p>{data.origin.name}</p>
            </div>
          </div>

          <Link to={`/location/characters/${data.id}`} className={i.div__Inform}>
            <div className={i.info}>
              <h3>Location</h3>
              <p>{data.location.name}</p>
            </div>
            <div>
              <img src="/slide.svg" alt="Location" />
            </div>
          </Link>
        </div>

        <div className={i.dav2}>
          <div className={i.div__Informs}>
            <h2 className={i.Information}>Episodes</h2>
            <div className={i.info}>
              {episodes.length > 0 ? (
                episodes.slice(0, 4).map((ep) => (
                  <Link to={`/episodes/characters/${ep.id}`} key={ep.id} className={i.div__Episode} >
                    <div>
                      <h3>{ep.episode}</h3>
                      <p>{ep.name}</p>
                      <p>{ep.air_date}</p>
                    </div>
                    <div>
                      <img src="/slide.svg"  />
                    </div>
                  </Link>
                ))
              ) : (
                <div>
                  <img style={{ maxWidth: "300px" }} src="Loading.svg" alt="Загрузка..." />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharInfo;