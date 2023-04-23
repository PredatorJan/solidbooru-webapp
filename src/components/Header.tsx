import { NavLink } from 'react-router-dom'
import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography, useTheme } from '@mui/material'
import React, { useContext, useState } from 'react';
import { ColorModeContext } from '../App';
import { BaseUrl } from '../main';
import { ThemeSwitch } from './util/CustomSwitches';

function Header() {

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const [anchorElNavConvcersation, setAnchorElConversation] = useState<null | HTMLElement>(null);
  const openConversationMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElConversation(event.currentTarget);
  };
  const closeConversationMenu = () => {
    setAnchorElConversation(null);
  };

  const [anchorElNavImages, setAnchorElImages] = useState<null | HTMLElement>(null);
  const openImagesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElImages(event.currentTarget);
  };
  const closeImagesMenu = () => {
    setAnchorElImages(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box>
            <NavLink to={BaseUrl} className="menuItemNavLink" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant='h5'>Solidbooru</Typography>
            </NavLink>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button onClick={openConversationMenu} color='inherit'>Conversations</Button>
            <Button onClick={openImagesMenu} color='inherit'>Images</Button>

            <Menu anchorEl={anchorElNavConvcersation} open={Boolean(anchorElNavConvcersation)} onClose={closeConversationMenu}>
              <MenuItem component={NavLink} to='conversations' onClick={closeConversationMenu}>My Conversations</MenuItem>
            </Menu>

            <Menu anchorEl={anchorElNavImages} open={Boolean(anchorElNavImages)} onClose={closeImagesMenu}>
              <MenuItem component={NavLink} to='images' onClick={closeImagesMenu}>All Images</MenuItem>
              <MenuItem component={NavLink} to='images' onClick={closeImagesMenu}>My Images</MenuItem>
            </Menu>
          </Box>
          <Box>
            <ThemeSwitch checked={theme.palette.mode === 'dark'} onChange={colorMode.toggleColorMode}></ThemeSwitch>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header