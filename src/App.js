
import './App.css';



import axios from 'axios'
import React, { useState } from 'react'

function App() {
  const [text, setText] = useState("")
  const [movie, setMovie] = useState([])
  const onChange = (e) => {
    setText(e.target.value)
  }
  const getMovie = (e) => {
    e.preventDefault();
    axios.get(`https://omdbapi.com/?s=${text}&apikey=a1de9591`)
      .then((res => {
        console.log(res)
        setMovie(res.data.Search)
      }))
  }
  return (
    <>
    <div className=' bg'>
    <nav className="navbar navbar-expand-lg sticky-top " style={{
    background: 'black'
  }}>
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            <img  width={45} src="clipart3105859.png" alt="" /> <span className=' mx-1 fw-bold'>MovieTime</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active text-light" aria-current="page" href="#"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#"></a>
              </li>
            </ul>
            <form onSubmit={getMovie} className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={onChange} />
              <button className="btn " type="submit" style={{
    background: 'grey'}}>Search</button>
            </form>
          </div>
        </div>
      </nav>

      <h1 className=' text-center text-light fw-bold my-3'>Unlimited movies, TV <br />
      shows and more.
      <h5>Watch anywhere. Cancel anytime.</h5> </h1>



      <div className="container my-2  ">
        <div className="row">
          {
            movie.map((value, index) => {
              return (
                <div className="col-md-3 my-3">
                  <div className="card" style={{ width: '18rem',height:'auto' }}>
                    <img src={value.Poster} className="card-img-top bg-image  " alt="..." />

                    <div className="card-body">
                      
                      <h4 className="card-title"> <b>{value.Title}</b></h4>
                      <h3 className="card-title">Year: {value.Year}</h3>
                    

                     
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default App