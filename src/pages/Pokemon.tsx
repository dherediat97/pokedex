import { useNavigate, useParams } from 'react-router-dom';
import PokeballImg from '../assets/pokeball.svg';
import styles from './pokemon.module.css';
import { useEffect, useState } from 'react';
import {
  PokemonDetails,
  PokemonEvolution,
  PokemonSpecie,
} from '../types/types';
import { fetchPokemon, fetchPokemonSpecie } from '../api/fetchPokemon';
import LoadingScreen from '../components/LoadingScreen';
import { capitalize, waitFor } from '../utils/utils';
import { Box, Typography } from '@mui/material';
import PokemonForms from '../components/PokemonForms';
import PokemonStats from '../components/PokemonStats';
import PokemonEvolutions from '../components/PokemonEvolution';
import PokemonTitle from '../components/PokemonTitle';
import { fetchPokemonEvolution } from '../api/fetchPokemonEvolutions';

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const [pokemonSpecie, setPokemonSpecie] = useState<PokemonSpecie>();
  const [pokemonEvolution, setPokemonEvolution] = useState<PokemonEvolution>();
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
    }
    async function getPokemonSpecie() {
      const fetchedPokemonSpecie = await fetchPokemonSpecie(name as string);
      setPokemonSpecie(fetchedPokemonSpecie);
    }
    getPokemon();
    getPokemonSpecie();
  }, [name]);

  useEffect(() => {
    async function getPokemonEvolution() {
      console.log(pokemonSpecie);
      const fetchEvolution = await fetchPokemonEvolution(
        pokemonSpecie?.evolution_chain.url
      );

      console.log(fetchEvolution);
      setPokemonEvolution(fetchEvolution);
      setIsLoading(false);
    }
    if (pokemonSpecie?.id != null) getPokemonEvolution();
  }, [pokemon]);

  if (isLoading || !pokemon) return <LoadingScreen />;

  return (
    <Box sx={{ padding: 8 }}>
      <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" />
        Go Back
      </button>

      <PokemonTitle pokemonTitles={pokemonSpecie?.names!} />

      <PokemonForms
        sprites={pokemon.sprites}
        pokemonName={capitalize(pokemon.name)}
      />

      <PokemonStats stats={pokemon.stats} />

      {pokemonEvolution!.firstEvolutionId ? (
        <>
          <Typography
            variant="h4"
            component="h4"
            sx={{ paddingTop: 8, paddingBottom: 4 }}
          >
            Evolutions
          </Typography>

          <PokemonEvolutions evolutions={pokemonEvolution!} />
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Pokemon;
