import React from 'react';
import Arrow from '@elsdoerfer/react-arrow';
import './Arrow.css';
import PropTypes from 'prop-types';
const renderArrow = props => (
    <Arrow
        angle={props.angle}
        length={props.length}
        style={{
            width: props.width + 'px'
        }}
        arrowHeadFilled={props.filled}
        color={props.color}
        className="Arrow"
    />
);
renderArrow.propTypes = {
    angle: PropTypes.number,
    length: PropTypes.number,
    filled: PropTypes.bool,
    color: PropTypes.string
};
export default renderArrow;