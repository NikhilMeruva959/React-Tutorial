import React from 'react';

import mealsImage from '../../assets/img7.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMealse</h1>
            <button>Cart</button>
        </header>
        {/* Because main-image has a dash in it */}
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Food Banner" /> 
        </div>
    </React.Fragment>
};
export default Header;