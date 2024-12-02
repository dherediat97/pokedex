import { baseUrlGetPokemons } from '../app/app_urls';
import { PokemonDetails, PokemonSpecie } from '../types/types';

export async function fetchPokemon(name: string): Promise<PokemonDetails> {
  const response = await fetch(`${baseUrlGetPokemons}/pokemon/${name}`);

  if (!response.ok) {
    throw new Error(`Error fetching ${name}`);
  }

  const pokemon = (await response.json()) as PokemonDetails;

  return pokemon;
}

export async function fetchPokemonSpecie(name: string): Promise<PokemonSpecie> {
  const response = await fetch(`${baseUrlGetPokemons}/pokemon-species/${name}`);

  if (!response.ok) {
    throw new Error(`Error fetching specie ${name}`);
  }

  const pokemonSpecie = (await response.json()) as PokemonSpecie;

  return pokemonSpecie;
}
