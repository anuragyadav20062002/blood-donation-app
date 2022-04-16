import React from "react"
import { useState } from "react"

const FindDonor = () => {
  const handleClick = (e) => {
    e.preventDefault()
  }

  const [group, setGroup] = useState("")
  const [location, setLocation] = useState("")

  const findDonor = () => {
    return (
      <form action="submit">
        <input
          type="text"
          placeholder="Blood Group"
          className="form-control"
          onChange={(e) => setGroup(e.target.value)}
          value={group}
        />
        <br />
        <input
          type="text"
          placeholder="Location"
          className="form-control"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <br />
        <button onClick={handleClick} className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    )
  }

  return (
    <>
      <div className="find-donor">
        Provide the following details
        <br />
        <br />
        {findDonor()}
      </div>
    </>
  )
}

export default FindDonor
