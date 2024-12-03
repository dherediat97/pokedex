export type Pokemon = {
  name: string;
  id: number;
  imgSrc: string;
  secondaryImgSrc: string;
};

export type PokemonResponse = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

export type PokemonDetails = {
  name: string;
  id: string;
  sprites: Sprites;
  stats: Stats[];
};

export type Sprites = {
  front_default: string;
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

export type Stats = {
  base_stat: number;
};

export type PokemonEvolution = {
  id: number;
  baby_trigger_item: number;
  chain: EvolutionChain;
};

export type PokemonSpecie = {
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: Color[];
  evolution_chain: EvolutionChainRequest;
  evolves_from_species: Color;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: Color;
  growth_rate: Color;
  habitat: Color;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: Color;
  varieties: Variety[];
};

export type Color = {
  name: string;
  url: string;
};

export type EvolutionChainUrl = {
  url: string;
};

export type EvolutionChain = {
  is_baby: boolean;
  species: Species;
  evolution_details: EvolutionDetail[] | null;
  evolves_to: EvolutionChain[];
};

export type EvolutionDetail = {
  item: null;
  trigger: Species;
  gender: null;
  held_item: null;
  known_move: null;
  known_move_type: null;
  location: null;
  min_level: number;
  min_happiness: null;
  min_beauty: null;
  min_affection: null;
  needs_overworld_rain: boolean;
  party_species: null;
  party_type: null;
  relative_physical_stats: null;
  time_of_day: string;
  trade_species: null;
  turn_upside_down: boolean;
};

export type Species = {
  name: string;
  url: string;
};

export type FlavorTextEntry = {
  flavor_text: string;
  language: Color;
  version: Color;
};

export type Genus = {
  genus: string;
  language: Color;
};

export type Name = {
  language: Color;
  name: string;
};

export type PalParkEncounter = {
  area: Color;
  base_score: number;
  rate: number;
};

export type PokedexNumber = {
  entry_number: number;
  pokedex: Color;
};

export type Variety = {
  is_default: boolean;
  pokemon: Color;
};
