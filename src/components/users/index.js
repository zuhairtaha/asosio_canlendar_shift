import React from 'react'
import users from './users.json'
import './users.scss'
import icon from './avatar_icon.png'

const Index = () =>
  <div className="vertical-menu">
    <b>Users</b>
    <ul>
      {users.map(user => {
          const {name, id} = user
          return (
            <li key={id}>
              <a href="/">
                <img className="icon" src={icon} alt={name} />
                {name}
              </a>
            </li>
          )
        }
      )}
    </ul>
  </div>

export default Index

