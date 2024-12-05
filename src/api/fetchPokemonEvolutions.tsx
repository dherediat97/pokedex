import { baseUrlImg } from '../app/app_urls';
import { PokemonEvolution, PokemonEvolutionResponse } from '../types/types';

import { capitalize } from '../utils/utils';

export async function fetchPokemonEvolution(
  evolutionChain: string
): Promise<PokemonEvolution> {
  const response = await fetch(evolutionChain);

  if (!response.ok) {
    throw new Error('Failed to fetch pokemons evolutions');
  }
  const responseEvolutions =
    (await response.json()) as PokemonEvolutionResponse;

  if (
    responseEvolutions.chain.evolves_to.length == 0 ||
    responseEvolutions.chain.evolves_to[0].evolves_to.length == 0
  )
    return {
      firstEvolutionId: '',
      firstEvolutionImgSrc: '',
      firstEvolutionName: '',
      pokemonId: '',
      pokemonImgSrc: '',
      pokemonName: '',
      secondEvolutionId: '',
      secondEvolutionImgSrc: '',
      secondEvolutionName: '',
    };

  const pokemonId = responseEvolutions.chain.species.url.split('/')[6];
  const firstEvolutionId =
    responseEvolutions.chain.evolves_to.length > 0
      ? responseEvolutions.chain.evolves_to[0].species.url.split('/')[6]
      : '';
  const secondEvolutionId =
    responseEvolutions.chain.evolves_to.length > 0
      ? responseEvolutions.chain.evolves_to[0].evolves_to[0].species.url.split(
          '/'
        )[6]
      : '';

  const pokemonEvolution = {
    pokemonId: pokemonId,
    firstEvolutionId: firstEvolutionId,
    secondEvolutionId: secondEvolutionId,

    pokemonImgSrc: `${baseUrlImg}/${pokemonId}.png`,
    firstEvolutionImgSrc:
      responseEvolutions.chain.evolves_to.length > 0
        ? `${baseUrlImg}/${firstEvolutionId}.png`
        : '',
    secondEvolutionImgSrc:
      responseEvolutions.chain.evolves_to[0].evolves_to.length > 0
        ? `${baseUrlImg}/${secondEvolutionId}.png`
        : '',
    pokemonName: responseEvolutions.chain.species.name,
    firstEvolutionName:
      responseEvolutions.chain.evolves_to.length > 0
        ? `${responseEvolutions.chain.evolves_to[0].species.name}`
        : '',
    secondEvolutionName:
      responseEvolutions.chain.evolves_to[0].evolves_to.length > 0
        ? `${responseEvolutions.chain.evolves_to[0].evolves_to[0].species.name}`
        : '',
  };

  return pokemonEvolution;
}
