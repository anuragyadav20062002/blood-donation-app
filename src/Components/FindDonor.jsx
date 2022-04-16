import React from "react"
import { useState } from "react"

const FindDonor = () => {
  const handleClick = (e) => {
    e.preventDefault()
  }

  const [group, setGroup] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")

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
          placeholder="State"
          className="form-control"
          onChange={(e) => setState(e.target.value)}
          value={state}
        />
        <br />
        <input
          type="text"
          placeholder="City"
          className="form-control"
          onChange={(e) => setCity(e.target.value)}
          value={city}
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
        <span>
          <strong>Provide the following details</strong>
        </span>
        <br />
        <br />
        {findDonor()}
      </div>
    </>
  )
}

export default FindDonor
