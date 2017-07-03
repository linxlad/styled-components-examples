import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    font-size: 1.5em;
    text-align: center;
    background: ${props => props.green ? 'green' : '#d3d3d3'};
  `;

export default Wrapper;