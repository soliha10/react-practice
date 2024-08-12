import React, {Component} from "react";
import { Container} from "./style";
import Header from "./header"
import Main from "./Main";
import Sidebar from "./Sidebar";
import {Data} from "../utils/mock";

export default class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:Data,
    };
  }
  render() {
let data = this.state.data;

const onDelete = (id)=>{
  let res = data.filter((value)=> value.id !== id);
  this.setState({data:res});
};

const onFilter = (evt) => {
  console.log(evt.target.value.toLowerCase());
  
  let searchTerm = evt.target.value.toLowerCase();
  let res = Data.filter((item) => item.dasc && item.dasc.toLowerCase().includes(searchTerm));
  this.setState({ data: res });
};
// this.onFilter = this.onFilter.bind(this);


    return(

      
      <Container>
        <Header onFilter={onFilter}/>

        <Container flex="true">
          <Sidebar/>
          <Main onDelete={onDelete} data={data}/>
        </Container>
    </Container>
    )
  }
}
