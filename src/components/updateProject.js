import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class UpdateProject extends Component {

  render () {

    return (
      <div className="project">

          <div className="row left bold">
            <h5 className="black-text text-lighten-4">Update Program</h5>
          </div>
          <table className="highlight">
          <thead>
            <tr>
                <th className="black-text text-lighten-4">Program Name</th>
                <th className="black-text text-lighten-4">Number of Projects</th>
                <th className="black-text text-lighten-4">Program Manager</th>
                <th className="black-text text-lighten-4">Priority</th>
                <th className="black-text text-lighten-4">Status</th>
                <th className="black-text text-lighten-4">Complete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="black-text text-lighten-4">AppExtender</td>
              <td className="black-text text-lighten-4">10</td>
              <td className="black-text text-lighten-4">Alvin</td>
              <td className="black-text text-lighten-4">Medium</td>
              <td className="black-text text-lighten-4">WIP</td>
              <td className="black-text text-lighten-4">25%</td>
            </tr>
          </tbody>
          <div className="container">
            <br></br>
            <Link to="/" className="waves-effect waves-light btn-large black">Delete</Link>
          </div>
        </table>

      </div>
    )
  }
}
export default UpdateProject;
