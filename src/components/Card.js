import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={styles.card}>
      {children}
    </div>
  );
};

const styles = {
  card: {
    width: '350px',
    height: '500px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    margin: '20px auto',
  }
};

export default Card;
