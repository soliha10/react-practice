import styled, { css } from "styled-components";
import { ReactComponent as burger } from "../../assets/icons/hambarger.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as audio } from "../../assets/icons/voice-search.svg";
import { ReactComponent as video } from "../../assets/icons/create1.svg";
import { ReactComponent as menu } from "../../assets/icons/more.svg";
import { ReactComponent as call } from "../../assets/icons/create.svg";

const flexBox = css`
display: flex;
align-items: center;
justify-content: space-between;
`;
const iconWidHe = css`
width: 22px;
height: 22px;
`;

const mainColor = css`
background-color: #181818;
color: #d9d9d9;
`;

export const Icons = styled.div``;
Icons.Burger = styled(burger)`
width: 24px;
height: 24px;
`;

Icons.Logo = styled.img`
width: 89px;
height:20px ;
`;

Icons.Search = styled(search)`
width: 60px;
height: 40px;
padding: 8px;
background-color: #323232;
border-top-right-radius: 25px;
border-bottom-right-radius: 25px;

`;

Icons.Audio = styled(audio)`
margin-left: 20px;
display: block;
`;

Icons.Video = styled(video)`
${iconWidHe}
`;

Icons.Menu = styled(menu)`
width: 20px;
height: 18px;

`;
Icons.Call = styled(call)`
${iconWidHe}
`;
Icons.Profil = styled.img`
width: 30px;
height: 30px;
`;

export const Container = styled.div `
display: flex;
align-items: center;
border: 1px solid black;
color: #d9d9d9;
background-color: #181818;
`;

export const Box= styled.div`
width: 160px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 20px;
`;

export const Wrapper  = styled.div`
max-width: 1200px;
width: 100%;
margin: 0 auto;
padding: 6px 20px 15px;
${flexBox}


`;

export const Category = styled.div`
${flexBox};
width: ${({icon})=> icon  && "164px"};
gap: ${({logo})=> logo  && "18px"};

`;

export const Input = styled.input`
width: 350px;
height: 40px;
padding-left: 16px;
${mainColor};
border: 1px solid #474747;
border-radius: 5px 0 0 5px;
`;



