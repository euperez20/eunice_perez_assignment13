import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  labelText: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledLabel = styled.label<LabelProps>`
  font-weight: bold;
  color: ${props => (props.disabled ? '#999' : '#333')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
`;

const Label: React.FC<LabelProps> = ({ labelText, backgroundColor, disabled }) => {
  return <StyledLabel backgroundColor={backgroundColor} disabled={disabled}>{labelText}</StyledLabel>;
};

export default Label;
