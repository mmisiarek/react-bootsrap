import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

const Title = props => <div className={style.root}>Hello {props.name}</div>;

Title.propTypes = {
  name: PropTypes.string,
};

Title.defaultProps = {
  name: 'stranger',
};

export default Title;
