import { useState, memo } from "react";
import {
  Toolbar,
  Box,
  Typography,
  Drawer,
  Stepper,
  Step,
  StepLabel,
  Stack,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Grid2,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Alert,
  IconButton
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Reply, Info } from '@mui/icons-material';
import { CustomizedTooltip, CustomizedTooltipSmall } from '@helperFunctions/CustomTooltips';
import { SectionAddressableSegments, SectionAudianceInterests } from '@components/CreateProposal';

const drawerWidth = 100;
const steps = ["TARGET", "BUDGET", "PREVIEW"];


function CreateProposalPage() {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

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
        <Box position="fixed" width="-webkit-fill-available" top="0" zIndex={10} p={1} bgcolor={theme.palette.primary.main} color={theme.palette.primary.contrastText}>
            <Toolbar />
            <CustomizedTooltip title="Opportunity : John D. Morgan Park | test proposal Maroob | Presented on behalf of Steve Spilsbury" arrow>
            <Stack alignItems="center" direction="row" gap={1}>
              <Reply />
              <Typography variant="h6">
                Opportunity : John D. Morgan Park | test proposal Maroob | Presented on behalf of Steve Spilsbury 
              </Typography>
              </Stack>
            </CustomizedTooltip>
        </Box>
        <Box mt={8} px={2}>
          <Card >
           <CardHeader title={<Typography variant="h5" sx={{display: "inline", fontWeight: 'bold'}}>Products</Typography>} />
           <CardContent>
           <Grid2
              container
              spacing={2}
              justify="center"
            >
              <Grid2 size={{xs:6, sm:4, md:2}}>
                  <Card elevation={0}>
                    <CardMedia component="img" height={100} image="/src/assets/display.webp" sx={{objectFit: "contain", width: "auto", p:2}} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Display
                      </Typography>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Display" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Keyword Display" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Addressable Display" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Geofence" />
                      </FormGroup>
                    </CardContent>
                  </Card>
              </Grid2>
              <Grid2 size={{xs:6, sm:4, md:2}}>
                  <Card elevation={0}>
                    <CardMedia component="img" height={100} image="/src/assets/pre_roll.webp" sx={{objectFit: "contain",  width: "auto", p:2}} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Video
                      </Typography>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Pre Roll" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Keyword Pre Roll" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Addressable Pre Roll" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="YouTube" />
                      </FormGroup>
                    </CardContent>
                  </Card>
              </Grid2>
              <Grid2 size={{xs:6, sm:4, md:2}}>
                  <Card elevation={0}>
                    <CardMedia component="img" height={100} image="/src/assets/ctv.webp" sx={{objectFit: "contain",  width: "auto", p:2}} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        CTV/OTT
                      </Typography>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="CTV" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Addressable CTV" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="OTT Plus" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Addressable OTT Plus" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="OTT" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Addressable OTT" />
                      </FormGroup>
                    </CardContent>
                  </Card>
              </Grid2>
              <Grid2 size={{xs:6, sm:4, md:2}}>
                  <Card elevation={0}>
                    <CardMedia component="img" height={100} image="/src/assets/streaming_audio.webp" sx={{objectFit: "contain",  width: "auto", p:2}} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Audio
                      </Typography>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Streaming Audio" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Addressable Streaming Audio" />
                      </FormGroup>
                    </CardContent>
                  </Card>
              </Grid2>
              <Grid2 size={{xs:6, sm:4, md:2}}>
                  <Card elevation={0}>
                    <CardMedia component="img" height={100} image="/src/assets/social_impression.webp" sx={{objectFit: "contain",  width: "auto", p:2}} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Social
                      </Typography>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Display" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Keyword Display" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Addressable Display" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Geofence" />
                      </FormGroup>
                    </CardContent>
                  </Card>
              </Grid2>
              <Grid2 size={{xs:6, sm:4, md:2}}>
                  <Card elevation={0}>
                    <CardMedia component="img" height={100} image="/src/assets/sem.webp" sx={{objectFit: "contain",  width: "auto", p:2}} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Search
                      </Typography>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="SEM" />
                      </FormGroup>
                    </CardContent>
                  </Card>
              </Grid2>
              <Grid2 size={{xs:6, sm:4, md:2}}>
                  <Card elevation={0}>
                    <CardMedia component="img" height={100} image="/src/assets/seo.webp" sx={{objectFit: "contain", width: "auto", p:2}} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        SEO
                      </Typography>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="SEO" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Off-Page" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Review Gen" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Rep Monitoring & Listings Dist" />
                      </FormGroup>
                    </CardContent>
                  </Card>
              </Grid2>
              <Grid2 size={{xs:6, sm:4, md:2}}>
                  <Card elevation={0}>
                    <CardMedia component="img" height={100} image="/src/assets/website.webp" sx={{objectFit: "contain", width: "auto", p:2}} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Website
                      </Typography>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Website" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Extra Pages" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Website Hosting" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Landing Page" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Website Hosting + Maintenance" />
                      </FormGroup>
                    </CardContent>
                  </Card>
              </Grid2>
              <Grid2 size={{xs:6, sm:4, md:2}}>
                  <Card elevation={0}>
                    <CardMedia component="img" height={100} image="/src/assets/email_marketing.webp" sx={{objectFit: "contain",  width: "auto", p:2}} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Email
                      </Typography>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Email Marketing" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Email Retargeting" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Email Matchback Fee" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Email Creative Fee" />
                      </FormGroup>
                    </CardContent>
                  </Card>
              </Grid2>
            </Grid2>
           </CardContent>
          </Card>
          <Card sx={{mt: 4}}>
           <CardHeader title={<>
            <Typography variant="h5" sx={{display: "inline", fontWeight: 'bold'}}>Special Ad Category</Typography>
            <Typography sx={{display: "inline"}}> (SEM, Social Budget) </Typography>
            </>
            }
            />
           <CardContent>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="The SEM and Social campaign(s) in this proposal will contain offers for employment, housing, or credit."
              name="radio-buttons-group"
            >
              <FormControlLabel value="The SEM and Social campaign(s) in this proposal will contain offers for employment, housing, or credit." control={<Radio />} label="The SEM and Social campaign(s) in this proposal will contain offers for employment, housing, or credit." />
              <Alert sx={{mb: 2, width: "80%"}} severity="warning"> 
                When you select this option, your campaign will use geographic targeting by region and general demographic targeting. For Social products, this will restrict available interest targeting selections to those permitted by Facebook for special ad category campaigns. 
                <CustomizedTooltipSmall title="In an effort to improve inclusivity for users disproportionately affected by social biases, both Google's Personalized Advertising Policy and Facebook's Discriminatory Practices ad policies require that housing, employment, and credit products or services cannot be targeted to audiences based on gender, age, parental status, marital status, or zip code; additionally, applicable interest targeting selections must be restricted." placement="top">
                  <IconButton>
                    <Info />
                  </IconButton>
                </CustomizedTooltipSmall>
              </Alert>
              <FormControlLabel value="The SEM and Social campaign(s) in this proposal will NOT contain offers for employment, housing, or credit." control={<Radio />} label="The SEM and Social campaign(s) in this proposal will NOT contain offers for employment, housing, or credit." />
            </RadioGroup>
           </CardContent>
          </Card>
          <Card sx={{mt: 4}}>
           <CardHeader title={<>
            <Typography variant="h5" sx={{display: "inline", fontWeight: 'bold'}}>Target Audience Region Data</Typography>
            <Typography sx={{display: "inline"}}> (Social Budget, SEM) </Typography>
            </>
            } />
           <CardContent></CardContent>
          </Card>
          
          <SectionAddressableSegments />
          <SectionAudianceInterests />  
          <Card sx={{mt: 4}}>
           <CardHeader title={<>
            <Typography variant="h5" sx={{display: "inline", fontWeight: 'bold'}}>Audience</Typography>
            <Typography sx={{display: "inline"}}> (Display, Keyword Display, Addressable Display, Pre Roll, Keyword Pre Roll, Addressable Pre Roll, YouTube, CTV, Addressable CTV, OTT Plus, Addressable OTT Plus, OTT, Addressable OTT, Social Budget) </Typography>
            </>
            } />
           <CardContent></CardContent>
          </Card>    
          <Card sx={{mt: 4}}>
           <CardHeader title={<>
            <Typography variant="h5" sx={{display: "inline", fontWeight: 'bold'}}>Keywords</Typography>
            <Typography sx={{display: "inline"}}> (Keyword Display, Keyword Pre Roll, SEM) </Typography>
            </>
            } />
           <CardContent></CardContent>
          </Card>    
        </Box>
      </Box>
    </Box>
  );
}
export default memo(CreateProposalPage);