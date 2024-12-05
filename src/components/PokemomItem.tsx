import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Pokemon } from '../types/types';
import { capitalize } from '../utils/utils';

type PokemonItemProps = {
  pokemon: Pokemon;
};

const PokemonItem = ({ pokemon }: PokemonItemProps) => {
  return (
    <CardActionArea LinkComponent={'a'} href={`pokemons/${pokemon.name}`}>
      <Card
        elevation={10}
        sx={{
          width: 180,
          height: 200,
          paddingBottom: 4,
        }}
      >
        <CardMedia
          component="img"
          alt={pokemon.name}
          sx={{
            height: 100,
            paddingTop: 12,
            paddingBottom: 12,
            objectFit: 'scale-down',
          }}
          image={pokemon.imgSrc}
        ></CardMedia>
        <CardContent
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            background: 'linear-gradient(to right bottom, #20b49c, #106a59)',
            color: '#fff',
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            sx={{ fontSize: '16px' }}
          >
            {capitalize(pokemon.name)}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default PokemonItem;
