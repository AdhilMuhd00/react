import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var [fname, setFname] = useState('Adhil Muhd')
    var [value, setVal] = useState()

    const handleInput = (e) => {
        console.log(e.target.value)
        setFname(e.target.value)
    
    }
    const takeInput = () => {
        console.log("clicked");
        setVal(fname);
    }
    return (
         <div>
          <br /><br /><br /><br />
          <Typography variant='h4' component="div"> Welcome {value} </Typography>  
            <TextField label="USER NAME" variant='filled' onChange={handleInput} /> &nbsp;
            <Button  variant="contained" onClick={takeInput} >conform</Button>
        </div>
    )
}

export default State