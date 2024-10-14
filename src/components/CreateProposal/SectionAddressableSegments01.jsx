import { useState } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Grid2,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    FormGroup,
    FormControlLabel,
    Checkbox
} from "@mui/material";
import { Info, ExpandMore } from '@mui/icons-material';
import { CustomizedTooltipSmall } from '@helperFunctions/CustomTooltips';

function SectionAddressableSegments() {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Card sx={{ mt: 4 }}>
            <CardHeader title={
                <>Addressable Segments
                    <CustomizedTooltipSmall title="Addressable segments let you target multiple devices at the single-address level, using several data sources to create your target audience based on demographic, interest, or purchase intent. A minimum of 1 segment must be applied to each addressable audience." placement="top">
                        <IconButton>
                            <Info />
                        </IconButton>
                    </CustomizedTooltipSmall>  (Addressable Display) </>} />
            <CardContent>
            <Grid2
              container
              spacing={2}
              justify="center"
            >
                <Grid2 size={{sm:12, md:6}}>
                    <Accordion  elevation={0}
        sx={{
            '&:before': {
                display: 'none',
            }
        }}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                        Demographic
                        </AccordionSummary>
                        <AccordionDetails>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Age Range
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="18-20" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="21-24" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="25-29" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="30-34" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="35-39" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="40-44" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="45-49" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="50-54" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="55-59" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="60-64" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="65-69" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="70-74" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="75+" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Education
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Primary Education" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Secondary Education" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="College Education" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Employment Role
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Work from Home" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Director/Managerial" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Homemaker/Domestic Work" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Office Worker" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Part-Time Worker" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Professional" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Public Sector" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Retired" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Self Employed" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Shop Worker" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Skilled/Manual Work" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Student" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Unemployed" />
                                </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Employment Status
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Retired" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Student" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Part-Time" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Full-Time" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Self-Employed" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Unemployed/Job Seeker" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Unemployed" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Military" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Veteran" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Gender
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Female" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Male" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Unknown Gender" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Household Income (USD)
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Less than $10,000" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$10,000-$14,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$15,000-$19,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$20,000 - $39,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$40,000 - $49,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$50,000 - $74,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$75,000 - $99,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$100,000 - $149,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$150,000-$174,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$175,000-$199,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$200,000-$249,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$250,000+" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Length of Residence
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Less Than 1 Year" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="1 year" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="2 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="3 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="4 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="5 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="6 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="7 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="8 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="9 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="10 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="11 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="12 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="13 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="14 years" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="15 years" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Household Data
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Adults (no children)" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Parents with Children" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Grandparents, Parents and Children" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Grandparents with Children" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Empty Nest (Adults, Children left home)" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="1 Adult" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="2 Adults" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="3+ Adults" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="0 Child" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="1 Child" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="2 Child" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="3+ Child" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="1 person" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="2 people" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="3 people" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="4 people" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="5 people" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="6+ People" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Parents with Toddlers" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Parents with Infants" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Median Home Value (USD)
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$0-$99,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$100,000-$199,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$200,000-$299,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$300,000-$399,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$400,000-$499,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$500,000-$599,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$600,000-$699,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$700,000-$799,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$800,000-$899,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$900,000-$999,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$1,000,000+" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Ownership
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Home Owners" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Renters" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="First Time Homeowner" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Boat Owner" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Intent to sell House" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Property Type
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Multiple Family" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Single Family" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Urbanization
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Rural" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Marital Status
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Co-Habiting" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Married" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Single" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Income (USD)
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$10,000-$14,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$15,000-$19,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$20,000 - $39,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$40,000 - $49,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$50,000 - $74,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$75,000 - $99,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$100,000 - $149,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$150,000-$174,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$175,000-$199,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$200,000-$249,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$250,000+" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Personal Level Affluence (USD)
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Less than $10,000" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$10,000-$14,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$15,000-$19,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$20,000 - $39,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$40,000 - $49,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$50,000 - $74,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$75,000 - $99,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$100,000 - $149,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$150,000-$174,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$175,000-$199,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$200,000-$249,999" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$250,000-$500,000" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$500,000-$1,000,000" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="$1,000,000+" />
                                    </FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Personal Level Affluence Band
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Negative Net Worth" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Very Low Net Worth" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Low Net Worth" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Mid Net Worth" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="High Net Worth" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Super High Net Worth" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Ethnicity
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="African American" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Asian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Asian American" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Central or Southwest Asian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Eastern European" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Far East Asian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Hispanic or Latino" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Indian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Mediterranean" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Middle Eastern" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Native American" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Polynesian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Scandinavian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Southeast Asian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Western European" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Language
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Arabic" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Bengali" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Bosnian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Bulgarian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Chinese (Mandarin, Cantonese, Other)" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Croatian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Czech" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Danish" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Dutch" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Finnish" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="French" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="German" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Greek" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Hebrew" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Hindi" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Hungarian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Indonesian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Italian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Japanese" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Korean" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Malay" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Norwegian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Polish" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Portuguese" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Romanian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Russian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Serbian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Slovak" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Slovenian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Spanish" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Spanish Bilingual" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Swahili" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Swedish" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Thai" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Turkish" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Vietnamese" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Occupation
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Account Executive" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Accountant" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Accounting/Biller/Billing Clerk" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Advertising" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Analyst" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Architect" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Armed Forces" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Auditor" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Auto Mechanic" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Baker" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Banker" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Barber/Hairstylist/Beautician" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Bartender" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Blue Collar Worker" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Broker/Stock/Trader" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Carpenter/Furniture/Woodworking" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="CEO/CFO/Chairman/Corp Officer" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Child Care/Day Care/Babysitter" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Chiropractor" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Clerk" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Computer Programmer" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Construction" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Consultant/Advisor" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Contractor" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Cook" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Customer Service/Representative" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Dental Assistant" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Dentist" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Driver/Truck Driver" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Educator" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Electrician" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Engineer" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Finance" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Food Service" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Gardener/Landscaper" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Health Care" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Insurance/Agent" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Legal/Attorney/Lawyer" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Nurse" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Optometrist" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Pharmacist/Pharmacy" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Pilot" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Plumber" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Police/Trooper" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Psychologist" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Real Estate/Realtor" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Sales" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Social Worker/Case Worker" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Teacher" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Therapist" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Veterinarian" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Mental Health Professional" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Farmers" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Political Affiliation 
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Democrat" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Independent" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Republican" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Conservative" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Liberal" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Moderates" />
                                    </FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Pet Owner
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Cat Owner" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Dog Owner" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Other Pet Owner" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Characteristics
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Charitable Donors" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Political Donors" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="GOP Political Donors" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Dem Political Donors" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Affiliations
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Union Members" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Small Business Owners" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Registration & Partisanship
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Registered Voters" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Unregistered/Voter Prospects" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Social Liberal" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Social Conservative" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Voting Habits
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Likely to Vote" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Unlikely to Vote" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Likely to Vote Democrat" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Likely to Vote Republican" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Likely to Vote Independent" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Religion
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Catholic" />
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Jewish" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion  elevation={0}
        sx={{
            '&:before': {
                display: 'none',
            }
        }}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                        Interest
                        </AccordionSummary>
                        <AccordionDetails>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Academic Interests
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Counseling" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="History" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Music and Art" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Philosophy" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Language Learning" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Animals and Veterinary Science" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Biology" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Medicine and Healthcare" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nutrition" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Clinical Science" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Genetics" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Electrical Engineering" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mechanical Engineering" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chemistry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Environmental Science and Sustainability" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Research Methods" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Geography" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Geology" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Physics" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Space and Astronomy" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Psychology" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="International Relations" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Research Paper Writing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Statistics" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Law" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Economics" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Education" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Governance and Society" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Automotive
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Auto Buying and Selling" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Auto Shows" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Auto Technology" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Budget Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Car Culture" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Classic Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Driverless Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Green Vehicles" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Luxury Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Motorcycles" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Performance Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Scooters" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Books and Literature
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Art and Photography Books" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Biographies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Children's Literature" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Comics and Graphic Novels" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cookbooks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fiction" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Poetry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Travel Books" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Young Adult Literature" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Business
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Business Accounting & Finance" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Human Resources" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Large Business" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Logistics" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Marketing and Advertising" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sales" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Small and Medium-sized Business" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Startups" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Business Administration" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Angel Investment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bankruptcy" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Business Loans" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Debt Factoring & Invoice Discounting" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mergers and Acquisitions" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Private Equity" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Venture Capital" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Business I.T." />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Business Operations" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Consumer Issues" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Executive Leadership & Management" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Government Business" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Green Solutions" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Business Utilities" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Economy
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Commodities" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Currencies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Financial Crisis" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Financial Reform" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Financial Regulation" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Gasoline Prices" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Housing Market" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Interest Rates" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Job Market" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Industries
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Advertising Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Education Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Entertainment Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Environmental Services Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Financial Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Food Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Healthcare Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hospitality Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Information Services Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Legal Services Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Logistics and Transportation Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Agriculture" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Management Consulting Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Manufacturing Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mechanical and Industrial Engineering Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Media Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Metals Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Non-Profit Organizations" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pharmaceutical Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Power and Energy Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Publishing Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Real Estate Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Apparel Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Retail Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Technology Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Telecommunications Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Automotive Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Aviation Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Biotech and Biomedical Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Civil Engineering Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Construction Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Defense Industry" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Careers
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Apprenticeships" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Career Advice" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Career Planning" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Remote Working" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Vocational Training" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Education
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Adult Education" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Language Learning" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Online Education" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Parenting
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Daycare and Pre-School" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Internet Safety" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Parenting Babies and Toddlers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Parenting Children Aged 4-11" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Parenting Teens" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Children with Special Needs" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Fine Art
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Costume" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dance" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Design" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Digital Arts" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fine Art Photography" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Modern Art" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Opera" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Theater" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Food & Drink
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Alcoholic Beverages" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Barbecues and Grilling" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cooking" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Desserts and Baking" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dining Out" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Food Allergies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Food Movements" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Healthy Cooking and Eating" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Non-Alcoholic Beverages" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Vegan Diets" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Vegetarian Diets" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="World Cuisines" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Medical Services
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Health Services" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Elder Care" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Vision Care" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dental Care" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Massage Therapists" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Physical Therapists" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chiropractors" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hospitals" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Smoking Cessation" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hair Loss Treatments" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mental Health" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pain Management" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Orthopedics" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Back Pain" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Arthritis" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Healthy Living
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Children's Health" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Participant Sports" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Running and Jogging" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Men's Health" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nutrition" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Senior Health" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Weight Loss" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Herbs and Supplements" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Holistic Health" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Physical Therapy" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Smoking Cessation" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Women's Health" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Active and Healthy Living" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="CrossFit US" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Hobbies & Interests
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Antiquing and Antiques" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Beadwork" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Candle and Soap Making" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Drawing and Sketching" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jewelry Making" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Needlework" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Painting" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Photography" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Scrapbooking" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Woodworking" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Beekeeping" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Birdwatching" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cigars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Comic Books" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Stamps and Coins" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audio Production" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Freelance Writing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Screenwriting" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Video Production" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Board Games and Puzzles" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Card Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Roleplaying Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Genealogy and Ancestry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Magic and Illusion" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Model Toys" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Musical Instruments" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Paranormal Phenomena" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Radio Control" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sci-fi and Fantasy" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Workshops and Classes" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Home & Garden
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Gardening" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Home Entertaining" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Home Improvement" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Interior Decorating" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Landscaping" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Outdoor Decorating" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Remodeling & Construction" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Smart Home" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Movies
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Action and Adventure Movies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Animation Movies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Comedy Movies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Crime and Mystery Movies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Documentary Movies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Drama Movies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Family and Children Movies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fantasy Movies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Horror Movies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Indie and Arthouse Movies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Romance Movies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Science Fiction Movies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="World Movies" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Music and Audio
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Adult Album Alternative" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Soft AC Music" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Urban AC Music" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Alternative Music" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Blues" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Children's Music" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Classic Hits" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Classical Music" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="College Radio" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Comedy (Music and Audio)" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Contemporary Hits/Pop/Top 40" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Country Music" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dance and Electronic Music" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Gospel Music" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hip Hop Music" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Inspirational/New Age Music" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jazz" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Oldies/Adult Standards" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="R&B/Soul/Funk" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Reggae" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Religious (Music and Audio)" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Alternative Rock" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Classic Rock" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hard Rock" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Soft Rock" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Songwriters/Folk" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Soundtracks, TV and Showtunes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sports Radio" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Business News Radio" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Educational Radio" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="News Radio" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="News/Talk Radio" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Public Radio" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Urban Contemporary Music" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Variety (Music and Audio)" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="World/International Music" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                News and Politics
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Crime" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Disasters" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="International News" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Law" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Local News" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="National News" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Elections" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Political Issues" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="War and Conflicts" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Weather" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Personal Finance
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Frugal Living" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Insurance" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Personal Debt" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Personal Investing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Personal Taxes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Retirement Planning" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Medical Insurance Policy Holders" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Debt Management" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Pets
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Birds" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cats" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dogs" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fish and Aquariums" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Horses and Equine" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Large Animals" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pet Adoptions" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Reptiles" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pet Accessories" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pet Supplies" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Pop Culture
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Humor and Satire" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Real Estate
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Apartments" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Developmental Sites" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hotel Properties" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Houses" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Industrial Property" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Land and Farms" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Office Property" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Real Estate Buying and Selling" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Real Estate Renting and Leasing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Retail Property" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Vacation Properties" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Sports
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="American Football" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Australian Rules Football" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Motorcycle Sports" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Badminton" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Baseball" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Basketball" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Beach Volleyball" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bodybuilding" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bowling" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Boxing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cheerleading" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="College Football" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="College Basketball" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="College Baseball" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cricket" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cycling" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Darts" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Diving" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Horse Racing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Canoeing and Kayaking" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Climbing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Paintball" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Scuba Diving" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Skateboarding" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Snowboarding" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Surfing and Bodyboarding" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Waterskiing and Wakeboarding" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fantasy Sports" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Field Hockey" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Figure Skating" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fishing Sports" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Golf" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Gymnastics" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hunting and Shooting" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ice Hockey" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Inline Skating" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lacrosse" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Martial Arts" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Summer Olympic Sports" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Winter Olympic Sports" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Poker and Professional Gambling" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Rodeo" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Rowing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Rugby League" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Rugby Union" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sailing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Skiing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Snooker/Pool/Billiards" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Soccer" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Softball" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sports Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Squash" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Swimming" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Table Tennis" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tennis" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Track and Field" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volleyball" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Walking" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Water Polo" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Weightlifting" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Wrestling" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pickleball/Racquet Sports" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Marathon Running" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Style & Fashion
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Beauty" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Body Art" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Children's Clothing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Designer Clothing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fashion Trends" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="High Fashion" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Men's Fashion" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Personal Care" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Street Style" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Women's Fashion" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Technology & Computing
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Artificial Intelligence" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Augmented Reality" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Internet" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cloud Computing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Web Development" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Web Hosting" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Internet for Beginners" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Internet of Things" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="IT and Internet Support" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Search" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Social Networking" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Web Design and HTML" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Programming Languages" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Consumer Electronics" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Robotics" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Virtual Reality" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Television
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Animation TV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Children's TV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Comedy TV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Drama TV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Factual TV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Holiday TV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Music TV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Reality TV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Science Fiction TV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Soap Opera TV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Special Interest TV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sports TV" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Travel
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Adventure Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Africa Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Asia Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Australia and Oceania Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Beach Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Camping" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Day Trips" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Europe Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Family Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="North America Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Polar Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Road Trips" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="South America Travel" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Video Gaming
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Console Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="eSports" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mobile Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="PC Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Action Video Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Role-Playing Video Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Simulation Video Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sports Video Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Strategy Video Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Action-Adventure Video Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Adventure Video Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Casual Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Educational Video Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Exercise and Fitness Video Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="MMOs" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Music and Party Video Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Puzzle Video Games" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Issues
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Supports Green Energy" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Supports Renewable Energy" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Supports Climate Change Action" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Supports Environmental Restoration" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pro Trump" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Anti Trump" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pro Biden" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Anti Biden" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Support Immigration Reform" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pro-Choice" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pro-Life" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="LGBTQ Rights" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Support Gun Control" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pro 2nd Amendment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Support Campaign Finance Reform" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Supports Marijuana Reform" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Supports Education Reform" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Interest in National Security" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Interest in Economy & Unemployment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Interest in Labour Laws" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Interest in Human Rights" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Interest in Child Welfare" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Personal Habits
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Heavy Social Media Users" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Non Social Media Users" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Heavy TV Users" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Low TV Users" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="High Usage Streamers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Likely Streaming Users" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Likely Cable Subscribers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Stream Only, No TV (Cord Cutter)" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Newspaper Readers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Light Newspaper Readers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Watches Political TV - Liberal" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Watches Political TV - Conservative" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Interest in Financial News" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion  elevation={0}
        sx={{
            '&:before': {
                display: 'none',
            }
        }}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                        Purchase Intent
                        </AccordionSummary>
                        <AccordionDetails>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Apps
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Auto and Vehicles Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Books Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Business Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Education Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Entertainment Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Finance Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Food and Drink Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Health and Fitness Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lifestyle Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Magazine and Newspapers Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Medical Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Music Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Navigation Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Productivity Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Reference Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Search Engine Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Shopping Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Social Networking Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sports Apps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Weather Apps" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Arts and Entertainment
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Blogs/Forums/Social Networks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Culture and Fine Arts" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Concerts" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Theatre and Musicals" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Museums and Galleries" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sporting Events" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cinemas and Movie Events" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Aviation Shows" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fairs and Farmer's Markets" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Exhibitions" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Theme and Amusement Parks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Parks and Wildlife" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Auto Shows" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nightclubs" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fashion Events" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Comedy Events" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Zoos and Aquariums" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fan Conventions" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fantasy Sports" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Music and Video Streaming Services" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Online Entertainment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ticket Services" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="TV" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                New Vehicles
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Commercial Trucks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sedan" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Station Wagon" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="SUV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Van" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Convertible" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Coupe" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Crossover" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hatchback" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Microcar" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Minivan" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Off-Road Vehicles" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pickup Trucks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Budget Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Classic Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Driverless Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Green Vehicles" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Luxury Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Performance Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Motorbikes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Other Vehicles" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Pre-Owned Vehicles
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Commercial Trucks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sedan" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Station Wagon" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="SUV" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Van" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Convertible" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Coupe" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Crossover" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hatchback" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Microcar" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Minivan" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Off-Road Vehicles" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pickup Trucks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Budget Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Classic Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Green Vehicles" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Luxury Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Performance Cars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Motorbikes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Other Vehicles" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Automotive Products
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Automotive Care Products" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Car Seats" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Car Speakers" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Automotive Services
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Auto Rental" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Car Wash" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Beauty Services
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Beauty Salons and Tanning" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hair Salons" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nail Salons" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Piercing and Tattooing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Spas" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Business and Industrial
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Advertising and Marketing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Auctions" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Conferences/Events/Seminars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Construction" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Oil, Gas and Consumable Fuels" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Electric Power Industry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Forestry and Logging" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Government" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Human Resources" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Industrial Storage" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Aerospace and Defense" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Construction and Engineering" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Industrial Conglomerates" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Trading Companies and Distributors" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Transportation" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Laundry and Dry Cleaning Services" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Law Enforcement" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Manufacturing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Material Handling" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Medical and Biotechnology" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mining and Quarrying" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Photographers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cell Phone Stores" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Music Stores" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Shopping Malls" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Department Stores" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Specialty Stores" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pawn Shops" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Signage" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Small Business" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Clothing and Accessories
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Children's Clothing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Men's Clothing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Women's Clothing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sportswear" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Clothing Accessories" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Costumes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Footwear" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Handbags and Wallets" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jewelry and Watches" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sunglasses" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Collectables and Antiques
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Antiques" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Collectibles" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sports Memorabilia" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Stamps" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Consumer Electronics
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Headphones" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cameras" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Laptops" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Desktops" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="E-Readers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Home Theater Systems" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tablets" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Televisions" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Camcorders" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Video Games and Consoles" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Coffee & Tea
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Coffee" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Coffee Creamer" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Coffee Filters" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Drink Mixes
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cocktail Mixes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Drink Mixes" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Juices
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bottled Juices" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Canned Juices" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Juice/Drink Concentrate" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Non-Fruit Drinks
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Non-Fruit Drinks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Powdered Milk" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Sports/Energy Drinks
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Energy Drinks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sports Drinks" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Water
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bottled Water" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Frozen Baked Goods
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cookies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pies" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Frozen Beverages
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Juices" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Frozen Desserts
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Desserts/Toppings" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ice Cream/Sherbet" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Novelties" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Frozen Fruits & Vegetables
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fruit" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Plain Vegetables" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Potatoes/Onions" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Prepared Vegetables" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Frozen Meals
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Breakfast Food" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dinners/Entrees" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pasta" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pizza" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Soups/Sides/Other" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Frozen Meat/Poultry/Seafood
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Meat" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Poultry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Processed Poultry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Seafood" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Frozen Snacks
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Appetizers/Snack Rolls" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Other Snacks" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Bakery
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bagels/Bialys" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bakery Snacks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="English Muffins" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fresh Bread & Rolls" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pastry/Doughnuts" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pies & Cakes" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Baking
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Baking Mixes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Baking Needs" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Baking Nuts" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dessert Toppings" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Egg Substitute" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Flour/Meal" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Frosting" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ice Cream Cones/Mixes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Marshmallows" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Shortening & Oil" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Spices/Seasonings" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sugar" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sugar Substitutes" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Breakfast
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cold cereal" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hot Cereal" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pancake Mixes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Syrup" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toaster Pastries/Tarts" />
</FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Candy
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Breath Fresheners" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chocolate Candy" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Gum" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Non-Chocolate Candy" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Condiments & Sauces
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Barbeque Sauce" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Gravy/Sauce Mixes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mayonnaise" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mustard & Ketchup" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nut Butter" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Other Sauces" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pickles/Relish/Olives" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Salad Dressing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Salad Toppings and Croutons" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Steak/Worcestershire Sauce" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Vinegar" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Cookies & Crackers
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cookies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Crackers" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Meals
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Baked Beans/Canned Bread" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dinners" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dry Packaged Dinner Mixes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Grated Cheese" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Instant Potatoes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Meat" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pasta" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pizza Products" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Rice" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Seafood" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Soup" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Spaghetti/Italian Sauce" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Stuffing Mixes" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Snacks
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dip/Dip Mixes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dried Meat Snacks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dry Fruit Snacks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Other Snacks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Popcorn/Popcorn Oil" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Rice/Popcorn Cakes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Salty Snacks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Snack Bars/Granola Bars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Snack Nuts/Seeds/Corn Nuts" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Fruit
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Canned/Bottled Fruit" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dried Fruit" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Vegetables
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tomato Products" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Vegetables" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Refrigerated" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Dairy
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cottage Cheese" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Creams/Creamers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fresh Eggs" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Margarine/Spreads" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Milk" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Natural Cheese" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Processed Cheese" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sour Cream" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Whipped Toppings" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Yogurt" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Refrigerated Baked Goods
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Baked Goods" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Refrigerated Beverages
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Juices/Drinks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tea/Coffee" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Refrigerated Condiments
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dips" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Refrigerated Desserts
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cheesecakes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Desserts" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Refrigerated Dough
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dough/Biscuit Dough" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pizza" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Refrigerated Meals
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Entrees" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lunches" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Meat Pies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pasta" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Side Dishes" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Refrigerated Meats
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Breakfast Meats" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dinner Sausage" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Frankfurters" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ham" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Luncheon Meats" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Meat" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Seafood" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Cosmetics
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Storage" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Eye" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Facial" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lip" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cosmetics Accessories" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Grooming Supplies
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cotton Balls/Swabs" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hair Appliances" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Other Grooming Supplies" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Hair Care
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hair Accessories" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hair Coloring" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hair Conditioner" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hair Growth Products" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hair Spray/Spritz" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hair Styling Gel/Mousse" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Home Permanent/Relaxer Kits" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Shampoo" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Personal Cleansing
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bath Products" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bath/Body Scrubbers/Massagers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Deodorant" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Moist Towelettes" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Soap" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Shaving
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Blades" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Razors" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Shaving Cream" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Skin Care
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hand & Body Lotion" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Suntan Products" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Barbeque
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Charcoal" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Electronics/Photography
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Batteries" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Photography Supplies" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Foils, Wraps, & Bags
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Foil Pans" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Foils & Wraps" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Food & Trash Bags" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Hosiery
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Socks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tights" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Household/Plastics/Storage
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bottles" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Drinkware" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Household Plastics" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kitchen Storage" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Soap Dishes" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Miscellaneous General Merch
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Candles" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Culinary" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Flashlights" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Gloves" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Household Lubricants" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Light Bulbs" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Outdoor/Lawn Fertilizer/Weed Killer" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Playing Cards" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pool/Spa Chemicals" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Shoe Polish & Accessories" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pain Reliever" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Office/School Supplies
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Office Products" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Writing Instruments" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Paper Products
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Facial Tissue" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Paper Napkins" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Paper Towels" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toilet Tissue" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Pest Control
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Outdoor Insect/Rodent Control Chem" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Pet Care
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cat Litter" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pet Food" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pet Supplies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pet Treats" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Water Treatment
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Water Filters/Devices" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Water Softeners/Treatment" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Household Appliances
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Air Conditioners" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Blenders" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Coffee Makers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dehumidifiers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dishwashers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fans" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Freezers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Heaters" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Juicers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Microwave Ovens" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mixers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ovens" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ranges" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Refrigerators" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Vacuums" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Washers and Dryers" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Household Cleaning
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cleaning Tools/Mops/Brooms" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dish Detergent" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Household Cleaner" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Household Cleaner Cloths" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Rug/Upholstery/Fabric Treatment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sponges & Scouring Pads" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Laundry
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bleach" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fabric Softener" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Laundry Care" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Laundry Detergent" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Home and Garden Products
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bathroom Accessories" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Home Decor" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bedroom Furniture" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fireplaces" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lighting" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Plants" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Housewares" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Rugs and Carpets" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Baby and Toddler Products
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Baby Bath Products" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Baby Gift Sets" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Diapers" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Media
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Magazines and Newspapers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="DVDs" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audio Books" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Vinyl Records" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Toys and Games
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Games" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Outdoor Play Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Puzzles" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toys" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Education and Careers
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Adult Education" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Career Improvement and Advice" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Colleges and Universities" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Employment Agencies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Language Learning" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Online Education" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Teaching Resources" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Family and Parenting
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kids Activities" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Finance and Insurance
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Accountants" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Banking" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Credit Cards" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Auto Insurance" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Home Insurance" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Life Insurance" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Medical Insurance" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Payday Loans" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Retirement Planning" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Student Financial Aid" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tax Preparation Services" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Food and Beverage Services
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bakeries" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bars" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Catering" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fast Food" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Food Delivery Services" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Restaurants" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Furniture
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cabinets" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chairs" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Outdoor Furniture" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Shelving" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Sofas" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tables" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Gifts and Holiday Items
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Flowers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Gift Baskets" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Gift Cards" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Greeting Cards" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Party Goods" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Hardware Supplies
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Building Materials" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Building Supplies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Electrical Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hardware Accessories" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Machinery" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Plumbing Supplies" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tools" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Health and Medical Services
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chiropractors" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dental Care" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Elder Care" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hair Loss" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Health Services" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hospitals" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Massage Therapists" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Physical Therapists" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Smoking Cessation" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Vision Care" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Hobbies and Interests
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Arts and Crafts" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Musical Instruments" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Workshops and Classes" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Home and Garden Services
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Appliance Repair" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Emergency Preparedness" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Landscaping Services" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Plumbers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Remodeling and Construction" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Legal Services
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Attorneys" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Life Events
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Anniversary" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Birthdays" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Births" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Graduations" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Weddings" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Logistics and Delivery
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Shipping Services" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Storage Facilities" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Non-Profits
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="NGOs" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Office Equipment and Supplies
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Office Furniture" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Stationery" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Pet Services
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pet Grooming" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Pet Stores" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Veterinary Services" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Real Estate
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Commercial Real Estate" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Real Estate Sales" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Residential Real Estate" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Recreation and Fitness Activities
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dance Studios" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Gyms and Health Clubs" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Personal Trainers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Yoga Studios" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Software
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="3-D Graphics" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Photo Editing Software" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Shareware and Freeware" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Video Software" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Web Conferencing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Antivirus Software" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Browsers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Computer Animation" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Databases" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Desktop Publishing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Digital Audio" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Graphics Software" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Operating Systems" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Productivity Software" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Sporting Goods
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Baseball and Softball Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Basketball Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hockey Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Football Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Gymnastics Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Soccer Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tennis Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volleyball Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Camping and Hiking Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bicycles Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Equestrian Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fishing Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Golf Equipment" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Winter Sports Equipment" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Travel and Tourism
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Adventure Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Air Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Auto Rental" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Beach Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bed and Breakfasts" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Budget Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Taxi Services" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ride-sharing" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Camping" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Coach Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cruise Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Day Trips" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Family Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Honeymoons and Getaways" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hotels and Resorts" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Motels" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Passenger Transportation" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Rail Travel" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Road Trips" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Spas" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Timeshares" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Travel Insurance" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Web Services
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Internet Providers" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Web Hosting" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Auto Make
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Acura" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Alfa Romeo" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Aston Martin" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bentley" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Buick" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cadillac" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chrysler" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dodge" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ferrari" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fiat" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="GMC" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Honda" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jaguar" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jeep" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Land Rover" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lexus" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lincoln" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Maserati" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mazda" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mercedes Benz" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mini" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mitsubishi" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Porsche" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ram" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Rolls Royce" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Subaru" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tesla" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volkswagen" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volvo" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                Auto Model
                                </AccordionSummary>
                                <AccordionDetails>
                                <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Acura ILX" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Acura MDX" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Acura NSX" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Acura RDX" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Acura RLX" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Alfa Romeo Giulia" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Alfa Romeo Stelvio" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Aston Martin DB11" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Aston Martin DBS" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Aston Martin Vantage" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Aston Martin Vanquish" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi A3" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi A4" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi A5" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi A6" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi A7" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi A8" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi Q3" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi Q4" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi R8" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi RS 2" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi RS 3" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi RS 4" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi RS 7" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi S2" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi S3" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi S4" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Audi S6" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bentley Continental" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bentley Flying Spur" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW 2 Series" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW 3 Series" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW 4 Series" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW 5 Series" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW 6 Series" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW 7 Series" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW X1" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW X2" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW X3" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW X5" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW X7" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="BMW Z4" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Buick Enclave" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Buick Encore" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Buick Envision" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cadillac XT4" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cadillac XT5" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cadillac XT6" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Cadillac Escalade" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Blazer" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Bolt" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Camaro" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Colorado" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Corvette" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Cruze" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Equinox" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Impala" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Malibu" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Silverado 1500" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Silverado 2500" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Silverado 3500" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Spark" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Suburban" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Tahoe" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Trailblazer" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Traverse" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chevrolet Trax" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chrysler 300" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Chrysler Pacifica" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dodge Challenger" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dodge Charger" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dodge Dart" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dodge Durango" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dodge Grand Caravan" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dodge Journey" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Dodge Viper" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ferrari 488 GTB" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ferrari 488 Spider" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Fiat 500" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Bronco" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford EcoSport" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Edge" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Escape" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Expedition" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Explorer" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford F150" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Fiesta" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Focus" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Fusion" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Mustang" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Mustang Mach-E" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Ranger" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Super Duty" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ford Taurus" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="GMC Acadia" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="GMC Canyon" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="GMC Sierra 1500" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="GMC Sierra 2500" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="GMC Sierra 3500" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="GMC Terrain" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="GMC Yukon" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Honda Accord" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Honda Civic" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Honda CR-V" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Honda Fit" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Honda HR-V" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Honda Insight" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Honda Odyssey" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Honda Passport" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Honda Pilot" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Honda Ridgeline" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai Accent" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai Elantra" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai Genesis" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai Ioniq" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai Kona" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai Palisade" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai Santa Cruz" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai Santa Fe" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai Sonata" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai Tucson" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai Veloster" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Hyundai Venue" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti EX37" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti FX37" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti G37" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti JX35" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti M37" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti Q40" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti Q70" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti Q70L" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti QX30" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti QX50" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti QX60" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti QX70" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Infiniti QX80" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jaguar F-Pace" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jaguar F-Type" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jaguar XE" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jaguar XF" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jaguar XJ" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jeep Cherokee" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jeep Compass" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jeep Gladiator" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jeep Grand Cherokee" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jeep Patriot" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jeep Renegade" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jeep Wagoneer" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Jeep Wrangler" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia Carnival" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia Forte" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia K5" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia Niro" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia Optima" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia Rio" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia Sedona" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia Seltos" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia Sorento" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia Soul" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia Sportage" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia Stinger" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Kia Telluride" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Land Rover Defender" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Land Rover Discovery" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Land Rover Range Rover" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lexus ES" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lexus GS" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lexus GX" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lexus IS" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lexus LS" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lexus NX" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lexus RX" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lincoln Aviator" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lincoln Corsair" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lincoln MKC" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lincoln MKS" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lincoln MKT" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lincoln MKX" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lincoln MKZ" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lincoln Nautilus" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Lincoln Navigator" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mazda CX-5" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mazda CX-3" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mazda CX-9" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mazda CX-30" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mazda Mazda3" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mazda Mazda5" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mazda Mazda6" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mazda MX-5" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mercedes Benz B-Class" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mercedes Benz C-Class" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mercedes Benz CLA-Class" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mercedes Benz CLS-Class" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mercedes Benz E-Class" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mercedes Benz GLA-Class" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mercedes Benz GLS-Class" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mercedes Benz S-Class" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mini Clubman" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mini Convertible" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mini Countryman" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mini Hardtop" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mini Paceman" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mitsubishi I-Miev" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mitsubishi Lancer" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mitsubishi Mirage" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Mitsubishi Outlander" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan Altima" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan Armada" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan Frontier" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan Kicks" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan Leaf" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan Maxima" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan Pathfinder" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan Rogue" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan Sentra" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan Titan" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan Versa" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Nissan GT-R" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Porsche Cayenne" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Porsche Cayman" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Porsche Macan" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Porsche Panamera" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Porsche 718" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Porsche 911" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ram 1500" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ram 2500" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Ram 3500" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Subaru Ascent" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Subaru Crosstrek" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Subaru Forester" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Subaru Impreza" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Subaru Legacy" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Subaru Outback" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Subaru WRX" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tesla Model 3" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tesla Model S" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tesla Model X" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Tesla Model Y" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota 4Runner" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota Avalon" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota C-HR" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota Camry" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota Corolla" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota Highlander" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota Prius" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota RAV4" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota Sequoia" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota Sienna" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota Tacoma" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota Tundra" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota Venza" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Toyota Yaris" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volkswagen Atlas" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volkswagen Beetle" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volkswagen Golf" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volkswagen ID.4" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volkswagen Jetta" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volkswagen Passat" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volkswagen Taos" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volkswagen Tiguan" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volvo S60" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volvo S80" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volvo S90" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volvo XC40" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volvo XC60" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Volvo XC90" />
</FormGroup>

                                </AccordionDetails>
                            </Accordion>
                        </AccordionDetails>
                    </Accordion>
                </Grid2>
                <Grid2 size={{sm:12, md:6}}>hello2</Grid2>
                    
                </Grid2>
            </CardContent>
        </Card>
    )
}

export default SectionAddressableSegments