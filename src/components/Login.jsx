import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <br></br>
      
      <h1> LOGIN </h1>
      <TextField label="USER NAME" variant="outlined" /><br /><br />
      <TextField label="PASSWORD" type="password" variant="outlined" /><br /><br />
      <Button variant="contained"> LOGIN</Button> &nbsp;
      <Button variant="contained"> RESET</Button> 
      </div>
    
  )
}

export default Login