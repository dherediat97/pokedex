import { baseUrlImg } from '../app/app_urls';
import { PokemonEvolution, PokemonEvolutionResponse } from '../types/types';

export async function fetchPokemonEvolution(
  evolutionChain: string
): Promise<PokemonEvolution | undefined> {
  const response = await fetch(evolutionChain);
  var pokemonEvolution;
  try {
    if (!response.ok) {
      throw new Error('Failed to fetch pokemons evolutions');
    }
    const responseEvolutions = await response.json();

    const pokemonId = responseEvolutions.chain.species.url.split('/')[6];
    const firstEvolutionId =
      responseEvolutions.chain.evolves_to[0].species.url.split('/')[6];
    const secondEvolutionId =
      responseEvolutions.chain.evolves_to[0].evolves_to[0].species.url.split(
        '/'
      )[6];
    pokemonEvolution = {
      pokemonId: pokemonId,
      firstEvolutionId: firstEvolutionId,
      secondEvolutionId: secondEvolutionId,

      pokemonImgSrc: `${baseUrlImg}/${pokemonId}.png`,
      firstEvolutionImgSrc: `${baseUrlImg}/${firstEvolutionId}.png`,
      secondEvolutionImgSrc: `${baseUrlImg}/${secondEvolutionId}.png`,
      pokemonName: responseEvolutions.chain.species.name,
      firstEvolutionName: `${responseEvolutions.chain.evolves_to[0].species.name}`,
      secondEvolutionName: `${responseEvolutions.chain.evolves_to[0].evolves_to[0].species.name}`,
    };
  } catch (ex) {
    return undefined;
  }

  return pokemonEvolution;
}
