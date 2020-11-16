import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../Services/avatar';
import List from '../components/Detail/List';
import { useEarthFire } from '../Hooks/EarthFireProvider';
import earthStyles from '../Earth.css';
import fireStyles from '../Fire.css';
import './CharactersViewer.css';

const CharactersViewer = () => {
  const [characters, setCharacters] = useState([]);
  const earthFire = useEarthFire();
  const [page, setPage] = useState(1);

  const changePage = (direction) => {
    setPage(prevPage => prevPage + direction);
    // -1, 1 
  };


  useEffect(() => {
    fetchCharacters()
      .then(res => setCharacters(res));
  }, []);

  return (
    <>
      <section className={earthFire === 'earth' ? earthStyles.Root : fireStyles.Root}>
        <List characters={characters.slice((page - 1) * 10, page * 10)} />
      </section>
    </>
  );
};