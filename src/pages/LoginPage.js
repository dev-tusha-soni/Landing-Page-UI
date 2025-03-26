import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/profile');
  };

  return (
    <>
      <Header title="Login Screen" />
      <div style={styles.container}>
        <h1 style={styles.title}>Sign in to your PopX account</h1>
        <p style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <label style={styles.label}>Email Address</label>
        <input style={styles.input} type="email" placeholder="Enter email address" />
        
        <label style={styles.label}>Password</label>
        <input style={styles.input} type="password" placeholder="Enter password" />
        
        <button style={styles.button} onClick={handleLogin}>Login</button>
      </div>
    </>
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
  text: {
    color: '#777',
    marginBottom: '20px'
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
  }
};

export default LoginPage;
