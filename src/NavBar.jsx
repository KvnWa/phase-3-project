import React, {useState} from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab, Button } from '@mui/material/';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'


const NavBar = () => {

    const [ value, setValue ] = useState();

  return (
    <>
    <AppBar style={{background: '#063970'}}>
        <Toolbar>
            <Typography>Logo</Typography>
            <ShoppingCartIcon></ShoppingCartIcon>
            <Tabs style={{marginLeft: 'auto'}} textColor="inherit" value={value} onChange={(e, value)=> setValue(value)} indicatorColor="primary">
                <Tab label="Watchlist" to='/watchlist' component={Link}></Tab>
                <Tab label="Preorder" to='/preorder' component={Link}></Tab>
                <Tab label="Platform" to='/platform' component={Link}></Tab>
            </Tabs>
            <Button style={{marginLeft: 'auto'}} variant="contained">Login</Button>
            <Button style={{marginLeft: '10px'}} variant="contained">Sign Up</Button>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default NavBar