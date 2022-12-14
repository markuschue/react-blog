import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#222831',
      dark: '#000000',
      light: '#393E46',
    },
    secondary: {
      main: '#393E46',
      dark: '#222831',
    },
    background: {
      paper: '#222831',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#bdbdbd',
    },
    custom: {
      main: '#4E9F3D',
      light: '#D8E9A8',
      dark: '#1E5128',
      contrastText: '#59CE8F',
    }
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        light: {
          backgroundColor: '#bdbdbd',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#bdbdbd',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#bdbdbd',
              color: 'white',
            },
          }
        }
      }
    }
  }
});

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;