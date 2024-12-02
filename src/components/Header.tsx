import { Box, TextField } from '@mui/material';

type HeaderProps = {
  query: string;
  setQuery: (query: string) => void;
};

const Header = ({ query, setQuery }: HeaderProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="10vh"
    >
      <TextField
        value={query}
        label="Search a Pokemon"
        onChange={(event) => setQuery(event?.target.value)}
      />
    </Box>
  );
};

export default Header;
