import { baseUrlGetPokemons, baseUrlImg } from '../app/app_urls';
import { Pokemon, PokemonResponse } from '../types/types';
import { formatName } from '../utils/utils';

export async function fetchPokemons(limit: number): Promise<PokemonResponse> {
  const response = await fetch(`${baseUrlGetPokemons}/pokemon?limit=${limit}`);

  if (!response.ok) {
    throw new Error('Failed to fetch pokemons');
  }

  const responsePokemons = (await response.json()) as PokemonResponse;
  const pokemons: Pokemon[] = responsePokemons.results.map(
    (pokemon: any, index: number) => ({
      name: pokemon.name,
      id: index + 1,
      imgSrc: `${baseUrlImg}/${formatName(pokemon.name.toLowerCase())}.png`,
    })
  );

  responsePokemons.results = pokemons.filter(
    (pokemon: any, index: number) =>
      pokemons.findIndex((other: any) => other.id === pokemon.id) === index
  );

  return responsePokemons;
}
