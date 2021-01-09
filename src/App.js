
import React,{useEffect} from 'react';
require('isomorphic-fetch');
import './App.css';
//import api from './services/api';


function App() {
  useEffect(() => {
  fetch('https://zenquotes.io/api/random',{ mode: 'no-cors'}).then( response => { console.log(response.data);})
  .catch(err => console.log(err))
}, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
