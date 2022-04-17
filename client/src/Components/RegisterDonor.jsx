/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import Nav from "./Nav"
import axios from "axios"
const RegisterDonor = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/data/get-data")
      .then((res) => {
        console.log(res)
        setUsers(res.data.result)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <div className="queries">
        <br />
        <h2>Blood Requests Available</h2>
        <br />
        {users.map((user, i) => {
          return (
            <div className="card" key={i}>
              <div className="card-header">{user.name}</div>
              <div className="card-body">
                <h5 className="card-title">Blood Group: {user.group}</h5>
                <p className="card-text">
                  Urgent Need of Blood at {user.City} , {user.state}
                </p>
                <p>Contact No - {user.phone}</p>
                <a href="#" className="btn btn-primary">
                  Donate
                </a>
              </div>
            </div>
          )
        })}
        <br />
      </div>
    </>
  )
}

export default RegisterDonor
