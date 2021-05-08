import React, { Component } from "react";
import "../styles.css"
import EmployeeDetails from "./EmployeeDetails";
import API from "../utils/API";

class Display extends Component {
  state = {
    employees: [],
    //used to reference while filtering
    resultsSave: [],
    search: ""
  };

  componentDidMount() {
    this.fetchEmployees()
  }

  fetchEmployees = () => {
    API.search()
      .then(res => {
        this.setState({
          employees: res.data.results,
          resultsSave: res.data.results,
        })
      })
      .catch(err => console.log(err));
  };

  employeeFilter = (event) => {
    const search = event.target.value.toLowerCase()
    if (!search.length) {
      this.setState({employees: this.state.resultsSave})
    } else {

      let filteredEmployees = [] 

      this.state.resultsSave.forEach(employee => {
        if (employee.name.first.toLowerCase().includes(search) || employee.name.last.toLowerCase().includes(search)) {
          filteredEmployees.push(employee)
        }
      })

      this.setState({employees: filteredEmployees})
    }
  }

  sortAlphabetically = () => {
    this.setState({
      employees: this.state.employees.sort(function (a, b){
        let nameA = a.name.last.toLowerCase()
        let nameB = b.name.last.toLowerCase()
        if (nameA < nameB) return -1 
        if (nameA > nameB) return 1
        return 0 
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Employee Directory</h1>
        <div className="search-bar">
          <label>Search:</label>
          <input name="search" id="serach-input" onChange={this.employeeFilter}></input>
        </div>
        <table>
          <thead>
            <tr className="table-head">
              <th>ProfilePicture</th>
              <th>Name
                <button onClick={this.sortAlphabetically}>Sort By Last Name</button>
              </th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Birthdate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee, index) => (
                  <EmployeeDetails
                    key={index}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    birthDate={employee.dob.date}
                    photo={employee.picture.medium}
                  />
                ))} 
          </tbody>
        </table>

      </div>
    );
  }
}

export default Display;
