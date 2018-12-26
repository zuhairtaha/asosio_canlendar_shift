/* @link: https://www.npmjs.com/package/react-flatpickr */

import 'flatpickr/dist/themes/material_green.css'
import './shift.css'
import Flatpickr from 'react-flatpickr'
import React, {Component} from 'react'
import SelectUser from './SelectUser'

export default class UserShift extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    userId: 0
  }
  submitHandler = e => {
    e.preventDefault()
  }

  render() {
    const {startDate, endDate} = this.state
    return (
      <>
        <form onSubmit={this.submitHandler} className="shift">
          <h3>Assign Shift</h3>

          <p>Start:</p>
          <Flatpickr
            data-enable-time
            value={startDate}
            onChange={startDate => this.setState({startDate:new Date(startDate)})} />

          <p>End:</p>
          <Flatpickr
            data-enable-time
            value={endDate}
            onChange={endDate => this.setState({endDate:new Date(endDate)})} />

          <SelectUser onUserSelect={userId => this.setState({userId})} />
          <button onClick={()=>this.props.onAddShift(this.state)}>Create</button>
        </form>
      </>
    )
  }
}