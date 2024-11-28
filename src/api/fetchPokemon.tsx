import { baseUrlGetPokemons, baseUrlImg } from '../app/app_urls';
import { PokemonDetails } from '../types/types';
import { formatName } from '../utils/utils';

export async function fetchPokemon(name: string): Promise<PokemonDetails> {
  const response = await fetch(`${baseUrlGetPokemons}/pokemon/${name}`);

  if (!response.ok) {
    throw new Error(`Error fetching ${name}`);
  }

  const result = await response.json();
  console.log(result);

  const pokemon = {
    name: result.name,
    id: result.id,
    sprites: result.sprites,
    defaultFrontImg: `${baseUrlImg}/${formatName(
      result.name.toLowerCase()
    )}.png`,
    defaultBackImg: `${baseUrlImg}/${formatName(
      result.name.toLowerCase()
    )}.png`,
    stats: result.stats,
  };

  return pokemon;
}
