import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {

  },
  typography: {
    htmlFontSize: '20px',
    useNextVariants: true,
  },
  overrides: {
    MuiTypography: { 
      root: { 
        color: 'white', 
        textAlign: 'center',
        fontFamily: 'turkish_another_typewriterRg',
      },
      body2: { 
        color: 'white', 
        fontFamily: 'turkish_another_typewriterRg',
      },
    },
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;