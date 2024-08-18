import React, { useState, useReducer } from "react";

const Hooks = (props) => {
  const [count, setCount] = useState(0);
  const [option, setOption] = useState(1);
  const [name, setName] = useState("PDP");

  const reducer = (state, action) => {
    switch (action.type) {
      case "plus":
        return state + 1;

      case "minus":
        return state - 1;
      case "byamount":
        return state + action.payload;
      case "subtractamount":
        return state - action.payload;
      default:
        return state;
    }
  };

  const [counter, dispatch] = useReducer(reducer, 0);
  const onSelect = (e) => {
    console.log(e.target.value);
    setOption(Number(e.target.value));

  }



  // const [counter, dispatch] = useReducer((state, action) => {
  //   // console.log(state, action);

  //   switch (action.type){
  //     case "plus":
  //       return state+1;

  //     case "minus":
  //       return state-1;
  //     case "byamount":
  //       return state+ action.payload;
  //     default:
  //       return state;
  //   }

  // }, 0);


  // const [data, setData] = useState({
  //   count:0,
  //   name:"PDP",
  // });

  // case 1
  //   useEffect(()=> {
  //     console.log("case1");

  //   });
  //   useEffect(()=> {
  //     console.log("case2");

  //   },[]);
  //   useEffect(()=> {
  // setCount(props.count);  
  //   }, [props.count]);

  //   useEffect(()=> {
  //     console.log("case4");

  //   }, [name, count]);


  return (
    <div style={{ flex: 1 }}>
      <h1>hooks component</h1>
      <h1>count: {count}</h1>
      <h1>counter: {counter}</h1>
      <button className="mr-3" onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>

      <select className="m-4" defaultValue={1} name="" id="" onChange={onSelect}>

        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button className="mr-4" onClick={() => dispatch({ type: "byamount", payload: option })}>Add {option}</button>
      <button onClick={() => dispatch({ type: "subtractamount", payload: option })}>
        Subtract {option}
      </button>


      <input className="block" type="text" value={name} onChange={({ target }) => setName(target.value)} />


      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>

    </div>
  );
};

export default Hooks;