import { Box, Container, Grid2 } from '@mui/material';
import { PokemonEvolution } from '../types/types';
import PokemonForm from './PokemonForm';
import { baseUrlImg } from '../app/app_urls';
import { capitalize } from '../utils/utils';

type PokemonEvolutionsProps = {
  evolutions: PokemonEvolution;
};

const PokemonEvolutions = ({ evolutions }: PokemonEvolutionsProps) => {
  console.log(evolutions);
  return (
    <>
      <Grid2 container spacing={12}>
        {evolutions.chain.evolves_to.map((evolution, index) => (
          <Box key={index}>
            <PokemonForm
              formName={`${capitalize(evolution.species.name)} evolution`}
              pokemonName={evolution.species.name}
              imgSrc={`${baseUrlImg}/${evolution.species.name}.png`}
            />
          </Box>
        ))}
        {evolutions.chain.evolves_to[0].evolves_to.map((evolution, index) => (
          <Box key={index}>
            <PokemonForm
              formName={`${capitalize(evolution.species.name)} evolution`}
              pokemonName={evolution.species.name}
              imgSrc={`${baseUrlImg}/${evolution.species.name}.png`}
            />
          </Box>
        ))}
      </Grid2>
    </>
  );
};

export default PokemonEvolutions;
