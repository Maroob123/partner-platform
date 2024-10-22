import { useState, memo } from 'react';
// import partnerLogo from '@assets/header_logo.png';

import {
  AppBar,
  Box,
  Toolbar,
  Button,
  useScrollTrigger,
  Slide,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

// import { AppContext } from '../context/AppContext';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const drawerWidth = 240;


function AppHeader() {
//   const { headerTitle, changeComponent, currentComponent } = useContext(AppContext);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('session');
    setDialogOpen(false);
    // changeComponent('LoginPage');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <HideOnScroll> */}
        <AppBar position="fixed" elevation={1} sx={{ bgcolor: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar sx={{display: 'flex', justifyContent: "space-between"}}>
          <Box
            component="img"
            sx={{
            maxHeight: 40,
            maxWidth: 300,
            }}
            alt="Main Logo"
            src="./assets/header_logo.png"
            />
            <Box sx={{display: "flex", gap: "10px"}}>
              <Button variant="outlined" onClick={handleDialogOpen}>
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      {/* </HideOnScroll> */}
      <Dialog fullWidth maxWidth="xs" open={dialogOpen}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to logout?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleLogout} color="primary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
export default memo(AppHeader);