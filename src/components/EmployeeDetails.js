import React from "react";
// import "../styles/EmployeeDetails.css";




function EmployeeDetails(props) {
  return (
    <tr>
      <td>
        <img alt={props.firstName} className="img-fluid" src={props.photo} style={{ margin: "0 auto" }} />
      </td>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.birthDate.slice(0,10)}</td>
    </tr>
  );
}

export default EmployeeDetails;
