// import React, { Component } from "react";
// import { sidebar } from "../../utils/sidebar";
// import { Container, Titles, Wrapper, Box } from "./style";


// export default class Youtube extends Component {
//   render() {
//     console.log(sidebar);
    
//     return (

//       <Container>
//         {
//           sidebar.map(({ id, title, data }) => {
//             <Wrapper key={id}>
//               {title && <Titles title>{title}</Titles>}
//               {data.map(({ icon: Icon, title }) => {
//                 return (
//                   <Box>
//                     <Icon />
//                     <Titles>{title}</Titles>
//                   </Box>
//                 )
//               })}


//             </Wrapper>
//           })
//         }
//       </Container>
//     )
//   }
// }

import React, { Component } from "react";
import { sidebar } from "../../utils/sidebar";
import { Container, Titles, Wrapper, Box } from "./style";

export default class Youtube extends Component {
  render() {
    return (
      <Container>
        {sidebar.map(({ id, title, data }) => (
          <Wrapper key={id}>
            {title && <Titles title>{title}</Titles>}
            {data.map(({ icon: Icon, title }, index) => (
              <Box key={index}>
                <Icon />
                <Titles>{title}</Titles>
              </Box>
            ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
}
