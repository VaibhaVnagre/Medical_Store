import React,{useState} from 'react';
import './App.css';
import Header from './Component/Header/Header';
import MainForm from './Component/Header/MainForm';


function App() {
 const [data,setData] = useState("")
 const [item , setItem] = useState([])

const showdata = (e) =>{
  setData(e.target.value);
  
}
const onclickHandeler = (e)=>{
e.preventDefault();


}

  return (
    <div className="App">

   
     <Header/><br></br><br></br><br></br><br></br>
    
     <MainForm />


{/* <label>Product</label> 
<input type='text' onChange={showdata}/>
<button onClick={onclickHandeler}>Add</button>
<li>{item}</li> */}
    </div>
  );
}

export default App;



