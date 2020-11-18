import React, { useState }  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const useStyles = makeStyles({
    /* Styles applied to the root element. */
    root: {
        borderRadius: 20,
        boxShadow: '1px 1px',
    },
});

function Calen() {
    const classes = useStyles();
    const [value, onChange] = useState(new Date());
    return (
        <div id="calendar">
            <Calendar className={classes.root} 
                onChange={onChange}
                value={value}
            />           
        </div>
    )
}

export default Calen
