import React, { useState, memo } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Typography,
  List,
  ListItem,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Box,
  Chip,
  Stack
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Info, ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

import { InnerSectionSearchField } from '@components/CreateProposal';

import { CustomizedTooltipSmall } from "@helperFunctions/CustomTooltips";
import { useDebounce } from '@hooks';

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  "& .MuiAccordionSummary-content": {
    marginTop: 0,
    marginBottom: 0,
  },
}));

const fetchAudianceInterests = async (searchQuery) => {
  const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/partnerApp/getinterestdata`, {
    params: {
      ...(searchQuery ? { search: searchQuery } : {})
    },
  });

  return response.data;
}

const SectionAudienceInterests = () => {
  const [expandedAccordions, setExpandedAccordions] = useState({});
  const [selected, setSelected] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['audienceInterests', debouncedSearchQuery],
    queryFn: () => fetchAudianceInterests(debouncedSearchQuery),
    initialData: [],
    refetchOnWindowFocus: false 
  });

  // Toggle accordion expansion
  const toggleAccordion = (categoryValue) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [categoryValue]: !prev[categoryValue],
    }));
  };

  const handleChipDelete = (index) => {
    setSelected(prev => {
      const newSelected = [...prev];
      newSelected.splice(index, 1);
      return newSelected;
    });
  }

  // Handle checkbox change for category, subcategory, or options
  const handleCheckboxChange = (label) => {
    const isSelected = selected.includes(label);
    if (isSelected) {
      setSelected(selected?.filter((item) => item !== label));
    } else {
      setSelected([...selected, label]);
    }
  };

  // Filter and render categories, subcategories, and options recursively
  const filterCategories = (items) => {
    return items
      ?.map((category) => (
        <Accordion
          key={category.category}
          expanded={expandedAccordions[category.category] || false}
          onChange={() => toggleAccordion(category.category)}
          slotProps={{ transition: { unmountOnExit: true } }}
          elevation={0}
          sx={{ "&:before": { display: "none" } }}
          disableGutters
        >
          <StyledAccordionSummary expandIcon={<ExpandMore />}>
            {/* Checkbox for the main category */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={selected.includes(category.category)}
                  onChange={() => handleCheckboxChange(category.category)}
                />
              }
              label={category.category}
            />
          </StyledAccordionSummary>
          <AccordionDetails>
            {category.subcategories.map((subcategory) => {
              if (subcategory.options.length) {
                  return (
                  <Accordion
                    key={subcategory.subcategory}
                    expanded={expandedAccordions[subcategory.subcategory] || false}
                    onChange={() => toggleAccordion(subcategory.subcategory)}
                    slotProps={{ transition: { unmountOnExit: true } }}
                    elevation={0}
                    sx={{ "&:before": { display: "none" } }}
                    disableGutters
                  >
                    <StyledAccordionSummary expandIcon={<ExpandMore />}>
                      {/* Checkbox for subcategories */}
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selected.includes(subcategory.subcategory)}
                            onChange={() => handleCheckboxChange(subcategory.subcategory)}
                          />
                        }
                        label={subcategory.subcategory}
                      />
                    </StyledAccordionSummary>
                    <AccordionDetails>
                      <List component="div" sx={{py: 0}}>
                          { subcategory.options.map((option) => (
                            <ListItem sx={{py: 0}} key={option}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={selected.includes(option)}
                                    onChange={() => handleCheckboxChange(option)}
                                  />
                                }
                                label={option}
                              />
                            </ListItem>
                          ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                )
              } 
              else {
                return (
                  <List component="div"  sx={{py: 0}} className="hello" key={subcategory.subcategory}>
                    <ListItem sx={{py: 0}}>
                      <FormControlLabel
                          control={
                            <Checkbox
                              checked={selected.includes(subcategory.subcategory)}
                              onChange={() => handleCheckboxChange(subcategory.subcategory)}
                            />
                          }
                          label={subcategory.subcategory}
                        />
                    </ListItem>
                  </List>
                )
              }     
            })}
          </AccordionDetails>
        </Accordion>
      ));
  };

  return (
    <Card sx={{ mt: 4 }}>
      <CardHeader
        title={
          <>
            <Typography variant="h5" sx={{display: "inline", fontWeight: 'bold'}}>Audience Interests</Typography>
            <CustomizedTooltipSmall
              title="Audience interests are used to ensure that your advertiser's ads show on the most relevant content."
              placement="top"
            >
              <IconButton>
                <Info />
              </IconButton>
            </CustomizedTooltipSmall>
            <Typography sx={{display: 'inline'}}>(Display, Keyword Display, Addressable Display, Pre Roll, Keyword Pre Roll, Addressable Pre Roll, YouTube, CTV, Addressable CTV, OTT Plus, Addressable OTT Plus, OTT, Addressable OTT)</Typography>
          </>
        }
      />
      <CardContent>
        <Grid container spacing={2} justify="center">
          <Grid size={{ sm: 12, md: 6 }}>
          <InnerSectionSearchField searchTerm={searchQuery} setSearchTerm={setSearchQuery} />
            <List  sx={{
              maxHeight: 430,
              minHeight: 430,
              overflow: "auto",
            }}>
              {isLoading && <Typography>Loading...</Typography>}
              {isError && <Typography>{error.response ? error.response.data : "Error loading data"}</Typography>}
              {!isLoading && !isError && filterCategories(data)
            }</List>
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <Box maxHeight={500} minHeight={500} borderRadius={1} overflow="auto" bgcolor={`secondary.main`} >
            <Typography variant="h6" sx={{fontWeight: 'bold', p:2, pb: 0}} gutterBottom> Selected Interests </Typography>
              <List sx={{pt: 0}}>
                <ListItem>
                  <Stack direction="row" flexWrap="wrap" columnGap={1} rowGap={2}>
                  {selected.map((item, index) => (
                      <Chip key={index} label={item} sx={{fontSize: 16}} onDelete={()=>handleChipDelete(index)} variant="outlined" />
                    ))}
                    </Stack>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default memo(SectionAudienceInterests);
