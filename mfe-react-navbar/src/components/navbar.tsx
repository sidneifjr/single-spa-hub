import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MenuItem } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import homeHub from '../assets/home-hub.png'
import { useNavbar } from './navbar/use-navbar';
import { DrawerList } from './navbar/drawer';

export default function Navbar() {
  const { open, renderMenu, handleProfileMenuOpen, toggleDrawer } = useNavbar()
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#9C27B0' }}>
        <Toolbar>
          <MenuItem onClick={toggleDrawer(true)}>
            <img src={homeHub} alt="Home Hub" style={{ width: '176px' }} />
          </MenuItem>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <MenuItem onClick={handleProfileMenuOpen}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={() => {}}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </MenuItem>

            <IconButton
              size="large"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList onDrawerClick={toggleDrawer(false)} />
      </Drawer>

      {renderMenu}
    </Box>
  );
}