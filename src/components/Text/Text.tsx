import React from 'react';
import styled from 'styled-components';

interface TextProps {
  text: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

const StyledText = styled.p<TextProps>`
  color: ${props => props.color || 'inherit'};
  font-size: ${props => props.fontSize || 'inherit'};
  font-weight: ${props => props.fontWeight || 'inherit'};
`;

const Text: React.FC<TextProps> = ({ text, color, fontSize, fontWeight }) => {
  return (
    <StyledText color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {text}
    </StyledText>
  );
};

export default Text;
