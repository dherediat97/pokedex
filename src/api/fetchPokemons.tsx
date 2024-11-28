import { baseUrlGetPokemons, baseUrlImg } from '../app/app_urls';
import { Pokemon } from '../types/types';
import { formatName } from '../utils/utils';

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch(`${baseUrlGetPokemons}/pokemon?limit=151`);

  if (!response.ok) {
    throw new Error('Failed to fetch pokemons');
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
