import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Grid2,
  Typography,
} from '@mui/material';
import { Sprites } from '../types/types';

type PokemonFormsProps = {
  sprites: Sprites;
  pokemonName: string;
};

const PokemonForms = ({ sprites, pokemonName }: PokemonFormsProps) => {
  return (
    <>
      <Typography
        sx={{ paddingTop: 8, paddingBottom: 4 }}
        variant="h5"
        component="h5"
      >
        Forms:
      </Typography>
      <Grid2 container spacing={2} flexGrow={9}>
        <Grid2 size={4}>
          {sprites.front_female ? (
            <Card
              sx={{
                maxWidth: 200,
                margin: '0 auto',
              }}
            >
              <CardHeader title={'Female form:'} />
              <CardMedia
                component="img"
                sx={{
                  margin: '0 auto',
                  width: '100%',
                }}
                image={sprites.front_female}
                alt={pokemonName}
              />
            </Card>
          ) : (
            <div></div>
          )}
        </Grid2>

        <Grid2 size={4}>
          {sprites.front_shiny ? (
            <Card
              sx={{
                maxWidth: 200,
                margin: '0 auto',
              }}
            >
              <CardHeader title={'Shiny form:'} />
              <CardMedia
                component="img"
                sx={{
                  margin: '0 auto',
                  objectFit: 'cover',
                  width: '100%',
                }}
                image={sprites.front_shiny}
                alt={pokemonName}
              />
            </Card>
          ) : (
            <div></div>
          )}
        </Grid2>
        <Grid2 size={4}>
          {sprites.front_shiny_female ? (
            <Card
              sx={{
                maxWidth: 200,
                margin: '0 auto',
              }}
            >
              <CardHeader title={'Female Shiny form:'} />
              <CardMedia
                component="img"
                sx={{
                  margin: '0 auto',
                  objectFit: 'cover',
                  width: '100%',
                }}
                image={sprites.front_shiny_female}
                alt={pokemonName}
              />
            </Card>
          ) : (
            <div></div>
          )}
        </Grid2>
      </Grid2>
    </>
  );
};

export default PokemonForms;
