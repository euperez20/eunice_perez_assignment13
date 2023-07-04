import React from 'react';
import styled from 'styled-components';

interface RadioButtonOption {
  value: string;
  label: string;
}

interface RadioButtonProps {
  options: RadioButtonOption[];
  selectedValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const StyledRadioGroup = styled.div<RadioButtonProps>`
  display: flex;
  flex-direction: column;
`;

const StyledRadioButton = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  selectedValue,
  disabled,
  onChange
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyledRadioGroup>
      {options.map(option => (
        <StyledRadioButton key={option.value} disabled={disabled}>
          <RadioInput
            type="radio"
            value={option.value}
            checked={option.value === selectedValue}
            disabled={disabled}
            onChange={handleChange}
          />
          {option.label}
        </StyledRadioButton>
      ))}
    </StyledRadioGroup>
  );
};

export default RadioButton;
