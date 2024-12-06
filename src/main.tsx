import { createRoot } from 'react-dom/client';

import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import PokeAppBar from './components/AppBar';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    {/* <PokeAppBar /> */}
    <App />
  </ThemeProvider>
);
