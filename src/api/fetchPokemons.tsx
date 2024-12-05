import { baseUrlGetPokemons, baseUrlImg } from '../app/app_urls';
import { Pokemon, PokemonResponse } from '../types/types';

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
      imgSrc: `${baseUrlImg}/${index + 1}.png`,
    })
  );

  responsePokemons.results = pokemons.filter(
    (pokemon: any, index: number) =>
      pokemons.findIndex((other: any) => other.id === pokemon.id) === index
  );

  return responsePokemons;
}
