import React from 'react';

export const RegistrationButton = () => {
  const openRegistrationForm = () => {
    const registrationUrl = '/register'; 
    window.open(registrationUrl, '_blank'); 
  };

  return (
    <button onClick={openRegistrationForm} style={styles.button}>
      Створити аккаунт
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
  },
};
