import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format.');
      return;
    }
    navigate('/profile');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sign in to your PopX account</h1>
      {error && <p style={styles.error}>{error}</p>}
      <label style={styles.label}>Email Address</label>
      <input 
        style={styles.input} 
        type="email" 
        placeholder="Enter email address" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <label style={styles.label}>Password</label>
      <input 
        style={styles.input} 
        type="password" 
        placeholder="Enter password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={styles.button} onClick={handleLogin}>Login</button>
    </div>
  );
};

const styles = {
  container: {
    width: '400px',
    margin: '100px auto',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  label: {
    color: '#6D28D9',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #ccc'
  },
  button: {
    width: '100%',
    backgroundColor: '#6D28D9',
    color: '#fff',
    borderRadius: '8px',
    padding: '12px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  error: {
    color: 'red',
    marginBottom: '16px'
  }
};

export default LoginPage;
