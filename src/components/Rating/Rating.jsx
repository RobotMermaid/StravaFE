import React, { useState } from 'react';
import styles from './Rating.css';
import { makeStyles } from '@material-ui/core/styles';
import RatingMU from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});
const Rating = () => {
  const [athleteID, setAthleteID] = useState(0);
  const [shoeID, setShoeID] = useState(0);

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  const saveRating = () => {
    // post
    console.log(value, shoeID, athleteID)
  }
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Smelling of elderberries',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  return (
    <div className={styles.Rating}>
      <h1>Rate a shoe</h1>
      <h2>Shoe Rating and Recommendations</h2>
      <form>
      <input type="text" value={athleteID} onChange={({ target }) => setAthleteID(target.value)} placeholder="Your Athlete ID"/>
      <input value={shoeID} onChange={({ target }) => setShoeID(target.value)} placeholder="Shoe ID" />
      <div className={classes.root}>
      <RatingMU
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
      <button onClick={(e) => {e.preventDefault(); saveRating()}}>Submit your rating</button>
    </form>
    </div>
  );
};

export default Rating;