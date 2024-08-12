import styled, {css} from "styled-components";
const flexCenter = css`
/* align-items:center; */
`;

export const Container = styled.div`
display: ${({flex}) => flex && "flex"};
${flexCenter};
`