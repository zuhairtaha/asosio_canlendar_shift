import React from 'react'
import users from '../users/users.json'

class SelectUser extends React.Component {
  render = () =>
    <div>
      <select onChange={e => this.props.onUserSelect(e.target.value)}>
        <option key={0} defaultValue={0} disabled={true}>select user</option>
        {users.map(user =>
          <option key={user.id} value={user.id}>{user.name}</option>
        )}
      </select>
    </div>
}

export default SelectUser