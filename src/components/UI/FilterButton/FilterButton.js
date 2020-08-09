import React from 'react';
import PropTypes from 'prop-types';
const filterButton = (props) => {
    return (
        <div className="buttons has-addons" onClick={props.clickFunction}>
            <span  data-choice={props.stateChoice}
                data-list-filter={props.filterType}
                className={"button " + (props.listFilter[props.filterType] === props.stateChoice ? "is-selected is-active is-info" : "")}>
                {props.stateChoice.charAt(0).toUpperCase() + props.stateChoice.substr(1).toLowerCase()}
            </span>
        </div>
    );
}
filterButton.propTypes = {
    stateChoice: PropTypes.string,
    filterType: PropTypes.string,
    clickFunction: PropTypes.func,
    listFilter: PropTypes.object
};
export default filterButton;