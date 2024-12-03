import { PokemonEvolution } from '../types/types';

export async function fetchPokemonEvolution(
  evolutionChain: string
): Promise<PokemonEvolution> {
  const response = await fetch(evolutionChain);

  if (!response.ok) {
    throw new Error('Failed to fetch pokemons evolutions');
  }
  const pokemonEvolution = await response.json();

  return pokemonEvolution;
}
