import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const categories = [
    {
      value: 'Academic',
      label: 'Academic',
    },
  
    {
    value: 'Arts & Crafts',
    label: 'Arts & Crafts',
    },
  
    {
      value: 'Cultural',
      label: 'Cultural',
    },
  
    {
      value: 'Games & Recreation',
      label: 'Games & Recreation',
    },
  
    {
      value: 'Music',
      label: 'Music',
    },
  
    {
      value: 'Social',
      label: 'Social',
    },
  
    {
      value: 'Sports & Fitness',
      label: 'Sports & Fitness',
    },
  
    {
      value: 'Religious/Spiritual',
      label: 'Religious/Spiritual',
    },
  
    {
      value: 'Tech/Organizations',
      label: 'Tech/Organizations',
    },
  
    {
      value: 'Other',
      label: 'Other',
    },
  ];
  
export default function SearchCategory(props) {
    const [category, setCategory] = useState('Academic');
  
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
            label="Category"
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