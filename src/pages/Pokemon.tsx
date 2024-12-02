import { useNavigate, useParams } from 'react-router-dom';
import PokeballImg from '../assets/pokeball.svg';
import styles from './pokemon.module.css';
import { useEffect, useState } from 'react';
import { PokemonDetails, PokemonSpecie } from '../types/types';
import { fetchPokemon, fetchPokemonSpecie } from '../api/fetchPokemon';
import LoadingScreen from '../components/LoadingScreen';
import { capitalize, waitFor } from '../utils/utils';
import { Box, Typography } from '@mui/material';
import PokemonForms from '../components/PokemonForms';
import PokemonStats from '../components/PokemonStats';
import PokemonForm from '../components/PokemonForm';
import { baseUrlImg } from '../app/app_urls';
import PokemonEvolutions from '../components/PokemonEvolution';
import PokemonTitle from '../components/PokemonTitle';

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const [pokemonSpecie, setPokemonSpecie] = useState<PokemonSpecie>();
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      await waitFor(100);
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
    }

    async function getPokemonSpecie() {
      const fetchedPokemon = await fetchPokemonSpecie(name as string);
      setPokemonSpecie(fetchedPokemon);
      setIsLoading(false);
    }
    getPokemon();
    getPokemonSpecie();
  }, [name]);

  if (isLoading || !pokemon) return <LoadingScreen />;

  return (
    <Box
      sx={{
        margin: 4,
      }}
    >
      <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" />
        Go Back
      </button>

      {/* <PokemonTitle pokemonTitles={pokemonSpecie?.names} /> */}

      <PokemonForm
        formName="Default Form"
        imgSrc={`${baseUrlImg}/${pokemon.name}.png`}
        pokemonName={pokemon.name}
      />

      <PokemonForms
        sprites={pokemon.sprites}
        pokemonName={capitalize(pokemon.name)}
      />
      <PokemonStats stats={pokemon.stats} />
      <Typography
        variant="h3"
        component="h3"
        sx={{ paddingTop: 8, paddingBottom: 4 }}
        textAlign={'center'}
      >
        {capitalize(pokemon.name)} Evolutions
      </Typography>
      <PokemonEvolutions />
    </Box>
  );
};

export default Pokemon;
