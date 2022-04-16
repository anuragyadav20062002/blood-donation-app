/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from "react"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
const Nav = () => {
  const [current, setCurrent] = useState("home")
  let history = useHistory()
  let dispatch = useDispatch()

  const logout = () => {
    firebase.auth().signOut()
    dispatch({
      type: "Logged_Out",
      payload: null,
    })
    history.push("/login")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Blood Link
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Username
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={logout}
                >
                  Logout
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Looking For Blood
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Want To Donate
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
