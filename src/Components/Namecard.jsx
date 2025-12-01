function Namecard(props){
	const cardstyle = {
  						border: '1px solid grey',
  						borderRadius: '8px',
  						padding: '16px',
  						margin: '12px',
  						width: '300px',
  						boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
 					 	backgroundColor: '#fff',
  						fontFamily: 'Arial, sans-serif',
  						color: '#333',
  						textAlign: 'center',
  						backgroundColor: '#F5F5DC'
					};				 
	return (
		<>
		<div style ={cardstyle}>
		<h3>{props.nameDisplay}</h3>
		<p>Course: {props.courseDisplay}</p>
		<p>Email: {props.emailDisplay}</p>
		<p>Birthday: {props.bdayDisplay}</p>
		<p>Age: {props.ageDisplay}</p>
		</div>
		</>
		)
}

export default Namecard;