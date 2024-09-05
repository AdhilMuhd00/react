import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography  variant="h4"  component="div" sx={{ flexGrow: 1 }} >
                        My App
                    </Typography>
                    <Link to='/login'>
                        <Button variant="contained" color='secondary'>LOGIN</Button> </Link>&nbsp;
                    
                    <Link to='/signup'>
                        <Button variant="contained" color='secondary'> SIGNUP</Button></Link>&nbsp;
                    <Link to='/state'>
                        <Button variant="contained" color='secondary'>State</Button></Link>&nbsp;
                    <Link to='/count'>
                        <Button variant='contained' color='secondary'>Count</Button></Link>&nbsp;
                    <Link to='/abc'>
                        <Button variant='contained' color='secondary'>Abc</Button></Link>&nbsp;
                    <Link to='/api'>
                        <Button variant='contained' color='secondary'>Api</Button></Link>&nbsp;
                    <Link to='/pokemon'>
                    <Button variant='contained' color='secondary'>Pokemon</Button></Link>&nbsp;
                </Toolbar>
            
            </AppBar>

        
           
        </div>
    )
}

export default Navbar