import React from 'react';
import styled from 'styled-components';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  selectedValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const StyledSelect = styled.select<DropdownProps>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${props => (props.disabled ? '#eee' : '#fff')};
  color: ${props => (props.disabled ? '#999' : '#333')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  disabled,
  onChange
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyledSelect
      disabled={disabled}
      value={selectedValue}
      onChange={handleChange}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
