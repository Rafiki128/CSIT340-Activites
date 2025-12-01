import logo from './logo.svg';
import './App.css';
import Namecard from './Components/Namecard.jsx';
import Nameplate from './Components/Nameplate.jsx'
import React,{useState} from 'react';

function App() {
  const listOfStud = [
    {id:1,nameDisplay :"Rafael Abella" ,
          courseDisplay :"BSIT" ,
          emailDisplay : 'rafaelantonio.abella@cit.edu' ,
          bdayDisplay : '01/28/04' ,
          ageDisplay : '21'},
    {id:2,nameDisplay : "Kremer Rosalina" ,
              courseDisplay : "BSIT" ,
              emailDisplay : 'kremer.rosalina@cit.edu' ,
              bdayDisplay : '09/03/04' ,
              ageDisplay : '21'},
    {id:3,nameDisplay : "Kirby Sala"  ,
              courseDisplay : "BSIT" ,
              emailDisplay : 'kirbyklent.sala@cit.edu' ,
              bdayDisplay : '07/24/04'  ,
              ageDisplay : '21'},
    {id:4,nameDisplay : "Elfred Dizon"  ,
              courseDisplay : "BSIT" ,
              emailDisplay : 'kremer.rosalina@cit.edu' ,
              bdayDisplay : '06/07/05'  ,
              ageDisplay : '20'},
    {id:5,nameDisplay : "Mitchel Saniel"  ,
              courseDisplay : "BSIT" ,
              emailDisplay : 'mitchel.saniel@cit.edu' ,
              bdayDisplay : '12/25/04' ,
              ageDisplay : '21'},
    {id:6,nameDisplay : "E.J. Flores"  ,
              courseDisplay : "BSIT" ,
              emailDisplay : 'ej.flores@cit.edu'  ,
              bdayDisplay : '07/24/03' ,
              ageDisplay : '22'},
  ]

  const printList = listOfStud.map(item => <Nameplate data = {item}/>);
  const [studInd,setStudInd]=useState(0);
  
    const prevButt = () => {
        setStudInd((prev) => (prev - 1 + listOfStud.length) % listOfStud.length);
    }
    const nextButt = () => {
        setStudInd((prev) => (prev + 1) % listOfStud.length);
    }   
  return (
    <>
    <div style = {{backgroundColor : '#02343F',
                   minHeight: '100vh',display:'flex', flexWrap:'wrap'}}>

    <h1 style = {{textAlign: 'center',
                  color: '#F5F5DC'}}>CSIT340 G5 Column 3
                  </h1> 
    {/* {printList} */}
<button className= "button-1" onClick={prevButt}>previous</button>
<Nameplate data = {listOfStud[studInd]}/>
<button className= "button-1" onClick={nextButt}>next</button>

    </div>
    </>
  );
}
export default App;
