import { useNavigate, useParams } from 'react-router-dom';
import PokeballImg from '../assets/pokeball.svg';
import styles from './pokemon.module.css';
import { useEffect, useState } from 'react';
import { PokemonDetails } from '../types/types';
import { fetchPokemon } from '../api/fetchPokemon';
import LoadingScreen from '../components/LoadingScreen';
import { capitalize, waitFor } from '../utils/utils';
import { Box, Card, CardHeader, CardMedia, Typography } from '@mui/material';
import PokemonForms from '../components/PokemonForms';
import PokemonStats from '../components/PokemonStats';

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      await waitFor(100);
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }
    getPokemon();
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
      <Typography
        variant="h3"
        component="h3"
        sx={{ paddingTop: 8, paddingBottom: 4 }}
        textAlign={'center'}
      >
        {capitalize(pokemon.name)}
      </Typography>
      <Card
        sx={{
          maxWidth: 200,
          margin: '0 auto',
        }}
      >
        <CardHeader title={'Default form:'} />
        <CardMedia
          component="img"
          sx={{
            margin: '0 auto',
            objectFit: 'cover',
            width: '100%',
          }}
          image={pokemon.defaultFrontImg}
          alt={pokemon.name}
        />
      </Card>
      <PokemonForms
        sprites={pokemon.sprites}
        pokemonName={capitalize(pokemon.name)}
      ></PokemonForms>
      <PokemonStats stats={pokemon.stats}></PokemonStats>
      {/* <div>All Evolutions:</div> */}
    </Box>
  );
};

export default Pokemon;
