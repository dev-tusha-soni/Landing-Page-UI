import React from 'react';
import Card from '../components/Card';
import { FaCamera } from 'react-icons/fa';
import Header from '../components/Header';

// Import Images
import profileImage from '../images/profile.jpg';

const ProfilePage = () => {
  return (
    <>
      <Header />
      <Card>
        <h3>Account Settings</h3>
        <div style={styles.profileContainer}>
          <img
            src={profileImage}
            alt="Profile"
            style={styles.profileImage}
          />
          
          <div>
            <h4>Marry Doe</h4>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </Card>
    </>
  );
};

const styles = {
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px'
  },
  profileImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
  },
  cameraIcon: {
    color: '#6c63ff',
    fontSize: '20px',
    cursor: 'pointer'
  }
};

export default ProfilePage;
