import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamationCircle, faCircle } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
const issueIcon = ({ state }) => {
    return (
        <span className="fa-layers fa-fw fa-2x">
            <FontAwesomeIcon icon={faCircle} color={state} />
            <FontAwesomeIcon
                className="fa-inverse"
                icon={faExclamationCircle}
                color={state}
                transform="shrink-1"
            />
            {
                state === "red" &&
                <FontAwesomeIcon
                    icon={faCheck}
                    color={state}
                    transform="shrink-10 right-5 up-4"
                />
            }
        </span>
    )
}
issueIcon.propTypes = {
    state: PropTypes.string
};
export default issueIcon;