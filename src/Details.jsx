import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import "./components/css/style.css";

const Details = () => {
const [data, setData]=useState([])    
    useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(data=>setData(data));
},[])

return (
    <div>
     {/* {data.map((data)=>{
        console.log(data);
        return <li>{data.name}</li>
      })}` */}

      <div className='Heading'>
      <label style={{fontSize:'18px',marginLeft:'20px'}}>Filter your clients accoording to the type of wastes</label> 
<div class="btn-group">
    <span></span>
  <button type="button" class="btn btn-danger dropdown-toggle"  data-bs-toggle="dropdown"  id='filterbtn' aria-expanded="false">
    Types
  </button>
  <TextField id="outlined-basic" placeholder='Search here' style={{padding:'10px',fontSize:'2rem',backgroundColor:'white'}} variant="outlined" />
  <Button variant="contained" style={{width:'100px',fontSize:'2rem',borderRadius:'20px'}}>Search </Button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" style={{fontSize:'2rem'}} href="#">Biodegradable</a></li>
    <li><a class="dropdown-item"style={{fontSize:'2rem'}}   href="#">Non-biodegradable</a></li>
    <li><a class="dropdown-item" style={{fontSize:'2rem'}}  href="#">E-Waste</a></li>
  </ul>
</div>
      </div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">City </th>
    </tr>
  </thead>
  <tbody>

  {data.map((data)=>{
        console.log(data);
 return   <tr>
      <th scope="row">{data.id}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.address.city}</td>
      <td><button className='btn btn-primary'>Make a Deal</button></td>
    </tr>

      })}


  </tbody>
</table>
    </div>
  )
}

export default Details
