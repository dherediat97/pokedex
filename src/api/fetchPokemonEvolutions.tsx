import { baseUrlGetPokemons, baseUrlImg } from '../app/app_urls';
import { PokemonEvolution } from '../types/types';
import { formatName } from '../utils/utils';

export async function fetchPokemonEvolution(
  id: string
): Promise<PokemonEvolution[]> {
  const response = await fetch(`${baseUrlGetPokemons}/evolution-chain/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch pokemons evolutions');
  }

  const results = await response.json();

  const pokemons = results.results.map((pokemon: any, index: number) => ({
    name: pokemon.name,
    id: index,
    imgSrc: `${baseUrlImg}/${formatName(pokemon.name.toLowerCase())}.png`,
  }));

  return pokemons.filter(
    (pokemon: any, index: number) =>
      pokemons.findIndex((other: any) => other.id === pokemon.id) === index
  );
}
