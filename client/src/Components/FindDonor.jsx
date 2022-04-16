import React from "react"
import { useState } from "react"

const FindDonor = () => {
  const handleClick = (e) => {
    e.preventDefault()
  }

  const [user, setUser] = useState({
    name: "",
    phone: "",
    state: "",
    group: "",
    city: "",
  })

  let name, value

  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const findDonor = () => {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          className="form-control"
          onChange={handleInputs}
          value={user.name}
        />
        <br />
        <input
          type="text"
          placeholder="Phone Number"
          className="form-control"
          onChange={handleInputs}
          value={user.phone}
        />
        <br />
        <input
          type="text"
          placeholder="Blood Group"
          className="form-control"
          onChange={handleInputs}
          value={user.group}
        />
        <br />
        <input
          type="text"
          placeholder="State"
          className="form-control"
          onChange={handleInputs}
          value={user.state}
        />
        <br />
        <input
          type="text"
          placeholder="City"
          className="form-control"
          onChange={handleInputs}
          value={user.city}
        />
        <br />
        <a href="/dashboard">
          <button onClick={handleClick} className="btn btn-outline-primary">
            Submit
          </button>
        </a>
      </form>
    )
  }

  return (
    <>
      <div className="find-donor">
        <h2>
          <strong>Provide the following details</strong>
        </h2>
        <br />
        <br />
        {findDonor()}
      </div>
    </>
  )
}

export default FindDonor
