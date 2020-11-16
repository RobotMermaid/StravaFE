import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import classes from './Links.css';

const Links = () => {
    return (
        <div className={classes.Links}>
                <Link className={classes.link} to="/">Rate a shoe</Link>
                <Link className={classes.link} to="/rec">Get shoe recommendation</Link>
        </div>
        
    );
};

export default Links;