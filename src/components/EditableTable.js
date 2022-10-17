import React, { useState } from 'react';
import { Form, Table } from "react-bootstrap";
import { PencilFill, Save } from 'react-bootstrap-icons';

const EditableTable = ({ columns, rows, actions }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(null);
  const [rowsState, setRowsState] = useState(rows);
  const [editedRow, setEditedRow] = useState();

  const handleEdit = (rowID) => {
    setIsEditMode(true);
    setEditedRow(null);
    setRowIDToEdit(rowID);
  }

  const handleOnChangeField = (e, rowID) => {
    const { name: fieldName, value } = e.target;

    setEditedRow({
      id: rowID,
      [fieldName]: value
    })
  }

  const handleSaveRowChanges = (smallestNormalValue, biggestNormalValue) => {
    setTimeout(() => {
      setIsEditMode(false);

      const newData = rowsState.map(row => {
        if (row.id === editedRow.id) {
          if (editedRow.result < smallestNormalValue) {
            row.result = editedRow.result;
            row.comment = "Ниже нормы";
          } else if (editedRow.result > biggestNormalValue) {
            row.result = editedRow.result;
            row.comment = "Выше нормы";
          } else {
            row.result = editedRow.result;
            row.comment = "В норме";
          }
          if (editedRow.normalValue) row.normalValue = editedRow.normalValue;
          if (editedRow.comment) row.comment = editedRow.comment;
        }

        return row;
      })

      setRowsState(newData);
      setEditedRow(null)
    }, 1000)
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column.field}>{column.fieldName}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {rowsState.map((row) => {
          return <tr key={row.id}>
            <td>
              {row.id}
            </td>
            <td>
              {isEditMode && rowIDToEdit === row.id
                ? <Form.Control
                  type='text'
                  defaultValue={editedRow ? editedRow.result : row.result}
                  id={row.id}
                  name='result'
                  onChange={(e) => handleOnChangeField(e, row.id)}
                />
                : row.result + " " + row.unit
              }
              {actions &&
                (
                  isEditMode && rowIDToEdit === row.id
                    ? <button onClick={() => handleSaveRowChanges(row.smallestNormalValue, row.biggestNormalValue)} className='custom-table__action-btn' disabled={!editedRow}>
                      <Save />
                    </button>
                    : <button onClick={() => handleEdit(row.id)} className='custom-table__action-btn'>
                      <PencilFill />
                    </button>
                )
              }
            </td>
            <td>
              {
                row.normalValue
              }
            </td>
            <td style={{ color: row.comment === "В норме" ? "#36C90E" : "#F00" }}> 
            {
              row.comment
            }
            </td>
          </tr>
        })}

      </tbody>
    </Table>
  );
};

export default EditableTable;