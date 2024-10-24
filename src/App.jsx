import './App.css';
import { AppHeader, CreateProposalPage } from '@components';
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
    MuiChip: {
      styleOverrides: {
        outlined: {
         borderWidth: 2
        }
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: 2, // Increase the border width
            },
          },
        }
      }
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <CreateProposalPage />
    </ThemeProvider>
  );
}

export default App;
