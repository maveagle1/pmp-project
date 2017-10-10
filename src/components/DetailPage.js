import React, { Component } from 'react';
import DetailPageBar from './DetailPageBar';
import DetailPageFooter from './DetailPageFooter';

class DetailPage extends Component {

  render () {
    return (
      <div>
      <DetailPageBar />
        <table className="highlight">
        <thead>
          <tr>
              <th>Program Name</th>
              <th>Number of Projects</th>
              <th>Program Manager</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Complete</th>
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
          <tr>
            <td>Window 8.0 Upgrade</td>
            <td>12</td>
            <td>Alan</td>
            <td>High</td>
            <td>Not Started</td>
            <td>0%</td>
          </tr>
          <tr>
            <td>ICD-10</td>
            <td>8</td>
            <td>Jonathan</td>
            <td>Low</td>
            <td>WIP</td>
            <td>75%</td>
          </tr>
          <tr>
            <td>Cloud Uplift</td>
            <td>10</td>
            <td>Jose</td>
            <td>High</td>
            <td>WIP</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>Help Desk Uplift</td>
            <td>5</td>
            <td>Michael</td>
            <td>Low</td>
            <td>WIP</td>
            <td>75%</td>
          </tr>
        </tbody>
      </table>
      <DetailPageFooter />
    </div>
    )
  }
}
export default DetailPage;
