import React, { Component } from 'react';

class DeleteProject extends Component {

  render () {
    return (
      <div className="project">

      <div className="project">
        <row className="row left bold">
          <h5 className="grey-text text-lighten-4">Program Editor</h5>
        </row>
        <table className="highlight">
        <thead>
          <tr>
              <th className="grey-text text-lighten-4">Program Name</th>
              <th className="grey-text text-lighten-4">Number of Projects</th>
              <th className="grey-text text-lighten-4">Program Manager</th>
              <th className="grey-text text-lighten-4">Priority</th>
              <th className="grey-text text-lighten-4">Status</th>
              <th className="grey-text text-lighten-4">Complete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AppExtender</td>
            <td>10</td>
            <td>Alvin</td>
            <td>Medium</td>
            <td>WIP</td>
            <td>25%</td>
          </tr>
        </tbody>
        <div className="container">
          <br></br>
          <button class="btn waves-effect waves-light #4a148c purple darken-4"
            type="submit" name="action">Delete</button>
        </div>
      </table>
      </div>

      </div>
    )
  }
}
export default DeleteProject;
