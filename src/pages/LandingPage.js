import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      {/* Header Component with Title */}
      <Header title="Landing Screen" />
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Welcome to PopX</h1>
          <p style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/signup" style={styles.primaryButton}>Create Account</Link>
          <Link to="/login" style={styles.secondaryButton}>Already Registered? Login</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f3f4f6'
  },
  card: {
    width: '320px',
    padding: '32px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  text: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '24px'
  },
  primaryButton: {
    display: 'block',
    backgroundColor: '#6D28D9',
    color: '#fff',
    textAlign: 'center',
    padding: '12px',
    borderRadius: '8px',
    textDecoration: 'none',
    marginBottom: '12px'
  },
  secondaryButton: {
    display: 'block',
    backgroundColor: '#E5E7EB',
    color: '#000',
    textAlign: 'center',
    padding: '12px',
    borderRadius: '8px',
    textDecoration: 'none'
  }
};

export default LandingPage;
