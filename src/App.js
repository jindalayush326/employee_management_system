import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import { EmployeeProvider } from './contexts/EmployeeContext';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeForm from './components/EmployeeForm';
import { Box } from '@mui/material';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <Box sx={{ padding: 2 }}>
          <Routes>  
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/add" element={<EmployeeForm />} />
            <Route path="/employees/:id/edit" element={<EmployeeForm />} />
            <Route path="/employees/:id" element={<EmployeeDetails />} />
          </Routes>
        </Box>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
