import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const categories = [
    {
      value: 'Within McMaster',
      label: 'Within McMaster',
    },
  
    {
    value: 'Outside McMaster',
    label: 'Outside McMaster',
    },
  
  ];
  
export default function LocationFilter(props) {
    const [category, setCategory] = useState('Within McMaster');
  
    const handleChange = (event) => {
      setCategory(event.target.value);
      // on Category change is a function passed by the parent component
      props.onCategoryChange(event.target.value) 
    };
  
    return (
      <form noValidate autoComplete="off">
        <div className="m10">
        <TextField
            id="outlined-select-category"
            select
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