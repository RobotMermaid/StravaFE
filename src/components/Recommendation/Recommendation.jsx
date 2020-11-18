import React, { useState, useEffect } from 'react';
import styles from './Recommendation.css';
import ListComp from '../List/List';
import ShoeDetail from '../ShoeDetail/ShoeDetail';
import { getAthleteRecommendedShoe } from '../Services/API';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Recommendation = () => {
  const [athleteID, setAthleteID] = useState(0);
  const [recShoe, setRecShoe] = useState([]);
  const [rec, setRec] = useState(false);
  const [anchorEl, setAnchorEl] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const options = [
    '',
    1,
    2,
    3
  ]

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setAthleteID(index)
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getRecommendation = () => {
    getAthleteRecommendedShoe(athleteID)
      .then(shoe => {
        setRecShoe(shoe);
      })
      .then(() => setRec(!rec));
  }
  const shoesList = recShoe.map(shoe => 
    <ul key={shoe.id}>
      <li key={shoe.name}>
        <ShoeDetail {...shoe} />
      </li>
    </ul>
  );
  return (
    <div className={styles.Rec}>
      <h1>Top rated shoes</h1>
      <ListComp/>
      <div className={styles.shoeRecBox}>
        <h1>Get a shoe recommendation</h1>
        <form className={styles.shoeRecInput}>
          <div>
          <List component="nav" aria-label="Shoes">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="menu"
          aria-label="athletes"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Select athlete Id" secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
          </div>
          <button className={styles.button} onClick={(e) => { e.preventDefault(); getRecommendation();}}>Get your Recommended Shoe</button>
        </form>
        <div className={styles.rec}>
          <h2>We recommend</h2>
          <div>
          {shoesList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;