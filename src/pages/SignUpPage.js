import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    setError('');
    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }
    if (name.length < 3) {
      setError('Name must be at least 3 characters long.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    navigate('/profile');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create your PopX Account</h1>
      {error && <p style={styles.error}>{error}</p>}
      
      <label style={styles.label}>Full Name</label>
      <input 
        style={styles.input} 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      
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
        placeholder="Create password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={styles.button} onClick={handleSignUp}>Sign Up</button>
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

export default SignUpPage;
