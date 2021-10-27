import React from 'react';
import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({title}) => {
    const onClick = () => {
        console.log("click")
    }


    return (
        <div>
            <h1>
                {title}
            </h1>

            <Button color='green' text='Add' onClick={onClick}/>

        </div>
    );
};

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.protoTypes = {
    title: PropTypes.string.isRequired
}

// css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }


export default Header;
