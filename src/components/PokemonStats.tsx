import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Stats } from '../types/types';

type StatsProp = {
  stats: Stats[];
};

const PokemonStats = ({ stats }: StatsProp) => {
  return (
    <>
      <Typography
        sx={{ paddingTop: 8, paddingBottom: 2 }}
        variant="h5"
        component="h5"
      >
        Base Statitics:
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Level</TableCell>
              <TableCell align="center">Health</TableCell>
              <TableCell align="center">Attack</TableCell>
              <TableCell align="center">Defense</TableCell>
              <TableCell align="center">Special Attack</TableCell>
              <TableCell align="center">Special Defense</TableCell>
              <TableCell align="center">Speed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">{stats[0].base_stat}</TableCell>
              <TableCell align="center">{stats[1].base_stat}</TableCell>
              <TableCell align="center">{stats[2].base_stat}</TableCell>
              <TableCell align="center">{stats[3].base_stat}</TableCell>
              <TableCell align="center">{stats[4].base_stat}</TableCell>
              <TableCell align="center">{stats[5].base_stat}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PokemonStats;
