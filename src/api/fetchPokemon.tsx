import { baseUrlGetPokemons } from '../app/app_urls';
import { PokemonDetails } from '../types/types';

export async function fetchPokemon(id: string): Promise<PokemonDetails> {
  const response = await fetch(`${baseUrlGetPokemons}${id}`);

  if (!response.ok) {
    throw new Error(`Error fetching ${id}`);
  }

  const result = await response.json();
  const pokemon = {
    name: result.name,
    id: result.id,
    imgSrc: result.sprites.front_default,
    hp: result.stats[0].base_stat,
    attack: result.stats[1].base_stat,
    defense: result.stats[2].base_stat,
  };

  return pokemon;
}
