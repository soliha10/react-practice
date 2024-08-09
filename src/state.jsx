import React from "react";
import {Container, Box, Button, ActiveButton} from "./stateStyle";
import { createGlobalStyle, ThemeProvider } from "styled-components";
// class Student extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 1,
//       title: "webrain academy"
//     };
//   }

//   render() {
//     console.log("render");

//     const plus = () => {

//       if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
//     };
//     const minus = () => {

//       if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
//     };


//     const onChange = (event) => {
//       console.log(event.target.value);
//       this.setState({ title: event.target.value });
//     };

//     const onSelect = (e) => {

//       console.log(e.target.value);

//     };
//     const onCheck = (e) => {
//       console.log(e.target.checked);

//     };

//     return (
//       <div>
//         <h1 className="text-red-400">{this.state.title}</h1>
//         <h1>State {this.state.count}</h1>
//         <input type="text" onChange={onChange} placeholder="name" />
//         <select onChange={onSelect} name="" id="">
//           <option value="male">male</option>
//           <option value="female">female</option>
//         </select>
//         <input onChange={onCheck} type="checkbox" />
//         <button onClick={plus}>+</button>
//         <button onClick={minus}>-</button>

//       </div>
//     )
//   }
// }


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