import React from 'react';

function Idea1() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Crop Rotation</h1>
      <img src="https://cdn.pixabay.com/photo/2020/04/28/08/11/agriculture-5105506_1280.jpg" alt="Crop Rotation" style={styles.image} />
      <p style={styles.paragraph}>
        Crop rotation is a farming practice where different types of crops are planted in the same field across seasons. It helps improve soil health, reduce the buildup of pests, and minimize the need for chemical fertilizers. 
        By alternating crops, farmers can maintain soil fertility, break the cycle of pest and disease infestations, and increase the biodiversity of the soil.
      </p>
      <button style={styles.button} onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}

const styles = {
  container: { padding: '20px', textAlign: 'center' },
  header: { fontSize: '2em', color: '#2e8b57', animation: 'slideDown 1s ease-in' },
  image: { width: '100%', maxWidth: '500px', marginTop: '20px', animation: 'fadeIn 1.5s' },
  paragraph: { fontSize: '1.2em', marginTop: '20px', animation: 'fadeInUp 1.5s' },
  button: {
    padding: '10px 20px',
    backgroundColor: '#2e8b57',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    animation: 'fadeIn 1.5s'
  },
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
  },
  '@keyframes slideDown': {
    '0%': { transform: 'translateY(-20px)', opacity: 0 },
    '100%': { transform: 'translateY(0)', opacity: 1 }
  },
  '@keyframes fadeInUp': {
    '0%': { transform: 'translateY(20px)', opacity: 0 },
    '100%': { transform: 'translateY(0)', opacity: 1 }
  },
};

export default Idea1;
