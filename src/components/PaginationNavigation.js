import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PaginationNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pages = ['/', '/login', '/signup', '/profile'];
  const currentPageIndex = pages.indexOf(location.pathname);

  const goToPage = (index) => {
    if (index >= 0 && index < pages.length) {
      navigate(pages[index]);
    }
  };

  return (
    <div style={styles.container}>
      {/* Home Icon */}
      <FaHome style={styles.icon} onClick={() => navigate('/')} />

      {/* Left Arrow */}
      <FaChevronLeft
        style={{ ...styles.icon, opacity: currentPageIndex === 0 ? 0.5 : 1 }}
        onClick={() => goToPage(currentPageIndex - 1)}
      />

      {/* Page Indicator */}
      <span style={styles.text}>{currentPageIndex + 1} of {pages.length}</span>

      {/* Right Arrow */}
      <FaChevronRight
        style={{ ...styles.icon, opacity: currentPageIndex === pages.length - 1 ? 0.5 : 1 }}
        onClick={() => goToPage(currentPageIndex + 1)}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '20px'
  },
  icon: {
    fontSize: '20px',
    cursor: 'pointer',
    color: '#999'
  },
  text: {
    fontSize: '16px',
    color: '#333'
  }
};

export default PaginationNavigation;
