import React from 'react';
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <div>
            <h1>
                {title}
            </h1>
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
