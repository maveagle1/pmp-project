import React, { Component } from 'react';
import Button from './button';


class DetailPage extends Component {

  render () {
    return (
      <div className="project">
        <row className="row left bold">
          <h5 className="black-text">Program Editor</h5>
        </row>
        <table className="highlight">
        <thead>
          <tr>
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
          <tr>
            <td>AppExtender</td>
            <td>10</td>
            <td>Alvin</td>
            <td>Medium</td>
            <td>WIP</td>
            <td>25%</td>
            <td> <Button /> </td>
          </tr>
          <tr>
            <td>Window 8.0 Upgrade</td>
            <td>12</td>
            <td>Alan</td>
            <td>High</td>
            <td>Not Started</td>
            <td>0%</td>
            <td> <Button /> </td>
          </tr>
          <tr>
            <td>ICD-10</td>
            <td>8</td>
            <td>Jonathan</td>
            <td>Low</td>
            <td>WIP</td>
            <td>75%</td>
            <td> <Button /> </td>
          </tr>
          <tr>
            <td>Cloud Uplift</td>
            <td>10</td>
            <td>Jose</td>
            <td>High</td>
            <td>WIP</td>
            <td>50%</td>
            <td> <Button /> </td>
          </tr>
          <tr>
            <td>Help Desk Uplift</td>
            <td>5</td>
            <td>Michael</td>
            <td>Low</td>
            <td>WIP</td>
            <td>75%</td>
            <td> <Button /> </td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}
export default DetailPage;
