import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Headline extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {header, desc, tempArr} = this.props;

        if(!header){
            return null;
        }

        return (
            <div data-test="HeadlineComponent">
                <h1 data-test="HeadlineTitle">
                    {header}
                </h1>
                <p data-test="HeadlineDescription">{desc}</p>
            </div>
        )
    }
}

Headline.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number.isRequired,
        onlineStatus: PropTypes.bool
    }))
}

export default Headline;