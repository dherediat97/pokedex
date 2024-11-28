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
  Grid,
  Grid2,
  ListSubheader,
  Paper,
  Typography,
} from '@mui/material';
import { Pokemon } from '../types/types';
import theme from '../theme';

const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      await waitFor(1000);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false);
    };
    fetchAllPokemons();
  }, []);

  if (isLoading || !pokemons) {
    return <LoadingScreen />;
  }

  const filterPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  return (
    <Box>
      <Header query={query} setQuery={setQuery} />
      {/* First Generation */}
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
