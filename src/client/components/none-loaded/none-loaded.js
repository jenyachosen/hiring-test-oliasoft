import React from 'react';
import PropTypes from 'prop-types';

export const NoneLoaded = ({text}) => (
  <em>{text}</em>
)

NoneLoaded.propTypes = {
  text: PropTypes.string
};
