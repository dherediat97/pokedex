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
            formName={`${capitalize(evolutions.pokemonName)} evolution`}
            pokemonName={evolutions.pokemonName}
            imgSrc={evolutions.pokemonImgSrc}
          />
        </Box>

        {evolutions.firstEvolutionId != 0 ? (
          <Box>
            <PokemonForm
              formName={`${capitalize(
                evolutions.firstEvolutionName!
              )} evolution`}
              pokemonName={evolutions.firstEvolutionName!}
              imgSrc={evolutions.firstEvolutionImgSrc!}
            />
          </Box>
        ) : (
          <></>
        )}

        {evolutions.secondEvolutionId != 0 ? (
          <Box>
            <PokemonForm
              formName={`${capitalize(
                evolutions.secondEvolutionName!
              )} evolution`}
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
