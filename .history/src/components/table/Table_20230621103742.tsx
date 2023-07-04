import React from 'react';
import styled from 'styled-components';

interface TableProps {
  data: any[];
  headers: string[];
  footer?: React.ReactNode;
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const TableFooter = styled.tfoot``;

const Table: React.FC<TableProps> = ({ data, headers, footer }) => {
  return (
    <StyledTable>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableCell key={index}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
      {footer && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={headers.length}>{footer}</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </StyledTable>
  );
};

export default Table;
