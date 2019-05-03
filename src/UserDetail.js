import React from 'react'
import jsonUsers from './users.json'

export default function UserDetail(props) {
  console.log("The id of the user is ", props.match.params.userId)
  let user = jsonUsers.find(u => u.id === props.match.params.userId)
  return (
    <div className="UserDetail">
      <h2>User Detail</h2>
      <strong>Id</strong>: {user.id} <br/>
      <strong>Name</strong>: {user.name} <br/>
      <strong>Country</strong>: {user.country} <br/>
      <strong>Role</strong>: {user.isStudent ? 'student' : 'teacher'}<br/>
    </div>
  )
}
