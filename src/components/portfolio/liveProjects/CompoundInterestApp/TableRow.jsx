import React from 'react';

const TableRow = (props) => 
    (
        <tr>
            <td>{props.Amount}</td>
            <td>{props.Fv}</td>
        </tr>
    );

export default TableRow;