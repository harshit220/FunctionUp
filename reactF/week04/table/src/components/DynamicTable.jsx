import React, { useState } from 'react';

const DynamicTable = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [tableData, setTableData] = useState([]);

  const generateTable = (number) => {
    const data = [];
    for (let i = 1; i <= number; i++) {
      data.push(i);
    }
    setTableData(data);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputNumber(value);
    generateTable(value);
  };

  return (
    <div>
      <h2>Dynamic Table Generator</h2>
      <label htmlFor="inputNumber">Input a Number:</label>
      <input
        type="number"
        id="inputNumber"
        value={inputNumber}
        onChange={handleInputChange}
      />

      <br />

      <table>
        <thead>
          <tr>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((number, index) => (
            <tr key={index}>
              <td>{number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
