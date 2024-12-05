import { Box, Grid2 } from '@mui/material';
import { PokemonEvolution } from '../types/types';
import PokemonForm from './PokemonForm';
import { capitalize } from '../utils/utils';

type PokemonEvolutionsProps = {
  evolutions: PokemonEvolution;
};

const PokemonEvolutions = ({ evolutions }: PokemonEvolutionsProps) => {
  return (
    <>
      <Grid2 container spacing={12}>
        <Box>
          <PokemonForm
            formName={`${capitalize(evolutions.pokemonName)} Evolution`}
            pokemonName={evolutions.pokemonName}
            imgSrc={evolutions.pokemonImgSrc}
          />
        </Box>

        {evolutions.firstEvolutionId ? (
          <Box>
            <PokemonForm
              formName={`${capitalize(
                evolutions.firstEvolutionName!
              )} Evolution`}
              pokemonName={evolutions.firstEvolutionName!}
              imgSrc={evolutions.firstEvolutionImgSrc!}
            />
          </Box>
        ) : (
          <></>
        )}

        {evolutions.secondEvolutionId ? (
          <Box>
            <PokemonForm
              formName={`${capitalize(
                evolutions.secondEvolutionName!
              )} Evolution`}
              pokemonName={evolutions.secondEvolutionName!}
              imgSrc={evolutions.secondEvolutionImgSrc!}
            />
          </Box>
        ) : (
          <></>
        )}
      </Grid2>
    </>
  );
};

export default PokemonEvolutions;
