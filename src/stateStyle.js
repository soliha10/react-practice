import styled,{css} from "styled-components";


export const Container = styled.div`
  margin: 20px;
`;

const getSize = (props) => {
  switch (props.type) {
    case "large":
      return "200px";
    case "medium":
      return "150px";
    case "small":
      return "100px";
    default:
      return "150px"
  }
};

export const Box = styled.div`
display: flex;
align-items: start;
justify-content: center;
font-size: 20px;
width: ${getSize};
height: ${getSize};
border: 2px solid blue;
margin: 10px;
`;

const common = css`
display: flex;
align-items: center;
justify-content: center;
color: white;
margin: 10px;
width: 200px;
height: 40px;
background-color: coral;
border-radius: 8px;
cursor: pointer;
:active {
  transform: scale(0.97);
  opacity: 0.7;
}
`;

export const Button = styled.div`
${common}
`;
export const ActiveButton = styled.div`
${common};
height: 50px;
`;
