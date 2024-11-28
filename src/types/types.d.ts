export type Pokemon = {
  name: string;
  id: string;
  imgSrc: string;
};

export type PokemonDetails = {
  name: string;
  id: string;
  defaultFrontImg: string;
  defaultBackImg: string;
  sprites: Sprites;
  stats: Stats[];
};

export type Sprites = {
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
