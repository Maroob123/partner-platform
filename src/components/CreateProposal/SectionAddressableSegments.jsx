import { useState, memo, useEffect } from 'react';
import { Card, CardHeader, CardContent, IconButton, Grid2, Accordion, AccordionSummary, AccordionDetails, Checkbox, FormGroup, FormControlLabel, Typography, Chip, Box, Stack, Button } from '@mui/material';
import { Info, ExpandMore, AddCircleOutline, HighlightOff} from '@mui/icons-material';
import { styled } from "@mui/material/styles";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

import { CustomizedTooltipSmall } from '@helperFunctions/CustomTooltips';
import { useDebounce } from '@hooks';

import { InnerSectionSearchField } from '@components/CreateProposal';

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  "& .MuiAccordionSummary-content": {
    marginTop: 0,
    marginBottom: 0,
  },
}));

const fetchAudienceSegments = async (searchQuery) => {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/partnerApp/getdata`, {
      params: {
        ...(searchQuery ? { search: searchQuery } : {})
      },
    });
    return response.data;
};

function SectionAddressableSegments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedData, setSelectedData] = useState([[]]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSubcategories, setExpandedSubcategories] = useState({});
  const [expandedAudience, setExpandedAudience] = useState(0);
  const debouncedSearchQuery = useDebounce(searchTerm, 1000);


  const { data: categoriesData, isLoading, error, isError } = useQuery({
    queryKey: ['audienceSegments', debouncedSearchQuery],
    queryFn: () => fetchAudienceSegments(debouncedSearchQuery),
    initialData: [],
    refetchOnWindowFocus: false
  });

  useEffect(()=>{
console.log("expandedAudience", expandedAudience)
  },[expandedAudience])

  const handleAudienceChange = (index) => (event, isExpanded) => {
    const defaultOpenAccordion = index === selectedData.length - 1 ? index - 1 : index + 1;
    console.log("defaultOpenAccordion", defaultOpenAccordion)
    setExpandedAudience(isExpanded ? index : defaultOpenAccordion);
  };

  const handleAddAudience = () => {
    setSelectedData(prev => [...prev, []])
    setExpandedAudience(+selectedData.length);
  }

  const handleRemoveAudience = (event, index) => {
    event.stopPropagation();
    setSelectedData(prev => {
      const newSelected = [...prev];
      newSelected.splice(index, 1);
      return newSelected;
    });
  }

  const handleCategoryToggle = (category) => {
    setExpandedCategories((prevExpanded) => ({
      ...prevExpanded,
      [category]: !prevExpanded[category]
    }));
  };

  const handleSubcategoryToggle = (subcategory) => {
    setExpandedSubcategories((prevExpanded) => ({
      ...prevExpanded,
      [subcategory]: !prevExpanded[subcategory]
    }));
  };

  const handleCheckboxChange = (category, subcategory, option) => {
    setSelectedData((prevData) => {
      const audienceData = prevData[expandedAudience] || [];
      const exists = audienceData.find(
        (item) => item.option === option && item.subcategory === subcategory
      );
  
      if (exists) {
        // Remove the existing option
        const updatedAudienceData = audienceData.filter(
          (item) => !(item.option === option && item.subcategory === subcategory)
        );
        const updatedData = [...prevData];
        updatedData[expandedAudience] = updatedAudienceData;
        return updatedData;
      } else {
        // Add the new option
        const updatedAudienceData = [
          ...audienceData,
          { category, subcategory, option }
        ];
        const updatedData = [...prevData];
        updatedData[expandedAudience] = updatedAudienceData;
        return updatedData;
      }
    });
  };

  const handleChipDelete = (category, subcategory, option) => {
    setSelectedData((prevData) => {
      const audienceData = prevData[expandedAudience] || [];
      const updatedAudienceData = audienceData.filter(
        (item) => !(item.option === option && item.subcategory === subcategory)
      );
  
      const updatedData = [...prevData];
      updatedData[expandedAudience] = updatedAudienceData;
      
      return updatedData;
    });
  };  

  const renderSelectedData = (index) => {
    const groupedData = selectedData[index].reduce((acc, curr) => {
      const key = `${curr.category} > ${curr.subcategory}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr.option);
      return acc;
    }, {});

    const selectedChips = Object.keys(groupedData).map((key, index) => (
      <Box key={index}>
        <Typography sx={{ pb: 1 }}>{key}:</Typography>
        <Stack
          direction="row"
          divider={<Typography sx={{fontSize: 18}}>OR</Typography>}
          flexWrap="wrap"
          gap={1}
          alignItems="center"
        >
          {groupedData[key].map((option, optionIndex) => (
            <Chip
              key={optionIndex}
              label={option}
              sx={{fontSize: 16}}
              onDelete={() => handleChipDelete(key.split(' > ')[0], key.split(' > ')[1], option)}
              variant="outlined"
            />
          ))}
        </Stack>
      </Box>
    ));

    return (
      <Stack spacing={2} divider={<Typography fontWeight="bold">AND</Typography>}>
        {selectedChips}
      </Stack>
    )
  };

  return (
    <Card sx={{ mt: 4 }}>
      <CardHeader title={
        <>
        <Typography variant="h5" sx={{display: "inline", fontWeight: 'bold'}}>Addressable Segments</Typography>
          <CustomizedTooltipSmall title="Addressable segments let you target multiple devices at the single-address level, using several data sources to create your target audience based on demographic, interest, or purchase intent. A minimum of 1 segment must be applied to each addressable audience." placement="top">
            <IconButton>
              <Info />
            </IconButton>
          </CustomizedTooltipSmall>
          <Typography sx={{display: 'inline'}}>(Addressable Display, Addressable Pre Roll, Addressable CTV, Addressable OTT Plus, Addressable OTT, Addressable Streaming Audio)</Typography> </>
      } />
      <CardContent>
        <Grid2 container spacing={2} justify="center">
          <Grid2 size={{ sm: 12, md: 6 }}>
            {/* Search Bar */}
            <InnerSectionSearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {/* Nested Accordions */}
            <Box maxHeight={430} minHeight={430} overflow="auto">
            {isLoading && <Typography>Loading...</Typography>}
            {isError && <Typography>{ error?.response?.data || "Error loading data" }</Typography>}
                {categoriesData.map((category) => (
                <Accordion
                    key={category.category}
                    expanded={expandedCategories[category.category] || false}
                    onChange={() => handleCategoryToggle(category.category)}
                    slotProps={{ transition: { unmountOnExit: true } }}
                    elevation={0}
                    sx={{
                    '&:before': {
                        display: 'none',
                    }
                    }}
                    disableGutters
                >
                    <StyledAccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>{category.category}</Typography>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                    {category.subcategories.map((subcategory) => {
                        const filteredOptions = subcategory.options.filter((option) =>
                        option.toLowerCase().includes(searchTerm)
                        );

                        if (filteredOptions.length === 0) return null;

                        return (
                        <Accordion
                            key={subcategory.subcategory}
                            expanded={expandedSubcategories[subcategory.subcategory] || false}
                            onChange={() => handleSubcategoryToggle(subcategory.subcategory)}
                            slotProps={{ transition: { unmountOnExit: true } }}
                            elevation={0}
                            sx={{
                            '&:before': {
                                display: 'none',
                            }
                            }}
                            disableGutters
                        >
                            <StyledAccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>{subcategory.subcategory}</Typography>
                            </StyledAccordionSummary>
                            <AccordionDetails>
                            <FormGroup>
                                {filteredOptions.map((option) => (
                                <FormControlLabel
                                    key={option}
                                    control={
                                    <Checkbox
                                        onChange={() =>
                                        handleCheckboxChange(category.category, subcategory.subcategory, option)
                                        }
                                        checked={selectedData[expandedAudience]?.some(
                                        (selected) =>
                                            selected.option === option &&
                                            selected.subcategory === subcategory.subcategory
                                        )}
                                    />
                                    }
                                    label={option}
                                />
                                ))}
                            </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                        );
                    })}
                    </AccordionDetails>
                </Accordion>
                ))}
            </Box>
          </Grid2>
          <Grid2 size={{ sm: 12, md: 6 }}>
            {/* Selected Data as Chips */}
            {/* <Box minHeight={500} borderRadius={1} overflow="auto" bgcolor={`secondary.main`} >
              <Typography variant="h6" sx={{fontWeight: 'bold',  p:2, pb: 0}}>Audience</Typography>
              <Box p={2}>
                {renderSelectedData()}
              </Box>
            </Box> */}
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: 500, maxHeight: 500, overflow: 'auto'}}>
              {selectedData.map((item, index)=>{
                return (
                <Accordion 
                  expanded={selectedData.length === 1 || expandedAudience === index}
                  key={index}
                  onChange={handleAudienceChange(index)}
                  elevation={0}
                  sx={{
                    bgcolor: `secondary.main`,
                    flexGrow: selectedData.length === 1 || expandedAudience === index ? 1 : 'initial',
                    borderRadius: 1,
                    '&:before': {
                        display: 'none',
                    }
                  }}
                >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`panel${index}bh-content`}
                  id={"panel${index}bh-header"}
                  sx={{
                      '& .MuiAccordionSummary-content': {
                        alignItems: 'center'
                      }
                  }}
                >
                  {selectedData.length > 1 && <IconButton onClick={(event) => handleRemoveAudience(event, index)}><HighlightOff /></IconButton>}
                  <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                    Audience {selectedData.length > 1 && index}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {renderSelectedData(index)}
                </AccordionDetails>
              </Accordion>
                )
              })}
              
            </Box>
            <Box sx={{display: 'flex', justifyContent: "end"}}>
              <Button
                variant="contained" 
                size="large"
                onClick={handleAddAudience}
                sx={{
                  mt: 2,
                  position: 'relative',
                  '& .MuiSvgIcon-root': {
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover .MuiSvgIcon-root': {
                    transform: 'rotate(90deg)', // Adjust the angle as needed
                }}}
                startIcon={<AddCircleOutline />}>
                  Add Audience
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
}

export default memo(SectionAddressableSegments);
