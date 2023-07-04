import React from 'react';
import styled from 'styled-components';

interface TableProps {
  data: Record<string, string | number>[];
  columns: string[];
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map(column => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
