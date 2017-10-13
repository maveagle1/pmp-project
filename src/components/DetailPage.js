import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from './button';

class DetailPage extends Component {

  render () {

    const createListItems = () => {
      return this.props.projects.map((project) => {
        return (
              <tr>
                <td>{project.id}</td>
                <td>{project.program_name}</td>
                <td>{project.number_of_projects}</td>
                <td>{project.program_manager}</td>
                <td>{project.priority}</td>
                <td>{project.status}</td>
                <td>{project.complete}</td>
                <td> <Button /> </td>
              </tr>
        )
      })
    }

    return (
      <div className="project">
        <div className="row left bold">
          <h5 className="black-text">Program Editor</h5>
        </div>
        <table className="highlight responsive-table centered">
        <thead>
          <tr>
              <th className="black-text text-lighten-4">id</th>
              <th className="black-text text-lighten-4">Program Name</th>
              <th className="black-text text-lighten-4">Number of Projects</th>
              <th className="black-text text-lighten-4">Program Manager</th>
              <th className="black-text text-lighten-4">Priority</th>
              <th className="black-text text-lighten-4">Status</th>
              <th className="black-text text-lighten-4">Complete</th>
              <th className="black-text text-lighten-4">Edit</th>
          </tr>
        </thead>
        <tbody>
          {createListItems()}
        </tbody>
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

export default connect(mapStateToProps, null)(DetailPage);
