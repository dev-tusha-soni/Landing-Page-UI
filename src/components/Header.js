// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaThLarge, FaQuestionCircle, FaSignInAlt } from 'react-icons/fa';

const Header = ({ title }) => {
  return (
    <div style={styles.headerContainer}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <FaThLarge style={styles.icon} />
        <Link to="/" style={styles.link}>dev<span style={styles.task}>task</span></Link>
        <span style={styles.separator}>{'>'}</span>
        <span style={styles.title}>{title}</span>
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        <span style={styles.zoom}>61.8%</span>
        <FaQuestionCircle style={styles.icon} />
        <FaSignInAlt style={styles.icon} />
        <span style={styles.signIn}>Sign in</span>
      </div>
    </div>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: '1px solid #ccc',
    backgroundColor: '#fff',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  icon: {
    color: '#888',
    fontSize: '16px',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    fontSize: '16px',
    color: '#000',
    fontWeight: 'bold',
  },
  task: {
    color: '#4CAF50',
  },
  separator: {
    color: '#888',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  zoom: {
    color: '#888',
  },
  signIn: {
    color: '#000',
    fontWeight: 'bold',
  },
};

export default Header;
