import React from 'react';

function Idea3() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Water Conservation</h1>
      <img src="https://cdn.pixabay.com/photo/2016/11/21/17/16/drip-irrigation-1841264_1280.jpg" alt="Water Conservation" style={styles.image} />
      <p style={styles.paragraph}>
        Water conservation involves efficient water management practices like drip irrigation, rainwater harvesting, and proper soil management. 
        By reducing water wastage, farmers can ensure crops get adequate hydration while conserving natural resources. Drip irrigation, for example, delivers water directly to the roots, minimizing water loss due to evaporation or runoff.
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

export default Idea3;
