import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
    return (
        <div>
            <br></br>
            <h1>SIGNUP</h1>
            <TextField label="USER NAME" variant="outlined">USER NAME</TextField><br></br><br></br>
            <TextField label="PASSWORD" variant="outlined" type="password">PASSWORD</TextField><br></br><br></br>
            <TextField label="ADDRESS" variant="outlined" >ADDRESS</TextField><br></br><br></br>
            <Button variant="contained">SUBMIT</Button> &nbsp;
            <Button variant="contained">RESET</Button>
        </div>
    )
}

export default Signup