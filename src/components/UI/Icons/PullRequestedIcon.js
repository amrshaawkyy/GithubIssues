import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
const pullRequested = ({ state }) => {
    return (
        <span className="fa-layers fa-fw fa-2x">
            <FontAwesomeIcon
                icon={faCodeBranch}
                color={state}
                transform="shrink-4"
            />
            {
                state === "red" ?
                    <FontAwesomeIcon
                        icon={faCheck}
                        color={state}
                        transform="shrink-8 right-4 down-4"
                    />
                    : ""
            }
        </span>
    )
}
pullRequested.propTypes = {
    state: PropTypes.string
};
export default pullRequested;