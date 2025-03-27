import React from 'react';

const ProfilePage = () => {
  const userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    joinedDate: 'March 25, 2025'
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome, {userData.name}!</h1>
      <p style={styles.text}>Email: {userData.email}</p>
      <p style={styles.text}>Joined on: {userData.joinedDate}</p>
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
    marginBottom: '16px'
  },
  text: {
    fontSize: '16px',
    color: '#6b7280'
  }
};

export default ProfilePage;
