import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        {/* props.children is actual content passed by opening and closing tags */}
        <div className={classes.content}>{props.children}</div>
    </div>

}
// In inddex.html -> <div id="overlays"></div>
const portalElement = document.getElementById('overlays');

/*
    ReactDOM.createPortal() - Portals provide a first-class way to render children 
    into a DOM node that exists outside the DOM hierarchy of the parent component.
*/
const Modal = (props) => {
    return(
        <React.Fragment>
            {/* For Backdrop Props: 
            - props.onClose coming from Modal
            - onClose getting fowarded to props.onClose
            - which is based on onClick */}
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    );
}
export default Modal