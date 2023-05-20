import { ThemeProvider } from '@mui/material';
import { Simulator } from './pages/Simulator';
import { theme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Simulator />
    </ThemeProvider>
  );
}

export default App;
