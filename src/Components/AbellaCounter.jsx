function AbellaConuter(){
const cardStyle = {
    position: 'relative',
    border: '1px solid grey',
    borderRadius: '8px',
    margin: '12px',
    width: '150px',
    height: '150px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#F5F5DC',
  };

	return (
		<div style = {cardStyle}>
		<h2>Count Value: </h2>
		<button>[+]</button>
		<button>[-]</button>
		</div>
		)
}
export default AbellaConuter;