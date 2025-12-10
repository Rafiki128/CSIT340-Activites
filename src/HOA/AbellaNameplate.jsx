import React from 'react';

export function AbellaNameplate() {
  const cardStyle = {
    maxWidth: '300px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#EDE8D0',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '15px',
  };

  const nameStyle = {
    margin: '10px 0',
    fontSize: '1.5em',
    color: '#333',
  };

  const textStyle = {
    margin: '5px 0',
    color: '#555',
  };

  return (
    <div style={cardStyle}>
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocKObBrVAFi_ZTSwlK9-MqqgZ81S3Jlhbti5756B4jSUsqVTgc1c=s288-c-no-rj-mo"
        alt="picture"
        style={imgStyle}
      />
      <h1 style={nameStyle}>Rafael Antonio S. Abella</h1>
      <p style={textStyle}>21</p>
      <p style={textStyle}>BSIT 3</p>
    </div>
  );
}
