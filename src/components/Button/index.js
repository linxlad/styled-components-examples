import React from 'react';
import styled from 'styled-components';
import MaxTheme from '../contants/MaxTheme';

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    color: ${props => props.theme.max.Button[props.type].color};
    background: ${props => props.theme.max.Button[props.type].background};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
`;

  // Set the default theme, in our case main will be
  // palevioletred if no other theme is specified
  Button.defaultProps = {
    type: 'default',
    theme: MaxTheme
  }; 

  Button.propTypes = { 
    type: React.PropTypes.oneOf([
        'default',
        'primary',
        'success',
        'info',
        'danger',
        'warning',
        'sexy'
    ])
  };

  export default Button;