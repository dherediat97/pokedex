import { useEffect, useState } from 'react';
import Header from '../components/Header';

import { fetchPokemons } from '../api/fetchPokemons';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';
import { Box, Container, Grid, Grid2 } from '@mui/material';
import { Pokemon } from '../types/types';
import generations from '../app/app_constants';
import PokemonItem from '../components/PokemomItem';

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
    if (generations.at(pageIndex)?.lastPokemon) fetchPokemonsPaginate();
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
    <Container>
      <Header query={query} setQuery={setQuery} />
      <Grid2 rowSpacing={12} columnSpacing={12} container>
        {filterPokemons.map((pokemon, index) => (
          <Grid2
            key={index}
            sx={{ borderRadius: 16, overflow: 'hidden' }}
            size={{ xs: 3, sm: 4, md: 3 }}
          >
            <PokemonItem pokemon={pokemon} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Pokemons;
