import React, { Component } from "react";
import "../styles.css"
import EmployeeDetails from "./EmployeeDetails";
import API from "../utils/API";

class Display extends Component {
  state = {
    results: [],
    search: ""
  };

  componentDidMount() {
    this.fetchEmployees()
  }

  fetchEmployees = () => {
    API.search()
      .then(res => {
        console.log(res.data.results)
        this.setState({results: res.data.results})
      })
      .catch(err => console.log(err));
  };



  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <table>
          <tr className="table-head">
            <th>ProfilePicture</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Birthdate</th>
          </tr>
          {this.state.results.map(employee => (
                <EmployeeDetails
                  firstName={employee.name.first}
                  lastName={employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  birthDate={employee.dob.date}
                  photo={employee.picture.medium}
                />
              ))} 
        </table>

      </div>
    );
  }
}

export default Display;
