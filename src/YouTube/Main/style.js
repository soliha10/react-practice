import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  overflow-y: auto;
scrollbar-width: thin;
scrollbar-color: #999 transparent;
  background-color: #f9f9f9;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Cardineer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const Items = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  width: 100%;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const MainImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Inner = styled.div`
  display: flex;
  padding: 10px;
`;

export const Channel = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? 'column' : 'row')};
  justify-content: space-between;
  width: 100%;
`;

export const Desc = styled.p`
  color: #606060;
  font-size: 14px;
  margin: 5px 0;
`;

export const Title = styled.h3`
  color: #111;
  font-size: 18px;
  margin: 5px 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Views = styled.span`
  color: #606060;
  font-size: 12px;
`;

export const Day = styled.span`
  color: #606060;
  font-size: 12px;
`;

export const Deletebtn = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #cc0000;
  }
`;
