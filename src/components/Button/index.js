import React from 'react';
import styled from 'styled-components';

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
    theme: {
      max: {
        Button: {
          default: {
            background: '#d3d3d3',
            color: 'white'
          },
          primary: {
            background: 'blue',
            color: 'white'
          },
          success: {
            background: 'green',
            color: 'white'
          },
          info: {
            background: 'lightblue',
            color: 'white'
          },
          warning: {
            background: 'yellow',
            color: 'white'
          },
          danger: {
            background: 'lightblue',
            color: 'orange'
          },
          sexy: {
            background: 'hotpink',
            color: 'white'
          }
        }
      }
    }
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
    ]),
    theme: React.PropTypes.object
  };

  export default Button;