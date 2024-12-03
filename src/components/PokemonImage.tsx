import { HTMLProps, ReactNode, useState } from 'react';

type ImgProps = HTMLProps<HTMLImageElement> & {
  fallback?: ReactNode;
};

export function PokemonImg(props: ImgProps) {
  const { fallback = null } = props;

  const [isBroken, setIsBroken] = useState(false);

  function handleError() {
    setIsBroken(true);
  }

  if (isBroken) {
    return fallback;
  }

  return <img onError={handleError} {...props} />;
}

export default PokemonImg;
