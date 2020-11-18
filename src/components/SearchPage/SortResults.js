import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const categories = [
    {
      value: 'Relevance',
      label: 'Relevance',
    },
  
    {
    value: 'Alphabetical',
    label: 'Alphabetical',
    },
  
    {
      value: 'Closest Date',
      label: 'Closest Date',
    },
  
    {
      value: 'Closest Location',
      label: 'Closest Location',
    },

    {
      value: 'Keywords',
      label: 'Tags/Keywords',
    },
  ];
  
export default function SortResults() {
    const [category, setCategory] = useState('Relevance');
  
    const handleChange = (event) => {
      setCategory(event.target.value);
    };
  
    return (
      <form noValidate autoComplete="off">
        <div className="m10">
        <TextField
            id="outlined-select-category"
            select
            label="Sort"
            value={category}
            onChange={handleChange}
            variant="outlined"
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </form>
    );
  }