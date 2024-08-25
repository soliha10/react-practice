import React, { useState } from "react";

const Hooks =(props)=> {
  const [students, setStudents]= useState([
    {id:1, name:"eshmat", surname:"eshmatov"},
    {id:2, name:"toshmat", surname:"toshmatov"},
    {id:3, name:"gulmat", surname:"gulmatov"},
    {id:4, name:"holmat", surname:"holmatov"},
    {id:5, name:"bekmat", surname:"bekmatov"},
  ]);
  return (
    <div>
      <h1>Students list {students.length}</h1>
      {students.map((student)=>{
        return <h1 key={student.id}>name: {student.name}</h1>
      })}
    </div>
  )
}
export default Hooks;