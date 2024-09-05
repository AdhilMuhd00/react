import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const Count = () => {
    var [count, setCount] = useState(0)
    const increaseCount = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        setCount(count - 1)
    }
  return (
      <div>
          <br /><br /><br /><br />
          <h1>Counter Programe</h1>
          <Button variant="contained" color="inherit">
              <Typography variant='h4' component="div" color='black'>Count =  {count}</Typography></Button>
          <br /><br></br>
          
          <Button variant="contained" color="success" onClick={increaseCount}>+</Button>&nbsp;&nbsp;
          <Button variant="contained" color="error" onClick={decreaseCount}>-</Button>
      
      </div>
  )
}

export default Count