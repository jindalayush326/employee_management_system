import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/employees')
      .then(response => setEmployees(response.data));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/employees/${id}`)
      .then(() => {
        setEmployees(employees.filter(employee => employee.id !== id));  
      });
  };

  return (
    <Box>
      <Link to="/employees/add">
        <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>Add New Employee</Button>
      </Link>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map(employee => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>
                  <Link to={`/employees/${employee.id}`}>
                    <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>View</Button>
                  </Link>
                  <Link to={`/employees/${employee.id}/edit`}>
                    <Button variant="contained" color="secondary" sx={{ marginRight: 1 }}>Edit</Button>
                  </Link>
                  <Button variant="contained" color="error" onClick={() => handleDelete(employee.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmployeeList;
