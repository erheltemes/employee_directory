import React from "react";
import "../styles/TableHeader.css";

function TableHeader(props) {
  return (
    <table>
      <tr className="table-head">
        <th>ProfilePicture</th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Birthdate</th>
      </tr>
    </table>
  );
}

export default TableHeader;