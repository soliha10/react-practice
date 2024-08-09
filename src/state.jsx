import React from "react";
import {Container, Box, Button, ActiveButton} from "./stateStyle";
import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.cl};
  }
`



class Student extends React.Component {
  state = {
    light: true,
  };

  toggleTheme = () => {
    this.setState((prevState) => ({
      light: !prevState.light,
    }));
  };

  render() {
    const theme = {
      bg: this.state.light ? "white" : "black",
      cl: this.state.light ? "black" : "white",
    };

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Box type="large">large</Box>
          <Box type="medium">medium</Box>
          <Box type="small">small</Box>
          <Button>click me</Button>
          <ActiveButton>Active btn</ActiveButton>

          <button onClick={this.toggleTheme}>Change Theme</button>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Student;