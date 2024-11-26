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
  ListSubheader,
  Paper,
  Typography,
} from '@mui/material';
import { Pokemon } from '../types/types';

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
      <Grid
        columnGap={2}
        rowSpacing={4}
        columnSpacing={2}
        container
        paddingBottom={4}
      >
        {filterPokemons?.slice(0, 151).map((pokemon, index) => (
          <Grid item key={index}>
            <Paper>
              <Card
                elevation={10}
                sx={{
                  width: 170,
                }}
              >
                <CardActionArea
                  LinkComponent={'a'}
                  href={`pokemons/${pokemon.name}`}
                >
                  <CardMedia
                    component="img"
                    alt={pokemon.name}
                    sx={{
                      height: 81,
                      objectFit: 'scale-down',
                    }}
                    image={pokemon.imgSrc}
                  ></CardMedia>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {capitalize(pokemon.name)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pokemons;
