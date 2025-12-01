function Catcard({ data, onClick, isSelected }) {
  const cardStyle = {
    position: 'relative',
    border: isSelected ? '2px solid #F5A623' : '1px solid grey',
    borderRadius: '8px',
    margin: '12px',
    width: '150px',
    height: '150px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#F5F5DC',
    cursor: 'pointer',
    userSelect: 'none',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.8,
    display: 'block',
  };

  const nameStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0,0,0,0.7)',
    textAlign: 'center',
    pointerEvents: 'none',
    width: '100%', 
    padding: '0 4px',
    boxSizing: 'border-box',
  };

  return (
    <div style={cardStyle} onClick={onClick}>
      <img src={data.img} alt={data.Cat_name} style={imageStyle} />
      <div style={nameStyle}>{data.Cat_name}</div>
    </div>
  );
}

export default Catcard;
 