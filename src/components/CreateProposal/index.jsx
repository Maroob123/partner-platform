import { useState } from "react";
import {
  Toolbar,
  Box,
  Typography,
  Drawer,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';

import {} from '@mui/styled-engine'

const drawerWidth = 100;
const steps = ["TARGET", "BUDGET", "PREVIEW"];


export default function CreateProposal() {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  console.log("Theme mixin", theme )

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            // width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Stepper 
            activeStep={activeStep}
            sx={{px: 3, py: 1}} 
            orientation="vertical" 
            connector={null} 
            alternativeLabel
            >
            {steps.map((label, index) => (
              <Step key={label} onClick={() => handleStepChange(index)}>
                <StepLabel StepIconProps={{
                    sx: { fontSize: 40 }
                }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, pb: 3, marginLeft: '8px' }}>
        <Toolbar />
        <Box position="absolute" width="100%" top="0" p={1} bgcolor={theme.palette.primary.main} color={theme.palette.primary.contrastText}>
            <Toolbar />
            <Typography variant="h6">
                hello
            </Typography>
        </Box>
        <Box>
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        </Box>
      </Box>
    </Box>
  );
}
