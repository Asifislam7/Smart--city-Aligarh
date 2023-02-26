import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./components/css/style.css";
import { NavLink } from "react-router-dom";
import 'animate.css';

export default function BasicButtons() {
  return (
  <>
      <div className='wastepage'>
      <div className='buttons'>
      <NavLink to="/waste/wastemanage"><Button variant="contained" styl>Waste Management</Button></NavLink>
      <NavLink to="/waste/contractor"><Button variant="contained">Contractor Section</Button></NavLink>
      </div>
      <div className='text animate__animated animate__fadeInUp' style={{textAlign:'justify',padding:'20px',fontSize:'25px',fontFamily:'kolketif'}}>
      Waste is something everyone wants to get rid of.
The residents may upload the picture of the waste alongside the location in the provided complaint box.
Thereafter the admin from the waste management department will classify the waste into municipal solid waste, industrial waste, agricultural waste and hazardous waste and upload the information on the database.
Hence from here the contractors will take-up the task of properly managing the waste disposal.
      </div>
      <div className='imagesection'>
<img className="animate__animated animate__fadeInDown" id='image1' src="/images/waste.jpg" alt="Image"/>
<p style={{color:'white',fontWeight:'bold',fontFamily:'kolketif'}}>Creating smart connected systems for our urban areas provides a great many benefits for citizens around the world, not only to improve quality of life, but also to ensure sustainability and the best possible use of a city with such website can more efficiently manage infrastructure and maintenance, thereby reducing operating costs and improving the lives of its citizens.</p>
<img className="animate__animated animate__fadeInDown" id='image1' src="/images/image4.jpeg" alt="Image"/>
</div>
</div>

      </> 
    
  );
}