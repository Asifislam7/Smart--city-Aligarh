import React from 'react'
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import Firstyear from "./components/Card";
import "./components/css/style.css";
import waste from "./Waste";
import "animate.css"

const Wastemanage = () => {
  return(
    <div className='Form animate__animated animate__fadeInDown'>
    <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className='col-mid-4'>
  <label class="form-label" for="customFile">Upload the photo of the waste</label>
<input type="file" class="form-control" id="customFile" />
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <button type="submit" className="btn btn-primary">Submit to Officials</button>
    <button type="submit" className="btn btn-primary">Submit to private Parties</button>
  </div>
</form>
</div>
  )
}

export default Wastemanage;
