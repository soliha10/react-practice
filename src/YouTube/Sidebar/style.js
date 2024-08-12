import styled, {css} from "styled-components";

const flexBox =css`
display: flex;
justify-content: space-between;
align-items: center;
`

export const Container = styled.div`
max-width: 228px;
width: 100%;
height: 100vh;
overflow-y: auto;
background-color: #212121;
scrollbar-width: thin;
scrollbar-color: #999 transparent;
`;
export const Wrapper = styled.div`
width: 200px;
border-bottom: 2px solid #383838;
color: white;
padding-block: 16px;
`;

export const Box = styled.div`
${flexBox};
margin-left: 10px;
padding-left:10px;
&:hover{
  cursor: pointer;
  border-radius:10px;
  background-color:#383838;
}
`;

export const Titles = styled.h4`
width: 200px;
padding: 10px 20px;
font-family: "Roboto";
font-size: 14px;
line-height: 20px;
font-size: ${({title})=> title && "16px"};
color: ${({ title }) => (title && "#AAAAAA")};
`;