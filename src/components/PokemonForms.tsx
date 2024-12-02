import { Grid2, Typography } from '@mui/material';
import { Sprites } from '../types/types';
import PokemonForm from './PokemonForm';

type PokemonFormsProps = {
  sprites: Sprites;
  pokemonName: string;
};

const PokemonForms = ({ sprites, pokemonName }: PokemonFormsProps) => {
  return (
    <>
      <Typography
        sx={{ paddingTop: 4, paddingBottom: 4 }}
        variant="h5"
        component="h5"
      >
        Forms:
      </Typography>
      <Grid2 container spacing={12}>
        <Grid2>
          <PokemonForm
            formName="Default Form"
            pokemonName={pokemonName}
            imgSrc={sprites.front_default}
          />
        </Grid2>

        <Grid2>
          <PokemonForm
            formName="Female Form"
            pokemonName={pokemonName}
            imgSrc={sprites.front_female}
          />
        </Grid2>

        <Grid2>
          <PokemonForm
            formName="Shiny Form"
            pokemonName={pokemonName}
            imgSrc={sprites.front_shiny}
          />
        </Grid2>
        <Grid2>
          <PokemonForm
            formName="Female Shiny Form"
            pokemonName={pokemonName}
            imgSrc={sprites.front_shiny_female}
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default PokemonForms;
