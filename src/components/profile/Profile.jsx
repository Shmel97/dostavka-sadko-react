import React from 'react';
import { Navigate } from 'react-router-dom';
import styles from './Profile.module.scss';

function Profile() {
  if (!window.localStorage.getItem('token')) {
    return <Navigate to="/" />;
  }
  return (
    <div className={styles.profile}>
      <h1>PROFILE</h1>
    </div>
  );
}

export default Profile;
