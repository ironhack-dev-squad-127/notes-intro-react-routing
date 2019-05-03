import React from 'react'
import { Link } from 'react-router-dom'
import jsonUsers from './users.json'

export default function Users() {
  return <div className="Users">
    <h2>Users</h2>
    <ul>

      {jsonUsers.map(user => (<li key={user.id}>
        <Link to={"/users/"+user.id}>
          {user.gender === "male" ? "👨‍💻 " : "👩‍💻 "}
          {user.name}
        </Link>
      </li>))}

    </ul>
  </div>;
}