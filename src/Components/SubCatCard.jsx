import React from 'react';

function SubCatCard({ data }) {
  const cardStyle = {
    border: '1px solid grey',
    borderRadius: '8px',
    padding: '12px',
    margin: '12px',
    width: '120px',
    height: '140px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#F5F5DC',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    marginBottom: '4px',
  };

  return (
    <div style={cardStyle}>
      <img src={data.img} alt={data.name} style={imageStyle} />
      <h4 style={{ margin: 0, fontSize: '14px' }}>{data.name}</h4>
    </div>
  );
}

export default SubCatCard;
 