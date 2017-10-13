import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DeleteProject extends Component {

  render () {



    return (
      <div className="project">
        <div className="row left bold">
          <h5 className="black-text text-lighten-4">Delete Item</h5>
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
           <td>ICD-10</td>
           <td>12</td>
           <td>Joe</td>
           <td>High</td>
           <td>23</td>
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
function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps, null)(DeleteProject);
