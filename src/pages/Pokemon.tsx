import { useNavigate, useParams } from 'react-router-dom';
import PokeballImg from '../assets/pokeball.svg';
import Footer from '../components/Footer';
import styles from './pokemon.module.css';
import { useEffect, useState } from 'react';
import { PokemonDetails } from '../types/types';
import { fetchPokemon } from '../api/fetchPokemon';
import LoadingScreen from '../components/LoadingScreen';
import { capitalize, waitFor } from '../utils/utils';

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      await waitFor(100);
      const fetchedPokemon = await fetchPokemon(id as string);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }
    getPokemon();
  }, [id]);

  if (isLoading || !pokemon) return <LoadingScreen />;

  return (
    <>
      <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" />
        Go Back
      </button>
      <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
          <div className={styles.pokemonTitle}>{capitalize(pokemon.name)}</div>
          <div>Nr. {pokemon?.id}</div>
          <div>
            <img
              className={styles.pokemonInfoImg}
              src={pokemon?.imgSrc}
              alt={capitalize(pokemon.name)}
            ></img>
          </div>
          <div>HP: {pokemon?.hp}</div>
          <div>Attack: {pokemon?.attack}</div>
          <div>Defense: {pokemon?.defense}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Pokemon;
