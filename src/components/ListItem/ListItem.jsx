import React from 'react'
import PropTypes from 'prop-types'
import "./listitem.scss"

const ListItem = (props) => {

    if(!props.title){
        return null
    }
    return (
        <div data-test="ListItemComponent" className="listItem">
            <h2 data-test="titleComponent">{props.title}</h2>
            <div data-test="descriptionComponent">
                {props.description}
            </div>
        </div>
    );
};

ListItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default ListItem;