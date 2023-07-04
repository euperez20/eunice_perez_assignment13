import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-weight: bold;
  color: ${props => (props.disabled ? '#999' : '#333')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
`;

const Label = ({ children, disabled }) => {
  return <StyledLabel disabled={disabled}>{children}</StyledLabel>;
};

export default Label;
