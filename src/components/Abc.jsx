import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Abc = () => {
    var [name, setName] = useState()
    const input1 = () => {
        setName('Adhil')
    }
    const input2 = () => {
        setName('Arjun')
    }
    const input3 = () => {
        setName('Anurag')
    }
    const input4 = () => {
        setName('')
    }
    
    useEffect(() => {input1()},[])

  return (
      <div>
          
          <br /><br /><br /><br />
          <Button variant="contained" color="inherit">
              <Typography variant='h4' component="div" color='black'> I am {name}</Typography></Button>
          <br></br><br></br>
          <Button variant="contained" onClick={input1}> Adhil</Button>&nbsp;
          <Button variant="contained" onClick={input2}>Arjun</Button>&nbsp;
          <Button variant="contained" onClick={input3}>Anurag</Button>&nbsp;
          <Button variant="contained" onClick={input4}>Reset</Button>
      
      
      
      </div>
  )
}

export default Abc