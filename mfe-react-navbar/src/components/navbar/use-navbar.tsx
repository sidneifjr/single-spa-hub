import { useState } from 'react';
import { Divider, Menu, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Box } from '@mui/material';
import { useDrawer } from './drawer/use-drawer';

export function useNavbar() {
  const { open, toggleDrawer } = useDrawer()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-search-account-menu';

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Usuário</MenuItem>

      <Divider />

      <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>

      <Divider />

      <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
    </Menu>
  );

  return {
    open, renderMenu, handleProfileMenuOpen, toggleDrawer
  }
}