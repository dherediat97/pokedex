import { TranslateOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Name } from '../types/types';

type PokemonTitleProps = {
  pokemonTitles: Name[];
};

const PokemonTitle = ({ pokemonTitles }: PokemonTitleProps) => {
  const [translatedTitle, setTranslatedTitle] = useState(
    pokemonTitles.find((title) => title?.language.name == 'en')?.name
  );
  var [titleIndex, setTitleIndex] = useState(0);

  async function changePokemonTitle() {
    if (titleIndex == pokemonTitles.length) {
      setTitleIndex(0);
      return;
    }
    setTranslatedTitle(pokemonTitles[titleIndex].name);
    setTitleIndex(titleIndex++);
  }

  useEffect(() => {
    changePokemonTitle();
  }, [titleIndex]);

  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        alignContent={'center'}
        sx={{ paddingTop: 8, paddingBottom: 4, paddingRight: 4 }}
        textAlign={'center'}
      >
        {translatedTitle}
        <IconButton
          sx={{ marginTop: 4, marginBottom: 4, marginLeft: 4 }}
          onClick={(event) => changePokemonTitle()}
        >
          <TranslateOutlined />
        </IconButton>
      </Typography>
    </>
  );
};

export default PokemonTitle;
