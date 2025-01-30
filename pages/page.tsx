// pages/index.tsx

import React from 'react';

const HomePage = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Homepage</h1>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click Me
      </button>
    </div>
  );
};

export default HomePage;
