import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  
import { Box, Typography, Button } from '@mui/material';
import axios from 'axios';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get(`http://localhost:5000/employees/${id}`).then(response => {
      setEmployee(response.data);
    });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/employees/${id}`).then(() => {
      navigate('/employees');  
    });
  };

  if (!employee) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Typography variant="h4">{employee.name}</Typography>
      <Typography>Email: {employee.email}</Typography>
      <Typography>Department: {employee.department}</Typography>
      <Typography>Joining Date: {employee.joiningDate}</Typography>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete Employee
      </Button>
    </Box>
  );
};

export default EmployeeDetails;
