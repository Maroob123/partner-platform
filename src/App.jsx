import './App.css';
import { AppHeader, CreateProposal } from '@components';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#24558f",
      contrastText: '#fff',
    },
    secondary: {
      main: "#f5f5f5",
      contrastText: '#000',
    },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderWidth: 2,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <CreateProposal />
    </ThemeProvider>
  );
}

export default App;
