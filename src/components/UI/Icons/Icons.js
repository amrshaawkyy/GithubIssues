import React from 'react';
import PullRequested from './PullRequestedIcon';
import IssuesIcon from './IssuesIcon';
import PropTypes from 'prop-types';
const stackedIcons = ({ type, state }) => {
    const iconColor = (state === "closed" ? "red" : "green")
    return type ? <IssuesIcon state={iconColor} type={type} />
        : <PullRequested state={iconColor} type={type} />
}
stackedIcons.propTypes = {
    type: PropTypes.bool,
    state: PropTypes.string
};
export default stackedIcons;