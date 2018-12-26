import React, {Fragment} from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import eventsJson from './events.json'
import UserShift from '../shift'

const localizer = BigCalendar.momentLocalizer(moment)

class UsersCalendar extends React.Component {
  state = {
    events: eventsJson
  }
  addShift = shift => {
    if (!shift.userId) {
      alert('chose user !')
      return
    }
    this.setState(state => {
        const {startDate, endDate, userId} = shift
        return ({
          events: [...state.events, {
            start: moment(startDate).format('YYYY-MM-DD'),
            end: moment(endDate).format('YYYY-MM-DD'),
            title: 'shift for user' + userId
          }
          ]
        })
      }
    )
    alert(`Shift added`)
  }

  render = () =>
    <Fragment>
      <div style={{flex: 2}}>
        <strong>Calender (shifts)</strong>
        <BigCalendar
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={new Date()}
          views={['month', 'week', 'day']}
        />
      </div>
      <UserShift onAddShift={this.addShift} />
    </Fragment>
}

export default UsersCalendar
