import React from 'react';

import mealsImage from '../../assets/img7.jpeg';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

const Header = (props) => {
    return(
    <React.Fragment>
        <header className={classes.header}>
            <h1>Food Ordering App</h1>
            <HeaderCardButton onClick={props.onShowCart}/>
        </header>
        {/* Because main-image has a dash in it */}
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Food Banner" /> 
        </div>
    </React.Fragment>
    );
};
export default Header;