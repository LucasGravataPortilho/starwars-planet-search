import React from 'react';
import './App.css';
import Table from './components/Table';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Table />
      </AuthProvider>
    </div>
  );
}

export default App;
