import React, { act } from "react";
import { students } from "./students";
// CRUD
class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: students,
      name: "",
      age: "",
      address: "",
      status: "",
      nikname: "",
      univ: "",
      job: "",
      title: "",
      count: 1,
      active: null,
    };
  }
  render() {
    let data = this.state.data;
    let need = this.state;

    const onChange = (evt) => {
      this.setState({ [evt.target.name]: evt.target.value });
    }

    const onFilter = (evt) => {
      console.log(evt.target.value);
      const reg = new RegExp(evt.target.value, "gi");
      let res = students.filter((value) => value.name.match(reg));
      this.setState({
        data: res,
      });

    };


    
    const onAdd = () => {
      const user = {
        id: this.state.data.length + 1,
        name: this.state.name,
        age: this.state.age,
        address: this.state.address,
        status: this.state.status,
        nikname: this.state.nikname,
        univ: this.state.univ,
        job: this.state.job,
      }
      this.setState({
        data: [...this.state.data, user],
        name: "",
        age: "",
        address: "",
        status: "",
        nikname: "",
        univ: "",
        job: "",
      })
    }


    const onDelete = (id) => {
      const res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res })
    };


    const onEdit = ({ id, name, age }, isSave) => {

      if (isSave) {
        let res = need.data.map((value) => value.id === need.active.id
          ? { ...value, name: need.name, age: need.age }
          : value)

        this.setState({ active: null, data: res });
      }
      else {
        this.setState({
          name: name,
          age: age,
          active: { id, name, age }
        })
      }
    }

    return (
      <>
        <div className="container max-w-[1320px]">
          <div className="mt-8 mb-3">
            {/* Read search */}
            <div>
              <input onChange={onFilter}
                // onChange={onSearch}
                className="w-[300px] p-2 border rounded-md outline-none"
                type="text"
                placeholder="Search..."
              />
              <button className="p-2 border rounded-md ml-4">Search</button>
            </div>
            {/* Creat */}
            <div className="mt-10 flex items-center justify-center flex-wrap gap-5">
              <input
                onChange={onChange}
                name="name"
                value={this.state.name}
                className="p-2 border rounded-md"
                type="text"
                placeholder="name"
              />
              <input
                onChange={onChange}
                name="age"
                value={this.state.age}
                className="p-2 border rounded-md"
                type="number"
                placeholder="age"
              />
              <input
                onChange={onChange}
                name="address"
                value={this.state.address}
                className="p-2 border rounded-md"
                type="text"
                placeholder="address"
              />
              <input
                onChange={onChange}
                name="status"
                value={this.state.status}
                className="p-2 border rounded-md"
                type="text"
                placeholder="status"
              />
              <input
                onChange={onChange}
                name="nikname"
                value={this.state.nikname}
                className="p-2 border rounded-md"
                type="text"
                placeholder="nikname"
              />
              <input
                onChange={onChange}
                name="univ"
                value={this.state.univ}
                className="p-2 border rounded-md"
                type="text"
                placeholder="univ"
              />
              <input
                onChange={onChange}
                name="job"
                value={this.state.job}
                className="p-2 border rounded-md"
                type="text"
                placeholder="job"
              />
              <button onClick={onAdd} className="border p-2 px-4 rounded-md">
                Add
                {/* {this.state.active?.id === this.state.data.id ? "Add" : "Save"} */}
              </button>
            </div>
          </div>
          <div className="mt-2 p-4 rounded-md border">
            <table className="min-w-full ">
              <thead className="bg-[#F5F5F5] text-black">
                <tr>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    ID
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    NAME
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    AGE
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">

                    ADDRESS
                  </th>
                  <th scope="col" className="text-sm   px-6 py-4 text-left">
                    STATUS
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    NICKNAME
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    UNIV
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    JOB
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    EDIT
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    DELETE
                  </th>
                </tr>
              </thead>
              {this.state.data.length ? (
                data.map(
                  ({ id, name, age, address, status, nikname, univ, job }) => {
                    return (
                      <tbody key={id}>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-[#F5F5F5] hover:cursor-pointer">
                          <td className="px-6 py-2 whitespace-nowrap text-sm  text-gray-900">
                            {id}
                          </td>
                          <td className="text-sm px-6 py-2 whitespace-nowrap">
                            {" "}
                            {need.active?.id === id ? (
                              <input onChange={onChange} value={need.name} type="text" name="name"/>
                            ) : (
                              name
                            )}
                          </td>
                          <td className="text-sm px-6 py-2 whitespace-nowrap">
                            {" "}
                            {need.active?.id === id ? (
                              <input onChange={onChange} value={need.age} type="number" name="age" />
                            ) : (
                              age
                            )}
                          </td>
                          <td className="text-sm px-6 py-2 whitespace-nowrap">
                            {address}
                          </td>
                          <td className="text-sm px-6 py-2 whitespace-nowrap">
                            {status}
                          </td>
                          <td className="text-sm px-6 py-2 whitespace-nowrap">
                            {nikname}
                          </td>
                          <td className="text-sm px-6 py-2 whitespace-nowrap">
                            {univ}
                          </td>
                          <td className="text-sm px-6 py-2 whitespace-nowrap">
                            {job}
                          </td>
                          <td className="text-sm px-6 py-2 whitespace-nowrap">
                            <button onClick={() => onEdit({ id, name, age }, need.active?.id === id)} className="p-2 text-blue-500 hover:bg-white rounded-md">
                              {need.active?.id === id ? "save" : "edit"}
                            </button>
                          </td>
                          <td className="text-sm px-6 py-2 whitespace-nowrap">
                            <button
                              onClick={() => onDelete(id)}
                              className="text-red-500 p-2 hover:bg-white rounded-md"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  }
                )
              ) : (
                <tr>
                  <th colSpan={10}>
                    <h1 className="mt-3 text-2xl">No data</h1>
                  </th>
                </tr>
              )}
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Crud;
