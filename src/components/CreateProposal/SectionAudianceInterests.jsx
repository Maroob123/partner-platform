import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  List,
  ListItem,
  Card,
  CardHeader,
  CardContent,
  Grid2,
  IconButton
} from "@mui/material";
import { Info, ExpandMore } from '@mui/icons-material';
import { CustomizedTooltipSmall } from '@helperFunctions/CustomTooltips';
import { styled } from '@mui/material/styles';



const categories = [
  {
    label: "Arts & Entertainment", value: "arts_entertainment",
    children: [
        { label: "Celebrities & Entertainment News", value: "celebrities_entertainment_news"},
        { label: "Comics & Animation", value: "comics_animation",
            children: [
                { label: "Anime & Manga", value: "anime_manga"},
                { label: "Cartoons", value: "cartoons"},
                { label: "Comics", value: "comics"},
            ]
        },
        { label: "Entertainment Industry", value: "entertainment_industry",
            children: [
                { label: "Film & TV Industry", value: "film_tv_industry"},
                { label: "Recording Industry", value: "recording_industry"},
            ]
        },
        { label: "Events & Listings", value: "events_listings",
            children: [
                { label: "Clubs & Nightlife", value: "clubs_nightlife"},
                { label: "Concerts & Music Festivals", value: "concerts_music_festivals"},
                { label: "Film Festivals", value: "film_festivals"},
                { label: "Movie Listings & Theater Showtimes", value: "movie_listings_theater_showtimes"},
                { label: "Ticket Sales", value: "ticket_sales"},
            ]
        },
        { label: "Gossip & Tabloid News", value: "gossip_tabloid_news",
            children: [
                { label: "Scandals & Investigations", value: "scandals_investigations"},
            ]
        },
        { label: "Humor", value: "humor",
            children: [
                { label: "Live Comedy", value: "live_comedy"},
                { label: "Political Humor", value: "political_humor"},
                { label: "Spoofs & Satire", value: "spoofs_satire"},
            ]
        },
        { label: "Men's Interests", value: "mens_interests"},
        { label: "Movies", value: "movies",
            children: [
                { label: "Action & Adventure Films", value: "action_adventure_films"},
                { label: "Animated Films", value: "animated_films"},
                { label: "Bollywood & South Asian Film", value: "bollywood_south_asian_film"},
                { label: "Classic Films", value: "classic_films"},
                { label: "Comedy Films", value: "comedy_films"},
                { label: "Cult & Indie Films", value: "cult_indie_films"},
                { label: "Documentary Films", value: "documentary_films"},
                { label: "Drama Films", value: "drama_films"},
                { label: "DVD & Video Shopping", value: "dvd_video_shopping"},
                { label: "Horror Films", value: "horror_films"},
                { label: "Movie Memorabilia", value: "movie_memorabilia"},
                { label: "Movie Reference", value: "movie_reference"},
                { label: "Musical Films", value: "musical_films"},
                { label: "Science Fiction & Fantasy Films", value: "science_fiction_fantasy_films"},
                { label: "Thriller", value: "thriller"},
            ]
        },
        { label: "Music & Audio", value: "music_audio",
            children: [
                { label: "CD & Audio Shopping", value: "cd_audio_shopping"},
                { label: "Classical Music", value: "classical_music"},
                { label: "Country Music", value: "country_music"},
                { label: "Dance & Electronic Music", value: "dance_electronic_music"},
                { label: "Experimental & Industrial Music", value: "experimental_industrial_music"},
                { label: "Folk & Traditional Music", value: "folk_traditional_music"},
                { label: "Jazz & Blues", value: "jazz_blues"},
                { label: "Music Art & Memorabilia", value: "music_art_memorabilia"},
                { label: "Music Education & Instruction", value: "music_education_instruction"},
                { label: "Music Equipment & Technology", value: "music_equipment_technology"},
                { label: "Music Reference", value: "music_reference"},
                { label: "Music Streams & Downloads", value: "music_streams_downloads"},
                { label: "Pop Music", value: "pop_music"},
                { label: "Radio", value: "radio"},
                { label: "Religious Music", value: "religious_music"},
                { label: "Rock Music", value: "rock_music"},
                { label: "Soundtracks", value: "soundtracks"},
                { label: "Urban & Hip-Hop", value: "urban_hip-hop"},
                { label: "Vocals & Show Tunes", value: "vocals_show_tunes"},
                { label: "World Music", value: "world_music"},
            ]
        },
        { label: "Offbeat", value: "offbeat",
            children: [
                { label: "Edgy & Bizarre", value: "edgy_bizarre"},
                { label: "Occult & Paranormal", value: "occult_paranormal"},
            ]
        },
        { label: "Online Media", value: "online_media",
            children: [
                { label: "Online Image Galleries", value: "online_image_galleries"},
                { label: "Webcams & Virtual Tours", value: "webcams_virtual_tours"},
            ]
        },
        { label: "Performing Arts", value: "performing_arts",
            children: [
                { label: "Acting & Theater", value: "acting_theater"},
                { label: "Broadway & Musical Theater", value: "broadway_musical_theater"},
                { label: "Dance", value: "dance"},
                { label: "Opera", value: "opera"},
            ]
        },
        { label: "Seniors & Retirement", value: "seniors_retirement"},
        { label: "TV & Video", value: "tv_video",
            children: [
                { label: "Online Video", value: "online_video"},
                { label: "TV Commercials", value: "tv_commercials"},
                { label: "TV Guides & Reference", value: "tv_guides_reference"},
                { label: "TV Networks & Stations", value: "tv_networks_stations"},
                { label: "TV Shows & Programs", value: "tv_shows_programs"},
            ]
        },
        { label: "Visual Art & Design", value: "visual_art_design",
            children: [
                { label: "Architecture", value: "architecture"},
                { label: "Arts Education", value: "arts_education"},
                { label: "Design", value: "design"},
                { label: "Painting", value: "painting"},
                { label: "Photographic & Digital Arts", value: "photographic_digital_arts"},
            ]
        },
        { label: "Women's Interests", value: "womens_interests"},
    ],
  },
    {
    label: "Autos & Vehicles", value: "autos_vehicles",
    children: [
        { label: "Acura", value: "acura"},
        { label: "Audi", value: "audi"},
        { label: "Bentley", value: "bentley"},
        { label: "BMW", value: "bmw"},
        { label: "Boats & Watercraft", value: "boats_watercraft"},
        { label: "Cadillac", value: "cadillac"},
        { label: "Campers & RVs", value: "campers_rvs"},
        { label: "Chevrolet", value: "chevrolet"},
        { label: "Chrysler", value: "chrysler"},
        { label: "Classic Vehicles", value: "classic_vehicles"},
        { label: "Commercial Vehicles", value: "commercial_vehicles",
            children: [
                { label: "Cargo Trucks & Trailers", value: "cargo_trucks_trailers" },
            ],
        },
        { label: "Custom & Performance Vehicles", value: "custom_performance_vehicles" },
        { label: "Dodge", value: "dodge" },
        { label: "Ferrari", value: "ferrari" },
        { label: "Fiat", value: "fiat" },
        { label: "Ford", value: "ford" },
        { label: "GM-Daewoo", value: "gm_daewoo" },
        { label: "GMC", value: "gmc" },
        { label: "Honda", value: "honda" },
        { label: "Hummer", value: "hummer" },
        { label: "Hybrid & Alternative Vehicles", value: "hybrid_alternative_vehicles" },
        { label: "Hyundai", value: "hyundai" },
        { label: "Infiniti", value: "infiniti" },
        { label: "Jaguar", value: "jaguar" },
        { label: "Jeep", value: "jeep" },
        { label: "Kia", value: "kia" },
        { label: "Lamborghini", value: "lamborghini" },
        { label: "Land Rover", value: "land_rover" },
        { label: "Lexus", value: "lexus" },
        { label: "Lincoln", value: "lincoln" },
        { label: "Maserati", value: "maserati" },
        { label: "Mazda", value: "mazda" },
        { label: "Mercedes-Benz", value: "mercedes_benz" },
        { label: "Mercury", value: "mercury" },
        { label: "Mini", value: "mini" },
        { label: "Mitsubishi", value: "mitsubishi" },
        { label: "Motorcycles", value: "motorcycles" },
        { label: "Nissan", value: "nissan" },
        { label: "Off-Road Vehicles", value: "off_road_vehicles" },
        { label: "Personal Aircraft", value: "personal_aircraft" },
        { label: "Peugeot", value: "peugeot" },
        { label: "Pontiac", value: "pontiac" },
        { label: "Porsche", value: "porsche" },
        { label: "Ram", value: "ram" },
        { label: "Renault-Samsung", value: "renault_samsung" },
        { label: "Rolls-Royce", value: "rolls_royce" },
        { label: "Saab", value: "saab" },
        { label: "Saturn", value: "saturn" },
        { label: "Scooters & Mopeds", value: "scooters_mopeds" },
        { label: "Subaru", value: "subaru" },
        { label: "Suzuki", value: "suzuki" },
        { label: "Tesla", value: "tesla" },
        { label: "Toyota", value: "toyota" },
        { label: "Trucks & SUVs", value: "trucks_suvs",
            children: [
                { label: "SUVs", value: "suvs" },
                { label: "Trucks", value: "trucks" },
                { label: "Vans & Minivans", value: "vans_minivans" }
            ],
        },
        { label: "Vauxhall-Opel", value: "vauxhall-opel" },
        { label: "Vehicle Licensing & Registration", value: "vehicle_licensing_registration" },
        { label: "Vehicle Maintenance", value: "vehicle_maintenance" },
        { label: "Vehicle Parts & Accessories", value: "vehicle_parts_accessories",
            children: [
                { label: "Auto Exterior", value: "auto_exterior" },
                { label: "Auto Interior", value: "auto_interior" },
                { label: "Car Electronics", value: "car_electronics" },
                { label: "Engine & Transmission", value: "engine_transmission" },
                { label: "Vehicle Fuels & Lubricants", value: "vehicle_fuels_lubricants" },
                { label: "Vehicle Wheels & Tires", value: "vehicle_wheels_tires" }
            ]
        },
        { label: "Vehicle Shopping", value: "vehicle_shopping",
            children: [
                { label: "Fuel Economy & Gas Prices", value: "fuel_economy_gas_prices" },
                { label: "Vehicle Specs", value: "vehicle_specs" },
            ]
        },
        { label: "Vehicle Shows", value: "vehicle_shows" },
        { label: "Volkswagen", value: "volkswagen" },
        { label: "Volvo", value: "volvo" },
    ]},
];

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    '& .MuiAccordionSummary-content': {
        marginTop: 0,
        marginBottom: 0,
      },
  }));

  const SectionAudienceInterests = () => {
    const [expandedAccordions, setExpandedAccordions] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [selected, setSelected] = useState([]);
  
    // Toggle accordion expansion
    const toggleAccordion = (categoryValue) => {
      setExpandedAccordions((prev) => ({
        ...prev,
        [categoryValue]: !prev[categoryValue],
      }));
    };
  
    // Handle checkbox change
    const handleCheckboxChange = (category, parent = null) => {
      const path = parent ? `${parent} > ${category.label}` : category.label;
      const isSelected = selected.includes(path);
  
      if (isSelected) {
        setSelected(selected.filter((item) => item !== path));
      } else {
        setSelected([...selected, path]);
      }
    };
  
    // Determine if a category or its children should be visible in the search results
    const isCategoryVisible = (category) => {
      const categoryMatches = category.label
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const childrenMatch =
        category.children && category.children.some(isCategoryVisible);
  
      return categoryMatches || childrenMatch;
    };
  
    // Check if this accordion should be expanded based on search
    const shouldAccordionBeExpanded = (category) => {
      if (searchTerm === "") {
        return expandedAccordions[category.value] || false;
      }
      return isCategoryVisible(category); // Expand if this category or its children match the search
    };
  
    // Filter and render categories recursively
    const filterCategories = (items, parentLabel = null) => {
      return items
        .filter(isCategoryVisible)
        .map((item) => {
          const hasChildren = item.children && item.children.length > 0;
  
          return (
            <React.Fragment key={item.value}>
              {hasChildren ? (
                // Render accordion only if the category has children
                <Accordion
                  expanded={shouldAccordionBeExpanded(item)}
                  onChange={() => toggleAccordion(item.value)}
                  slotProps={{ transition: { unmountOnExit: true } }}
                  elevation={0}
                  sx={{
                    "&:before": {
                      display: "none",
                    },
                  }}
                  disableGutters
                >
                  <StyledAccordionSummary expandIcon={<ExpandMore />}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selected.includes(
                            parentLabel
                              ? `${parentLabel} > ${item.label}`
                              : item.label
                          )}
                          onChange={() => handleCheckboxChange(item, parentLabel)}
                        />
                      }
                      label={item.label}
                    />
                  </StyledAccordionSummary>
                  <AccordionDetails>
                    <List component="div" disablePadding>
                      {filterCategories(
                        item.children,
                        parentLabel
                          ? `${parentLabel} > ${item.label}`
                          : item.label
                      )}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ) : (
                // Render simple checkbox if the category has no children
                <ListItem key={item.value}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selected.includes(
                          parentLabel
                            ? `${parentLabel} > ${item.label}`
                            : item.label
                        )}
                        onChange={() => handleCheckboxChange(item, parentLabel)}
                      />
                    }
                    label={item.label}
                  />
                </ListItem>
              )}
            </React.Fragment>
          );
        });
    };
  
    return (
      <Card sx={{ mt: 4 }}>
        <CardHeader
          title={
            <>
              Audience Interests
              <CustomizedTooltipSmall
                title="Audience interests are used to ensure that your advertiser's ads show on the most relevant content. Top-level audience interests consist of a grouping of similar interests for you to pick. To emphasize a specific interest, click the down arrow next to the interest group to drill down, then select the most relevant interests."
                placement="top"
              >
                <IconButton>
                  <Info />
                </IconButton>
              </CustomizedTooltipSmall>{" "}
              (Display, Pre Roll, YouTube, CTV)
            </>
          }
        />
        <CardContent>
          <Grid2 container spacing={2} justify="center">
            <Grid2 size={{ sm: 12, md: 6 }}>
              <TextField
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                margin="normal"
              />
              <List>{filterCategories(categories)}</List>
            </Grid2>
            <Grid2 size={{ sm: 12, md: 6 }}>
              <Typography variant="h6" gutterBottom>
                Selected Categories:
              </Typography>
              <List>
                {selected.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    );
  };
  
  
  export default SectionAudienceInterests;
