import React from 'react';
import PropTypes from 'prop-types';

import './PrimaryBtn.css'

function PrimaryBtn(props) {
    const {
        type,
        disabled,
        children,
        onClick
    } = props;

    return (
        <button class="button"
            type={type}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </button>
    );
}

PrimaryBtn.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'destructive']),
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element
    ]),
    onClick: PropTypes.func,
};

export default PrimaryBtn;