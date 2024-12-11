import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Paper, Button } from '@mui/material';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';  // Chart.js library for quick stats
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';  

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [recentEmployees, setRecentEmployees] = useState([]);
  const navigate = useNavigate();  

  useEffect(() => {
    axios.get('http://localhost:5000/employees')
      .then(response => {
        setEmployees(response.data);
        const sortedEmployees = response.data.sort((a, b) => new Date(b.joiningDate) - new Date(a.joiningDate));
        setRecentEmployees(sortedEmployees.slice(0, 5)); 
      });
  }, []);

  const departmentCount = employees.reduce((acc, employee) => {
    acc[employee.department] = (acc[employee.department] || 0) + 1;
    return acc;
  }, {});

  const totalEmployees = employees.length;

  const chartData = {
    labels: Object.keys(departmentCount),
    datasets: [
      {
        label: 'Department-wise Employee Count',
        data: Object.values(departmentCount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const handleEmployeeListClick = () => {
    navigate('/employees');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Employee Dashboard</Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6">Total Employees</Typography>
            <Typography variant="h4">{totalEmployees}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6">Department-wise Employee Count</Typography>
            <Bar data={chartData} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6">Recently Joined Employees</Typography>
            <ul>
              {recentEmployees.map(employee => (
                <li key={employee.id}>
                  {employee.name} - {new Date(employee.joiningDate).toLocaleDateString()}
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleEmployeeListClick}  
          >
            View Employee List
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
