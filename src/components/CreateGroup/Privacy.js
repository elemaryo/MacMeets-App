import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const categories = [
    {
      value: 'Invite',
      label: 'Invite-Only',
    },
  
    {
    value: 'Public',
    label: 'Public',
    },
  ];
  
export default function Privacy() {
    // const classes = useStyles();
    const [category, setCategory] = useState('Public');
  
    const handleChange = (event) => {
      setCategory(event.target.value);
    };
  
    return (
      <form noValidate autoComplete="off">
        <div>
        <TextField
            id="outlined-select-category"
            select
            label="Select"
            value={category}
            onChange={handleChange}
            helperText="Please select your privacy settings"
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