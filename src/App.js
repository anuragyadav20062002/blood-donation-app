import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./Components/Home"
import AvailableHospitals from "./Components/AvailableHospitals"
import DonorDetails from "./Components/DonorDetails"
import FindDonor from "./Components/FindDonor"
import HospitalsDetails from "./Components/HospitalsDetails"
import Login from "./Components/Login"
import Register from "./Components/Register"
import RegisterDonor from "./Components/RegisterDonor"
import Dashboard from "./Components/Dashboard"
import Nav from "./Components/Nav"
import Error from "./Components/Error"
import { initializeApp } from "firebase/app"
import "./index.css"
const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register-donor" component={RegisterDonor} />
        <Route exact path="/find-donor" component={FindDonor} />
        <Route
          exact
          path="/available-hospitals"
          component={AvailableHospitals}
        />
        <Route exact path="/hospitals-details" component={HospitalsDetails} />
        <Route exact path="/donors-details" component={DonorDetails} />
        <Route component={Error} />
      </Switch>
    </>
  )
}
export default App
