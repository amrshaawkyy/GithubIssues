import React from 'react';
import Aux from "../../hoc/AUX1/Aux1";
import PropTypes from 'prop-types';
const parseTimetoString = (timestamp) => {
    const SECOND = 1000
    const MINUTE = SECOND * 60
    const HOUR = MINUTE * 60
    const DAY = HOUR * 24
    const MONTH = DAY * 30
    const YEAR = DAY * 365
    const elapsed = Date.now() - timestamp,
        getElapsedString = (value, unit) => {
            const round = Math.round(elapsed / value);
            return `${round} ${unit}${round > 1
                ? 's'
                : ''} ago`;
        };
    if (elapsed < MINUTE) {
        return getElapsedString(SECOND, 'second');
    }
    if (elapsed < HOUR) {
        return getElapsedString(MINUTE, 'minute');
    }
    if (elapsed < DAY) {
        return getElapsedString(HOUR, 'hour');
    }
    if (elapsed < MONTH) {
        return getElapsedString(DAY, 'day');
    }
    if (elapsed < YEAR) {
        return getElapsedString(MONTH, 'month');
    }
    return getElapsedString(YEAR, 'year');
}
const creationTime = ({ data }) => {
    const createdAt = parseTimetoString(new Date(data.created_at))
    const updatedAt = parseTimetoString(new Date(data.updated_at))
    const user = data.user.login
    const whichTime = createdAt !== updatedAt
        ?
        `#${data.number} created ${createdAt} (updated ${updatedAt})`
        :
        `#${data.number} created ${createdAt}`
    let timeAgoString = `${whichTime} by ${user}`
    const assigneesString = `${(data.assignees.length > 0 ?
        ` ---  Assigned to: ${data.assignees.map(x => { return " " + x.login })}`
        : "")}`
    return (
        <Aux>
            {timeAgoString + assigneesString}
        </Aux>
    )
}
creationTime.propTypes = {

    created_at: PropTypes.instanceOf(Date),
    updated_at: PropTypes.instanceOf(Date),
    number: PropTypes.number,
    assignees: PropTypes.array,
    login: PropTypes.string
};
export default creationTime;