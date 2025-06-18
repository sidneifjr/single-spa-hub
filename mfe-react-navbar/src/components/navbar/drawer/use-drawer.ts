import { useState } from 'react';

export function useDrawer() {
  const [open, setOpen] = useState(false);
  
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return {
    open, toggleDrawer    
  }
}