import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import TableChartIcon from '@material-ui/icons/TableChart';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },


  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

const menuId = 'primary-search-account-menu';


  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
        <Link to='/'>
            <IconButton aria-label="List">

                <ListIcon />

            </IconButton>
         </Link>

          <Link to='/list'>
            <IconButton aria-label="tabular">

                <TableChartIcon />

            </IconButton>
           </Link>


           <Link to='/chart'>
            <IconButton
           aria-label="account of current user"
                color="inherit"
            >
              <EqualizerIcon />
            </IconButton>
           </Link>



          </div>

        </Toolbar>
      </AppBar>

    </div>
  );
}
