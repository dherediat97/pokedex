import {
  Card,
  CardActionArea,
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
      <Grid2 container spacing={2}>
        <Grid2 size={4}>
          {sprites.front_female ? (
            <Card
              sx={{
                width: 340,
                margin: '0 auto',
              }}
            >
              <CardActionArea>
                <CardHeader
                  title={'Female form'}
                  sx={{ textAlign: 'center' }}
                />
                <CardMedia
                  component="img"
                  sx={{
                    height: 100,
                    marginTop: 4,
                    marginBottom: 4,
                    objectFit: 'scale-down',
                  }}
                  image={sprites.front_female}
                  alt={pokemonName}
                />
              </CardActionArea>
            </Card>
          ) : (
            <div></div>
          )}
        </Grid2>

        <Grid2 size={4}>
          {sprites.front_shiny ? (
            <Card
              sx={{
                width: 340,
                margin: '0 auto',
              }}
            >
              <CardActionArea>
                <CardHeader title={'Shiny form'} sx={{ textAlign: 'center' }} />
                <CardMedia
                  component="img"
                  sx={{
                    height: 100,
                    marginTop: 4,
                    marginBottom: 4,
                    objectFit: 'contain',
                  }}
                  image={sprites.front_shiny}
                  alt={pokemonName}
                />
              </CardActionArea>
            </Card>
          ) : (
            <div></div>
          )}
        </Grid2>
        <Grid2 size={4}>
          {sprites.front_shiny_female ? (
            <Card
              sx={{
                width: 340,
                margin: '0 auto',
              }}
            >
              <CardActionArea>
                <CardHeader
                  title={'Female Shiny form'}
                  sx={{ textAlign: 'center' }}
                />
                <CardMedia
                  component="img"
                  sx={{
                    height: 100,
                    marginTop: 4,
                    marginBottom: 4,
                    objectFit: 'scale-down',
                  }}
                  image={sprites.front_shiny_female}
                  alt={pokemonName}
                />
              </CardActionArea>
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
