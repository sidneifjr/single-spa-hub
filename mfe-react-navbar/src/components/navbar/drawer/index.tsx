import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import WifiIcon from '@mui/icons-material/Wifi';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerListItems = [
  {
    id: 0,
    icon: <SpaceDashboardIcon />,
    text: 'Visão Geral'
  },
  {
    id: 1,
    icon: <WifiIcon />,
    text: 'Dispositivos'
  },
  {
    id: 2,
    icon: <LockIcon />,
    text: 'Segurança'
  },
  {
    id: 3,
    icon: <SettingsIcon />,
    text: 'Configurações'
  },
]

export function DrawerList({ onDrawerClick }) {
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={onDrawerClick}>
      <List>
        {drawerListItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}