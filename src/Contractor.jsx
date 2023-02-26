import React from 'react'
import { NavLink } from 'react-router-dom';
import "./components/css/style.css";
import "animate.css"
const Contractor = () => {
  return (
    <div className='ContractorForm animate__animated animate__fadeInUp'>
 

{/* <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
</div> */}

<label for="basic-url" class="form-label">Your ID</label>
<div class="input-group mb-3">
  {/* <span class="input-group-text" id="basic-addon3">https://example.com/users/</span> */}
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div>
<label for="basic-url" class="form-label"> Password</label>
<div class="input-group mb-3">
  {/* <span class="input-group-text" id="basic-addon3">https://example.com/users/</span> */}
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div>
<NavLink to="/waste/contractor/details"><button className='btn btn-success' id='btncont'>Submit</button></NavLink>

    </div>
    
  )
}

export default Contractor
