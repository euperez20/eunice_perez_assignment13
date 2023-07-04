import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  labelText: string;
  disabled?: boolean;
}

const StyledLabel = styled.label<LabelProps>`
  font-weight: bold;
  color: ${props => (props.disabled ? '#999' : '#333')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
`;

const Label: React.FC<LabelProps> = ({ labelText, disabled }) => {
  return <StyledLabel disabled={disabled}>{labelText}</StyledLabel>;
};

export default Label;
