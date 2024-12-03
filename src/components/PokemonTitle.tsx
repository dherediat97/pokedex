import { TranslateOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Name } from '../types/types';

type PokemonTitleProps = {
  pokemonTitles: Name[];
};

const PokemonTitle = ({ pokemonTitles }: PokemonTitleProps) => {
  var [translatedTitle, setTranslatedTitle] = useState('');
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

  useEffect(
    () =>
      setTranslatedTitle(
        pokemonTitles?.find((title) => title?.language.name == 'en')?.name!
      ),
    []
  );

  return (
    <>
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{ paddingTop: 8, paddingBottom: 4, paddingRight: 4 }}
        textAlign={'center'}
      >
        {translatedTitle}
        <IconButton
          sx={{ marginTop: 4, marginBottom: 4, marginLeft: 4 }}
          onClick={() => changePokemonTitle()}
        >
          <TranslateOutlined />
        </IconButton>
      </Typography>
    </>
  );
};

export default PokemonTitle;
