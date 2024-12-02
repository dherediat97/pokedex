import { TranslateOutlined } from '@mui/icons-material';
import { Icon, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { Name } from '../types/types';

type PokemonTitleProps = {
  pokemonTitles: Name[];
};

const PokemonTitle = ({ pokemonTitles }: PokemonTitleProps) => {
  const [translatedTitle, setTranslatedTitle] = useState();

  return (
    <>
      <Typography
        variant="h3"
        component="h3"
        sx={{ paddingTop: 8, paddingBottom: 4, paddingRight: 4 }}
        textAlign={'center'}
      >
        {pokemonTitles.find.name}
        {/* <IconButton onClick={(event) => setTranslatedTitle('')}>
          <TranslateOutlined />
        </IconButton> */}
      </Typography>
    </>
  );
};

export default PokemonTitle;
