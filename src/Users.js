import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import jsonUsers from './users.json'
import UserDetail from './UserDetail.js';

export default function Users() {
  return <div className="Users">
    <h2>Users</h2>
    <ul>
      {jsonUsers.map(user => (<li key={user.id}>
        <NavLink to={"/users/"+user.id}>
          {user.gender === "male" ? "👨‍💻 " : "👩‍💻 "}
          {user.name}
        </NavLink>
      </li>))}
    </ul>

    {/* Render the `UserDetail` component when the URL starts with "/users/anyPossibleValue" */}
    {/* It will define a props.match.params.userId in `UserDetail` */}
    <Route path="/users/:userId" component={UserDetail} />
  </div>;
}