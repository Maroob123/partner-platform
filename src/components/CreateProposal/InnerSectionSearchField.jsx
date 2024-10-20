import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      margin="normal"
      value={searchTerm}
      onChange={handleSearch}
      sx={{mt: 0}}
      slotProps={{
        input: {
          startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
          endAdornment: (
            <InputAdornment position="end" style={{ display: searchTerm ? 'flex' : 'none' }}>
              <IconButton onClick={handleClearSearch}>
                <Clear />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchBar;
