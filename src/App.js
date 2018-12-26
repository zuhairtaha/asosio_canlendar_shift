import React, {Component} from 'react'
import './App.css'
import Users from './components/users'
import UsersCalendar from './components/calender'
import UserShift from './components/shift'

class App extends Component {
  render = () =>
    <div className="container">
      <Users />
      <UsersCalendar />
    </div>
}

export default App
