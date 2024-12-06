import { Card, CardActionArea, CardHeader, CardMedia } from '@mui/material';

type PokemonFormProps = {
  imgSrc: string;
  pokemonName: string;
  formName: string;
};

const PokemonForm = ({ imgSrc, pokemonName, formName }: PokemonFormProps) => {
  if (imgSrc == null)
    imgSrc =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/0.png';

  return (
    <>
      <Card
        sx={{
          width: 340,
          margin: '0 auto',
          textAlign: 'center',
          fontWeight: 'bold',
          // background: 'linear-gradient(to right bottom, #20b49c, #106a59)',
          color: '#fff',
        }}
      >
        <CardActionArea LinkComponent={'a'} href={`/pokemons/${pokemonName}`}>
          <CardHeader title={formName} sx={{ textAlign: 'center' }} />
          <CardMedia
            component="img"
            sx={{
              maxHeight: 100,
              objectFit: 'scale-down',
            }}
            image={imgSrc}
            alt={`${pokemonName} ${formName}`}
          />
        </CardActionArea>
      </Card>
    </>
  );
};

export default PokemonForm;
