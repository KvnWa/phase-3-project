import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Tabs, Tab, Button, Image } from '@mui/material/';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import forged from './forged.png'

const NavBar = () => {
  const [value, setValue] = useState();
  const [ log, setLog ] = useState(true)

  function hClick() {
    setLog(log => !log)
  }
  
  return (
    <div className="nav">
      <AppBar style={{ background: '#2A2A2A' }}>
        <Toolbar>
          
          <Typography to="/" component={Link}>
          <img src={forged} height="70" width="90%" style={{marginLeft: "60px"}}/>
          </Typography>
          <Tabs
            style={{ marginLeft: 'auto' }}
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="primary"

          >
            <Tab label="Watchlist" to="/watchlist" component={Link}></Tab>
            <Tab label="FAQ" to="/FAQ" component={Link}></Tab>
            <Tab label="About" to="/About" component={Link}></Tab>
          </Tabs>
         
          <Button style={{ marginLeft: 'auto' }} variant="contained" onClick={hClick} >{log ? "Login" : "Harris84"}
          </Button>
          <span style={{marginLeft: '15px'}}></span>
          <Button style={{ marginRight: '85px' }} variant="contained">
            Sign Up
          </Button>
      
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;