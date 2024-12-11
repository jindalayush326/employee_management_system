import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const EmployeeContext = createContext();

export const useEmployeeContext = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/employees");
      setEmployees(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load employees");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, loading, error, fetchEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};
