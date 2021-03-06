import React from 'react';
import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({title, onAdd, showAdd}) => {


    return (
        <div>
            <h1>
                {title}
            </h1>

            <Button color={showAdd ? "red" : "green" }
                    text={showAdd ? "Close" : "Add" }
                    onClick={onAdd}
            />

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
