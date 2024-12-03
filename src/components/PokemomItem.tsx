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
          width: 170,
          paddingTop: 4,
        }}
      >
        <CardMedia
          component="img"
          alt={pokemon.name}
          sx={{
            margin: '0 auto',
            height: 100,
            paddingBottom: 4,
            objectFit: 'scale-down',
          }}
          onError={(e: any) => {
            e.target.src = pokemon.secondaryImgSrc;
            e.target.onerror = null;
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
