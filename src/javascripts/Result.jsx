import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 2em 0;
`;

const TableView = styled.table`
  flex: 1;
  border-collapse: collapse;
  .green {
    color: #208014;
    background-color: #bbf3cf;
  }
  .red {
    color: #a52828;
    background-color: #fdacac;
  }
  td {
    height: 20px;
    font-size: 14px;
    padding: 3px 8px;
    white-space: nowrap;
    border: 1px solid #eee;
  }
  .text-center {
    text-align: center;
  }
`;


export default ({ aArray, result }) => {
  return (
    <Container>
      <TableView>
        <tbody>
          {aArray.map(text => (
            <tr>
              <td>{text}</td>
            </tr>
          ))}
        </tbody>
      </TableView>
      <TableView>
        <tbody>
          {result.map(res => (
            <tr className={res[0] === 0 ? null : (res[0] > 0 ? 'green' : 'red')}>
              <td className="text-center">{res[0] === 0 ? null : (res[0] > 0 ? '+' : '-')}</td>
              <td>{res[1]}</td>
            </tr>
          ))}
        </tbody>
      </TableView>
    </Container>
  );
}
