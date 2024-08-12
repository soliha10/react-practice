import React, { Component } from "react";
import {
  Container,
  Wrapper,
  Items,
  MainImg,
  Channel,
  Inner,
  Desc,
  Title,
  Box,
  Content,
  Views,
  Day,
  Cardineer,
  Deletebtn,
} from "./style";

export default class Youtube extends Component {
  render() {

    const { onDelete, data } = this.props;
    
    
    return (

      <Container>
        <Wrapper>
          <Cardineer>
            {data.length && (
              data.map(({ id, title, dasc, views, day, main_img, channel }) => {
                return (
                  
                  <Items key={id}>
                    <MainImg src={main_img} alt={title} />
                    <Inner>
                      <Channel src={channel} alt="channel" />
                      <Box flex="true">
                        <Desc>{dasc}</Desc>
                        <Title>{title}</Title>
                        <Content>
                          <Views>{views}M view +</Views>
                          <Day>{day} days ago</Day>
                          <Deletebtn onClick={() => onDelete(id)} > Delete</Deletebtn>
                        </Content>
                      </Box>
                    </Inner>
                  </Items>
                );
              })
            ) 
            // : (
            //   <h1>No Data</h1>
            // )
            }
          </Cardineer>
        </Wrapper>
      </Container>
    )
  }
}