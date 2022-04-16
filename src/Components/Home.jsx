import React from "react"

const Home = () => {
  return (
    <>
      <div class="home">
        <h1 class="top heading">BLOOD-LINK</h1>
        <h5 class="tag line">
          Excuses never save a life, Blood donation does...
        </h5>
        <br />
        <p class="about us">
          Here we connect people who want to donate blood with people who need
          blood. Our aim is that no request for blood goes unfulfilled after all
          someone's few amount of blood can save life of some other person. So
          we request all of you to help us out in this noble cause and show your
          contribution by donating blood to some needy person.
        </p>
      </div>
      <div class="content display">
        <div class="box red">
          <a href="/register-donor">
            <button className="home-button btn btn-outline-secondary">
              Donate
            </button>
          </a>
        </div>
        <div class="box green">
          <a href="/find-donor">
            <button className="home-button btn btn-outline-secondary">
              Generate Query
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
