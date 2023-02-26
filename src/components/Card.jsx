// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';


const Firstyear = (props) => {
  return (
    <div className={styles.cardcomponent}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'bolder',fontFamily:'sans-serif'}}>
         {props.year}
        </Typography>
        <Typography variant="body2" color="text.success" style={{fontStyle:'italic'}}>
         {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Click to apply</Button>
        {/* <Button size="small"></Button> */}
      </CardActions>
    </Card>

      
    </div>
  )
}

export default Firstyear
