import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Box, Grid } from '@mui/material';
import axios from 'axios';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    joiningDate: ''
  });

  const { id } = useParams();  
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/employees/${id}`).then(response => {
        setFormData(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:5000/employees/${id}`, formData).then(() => {
        navigate(`/employees/${id}`);
      });
    } else {
      axios.post('http://localhost:5000/employees', formData).then(() => {
        navigate('/employees');
      });
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField label="Name" fullWidth name="name" value={formData.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" fullWidth name="email" value={formData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Department" fullWidth name="department" value={formData.department} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Joining Date" type="date" fullWidth name="joiningDate" value={formData.joiningDate} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">{id ? 'Update' : 'Add'} Employee</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EmployeeForm;
