import React, {useState} from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab, Button } from '@mui/material/';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {

    const [ value, setValue ] = useState();

  return (
    <>
    <AppBar style={{background: '#063970'}}>
        <Toolbar>
            <Typography>Project</Typography>
            <ShoppingCartIcon></ShoppingCartIcon>
            <Tabs style={{marginLeft: 'auto'}} textColor="inherit" value={value} onChange={(e, value)=> setValue(value)} indicatorColor="primary">
                <Tab label="Watchlist"></Tab>
                <Tab label="Preorder"></Tab>
                <Tab label="Platform"></Tab>
            </Tabs>
            <Button style={{marginLeft: 'auto'}} variant="contained">Login</Button>
            <Button style={{marginLeft: '10px'}} variant="contained">Sign Up</Button>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header