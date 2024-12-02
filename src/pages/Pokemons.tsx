import { useEffect, useState } from 'react';
import Header from '../components/Header';

import { fetchPokemons } from '../api/fetchPokemons';
import LoadingScreen from '../components/LoadingScreen';
import { capitalize, waitFor } from '../utils/utils';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from '@mui/material';
import { Pokemon, PokemonResponse } from '../types/types';
import generations from '../app/app_constants';

const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  var [pageIndex, setPageIndex] = useState(0);

  const fetchInitialLoadPokemons = async () => {
    setIsLoading(true);
    await waitFor(750);

    const pokemonResponse = await fetchPokemons(
      generations.at(pageIndex)?.lastPokemon!
    );
    setPageIndex(1);

    setPokemons(pokemonResponse.results);
    setIsLoading(false);
  };

  const fetchPokemonsPaginate = async () => {
    console.log(pageIndex);
    const pokemonResponse = await fetchPokemons(
      generations.at(pageIndex)?.lastPokemon!
    );
    setPageIndex(pageIndex++);
    setPokemons([...pokemons, ...pokemonResponse.results]);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    if (generations.at(pageIndex)?.lastPokemon!) fetchPokemonsPaginate();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => {
    fetchInitialLoadPokemons();
  }, []);

  if (isLoading || !pokemons) {
    return <LoadingScreen />;
  }

  const filterPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  return (
    <Box>
      <Header query={query} setQuery={setQuery} />
      <Grid2
        columnGap={4}
        rowSpacing={4}
        columnSpacing={4}
        container
        padding={4}
      >
        {filterPokemons.map((pokemon, index) => (
          <Box key={index} sx={{ borderRadius: 16, overflow: 'hidden' }}>
            <CardActionArea
              LinkComponent={'a'}
              href={`pokemons/${pokemon.name}`}
            >
              <Card
                elevation={10}
                sx={{
                  width: 170,
                  paddingTop: 4,
                }}
              >
                <CardMedia
                  component="img"
                  alt={pokemon.name}
                  sx={{
                    margin: '0 auto',
                    height: 100,
                    paddingBottom: 4,
                    objectFit: 'scale-down',
                  }}
                  image={pokemon.imgSrc}
                ></CardMedia>
                <CardContent
                  sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    background:
                      'linear-gradient(to right bottom, #20b49c, #106a59)',
                    color: '#fff',
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {capitalize(pokemon.name)}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Box>
        ))}
      </Grid2>
    </Box>
  );
};

export default Pokemons;
