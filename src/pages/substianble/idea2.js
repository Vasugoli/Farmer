import React from 'react';

function Idea2() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Organic Fertilizers</h1>
      <img src="https://cdn.pixabay.com/photo/2017/07/01/23/47/compost-2467798_1280.jpg" alt="Organic Fertilizers" style={styles.image} />
      <p style={styles.paragraph}>
        Organic fertilizers, such as compost, manure, and other natural substances, are derived from plant or animal matter. They are free from synthetic chemicals and enhance the biological activity in the soil. 
        Organic fertilizers improve soil structure, increase nutrient availability, and reduce environmental pollution compared to chemical fertilizers.
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

export default Idea2;
