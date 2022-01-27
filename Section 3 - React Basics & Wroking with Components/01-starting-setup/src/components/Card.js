import './Card.css'

function Card(props) {
    // css will be added with card.css
    // need 'card ' <- whitespace 
    const classes = 'card ' + props.className;
    
    return <div className={classes}>{props.children}</div>;
}


export default Card;