import React from "react";
// import "../styles/EmployeeDetails.css";

function EmployeeDetails(props) {
  return (
    <tr>
      <td>
        <img alt={props.firstName} className="img-fluid" src={props.photo} style={{ margin: "0 auto" }} />
      </td>
      <td>{props.firstName} {props.LastName}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.birthDate}</td>
    </tr>
  );
}

export default EmployeeDetails;
