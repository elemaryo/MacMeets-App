import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography style={{color:"white", fontWeight: 900}} variant="body2" align="center">
        {'Copyright © '}
        <Link style={{color:"white"}}>
          MacMeets
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Footer() {
    return (
        <footer>
        <Copyright />
      </footer>
    )
}
