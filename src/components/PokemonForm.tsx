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
        }}
      >
        <CardActionArea>
          <CardHeader title={formName} sx={{ textAlign: 'center' }} />
          <CardMedia
            component="img"
            sx={{
              height: 100,
              marginTop: 4,
              marginBottom: 4,
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
