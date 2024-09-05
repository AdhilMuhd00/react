import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var [user, setUser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setUser(response.data)
        })
    
    
  return (
      <div>
          <br /><br /><br /><br />
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                      
                      <TableRow>
                          <TableCell>id</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>city</TableCell>
                          
                       
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell>{val.id}</TableCell>
                                  <TableCell>{val.name}</TableCell>
                                  <TableCell>{val.address.city}</TableCell>
                              
                              </TableRow>
                          )
                      })}
                      
                  </TableBody>
                  
                  
              </Table>
          </TableContainer>
              </div>
  )
}

export default Api