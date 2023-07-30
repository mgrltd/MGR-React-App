import React, { useState, useEffect } from 'react';
import './App.css'

const App = () => {
 const [isLoading, setIsLoading] = useState(true);


 useEffect(() => {
   setTimeout(() => {
     setIsLoading(false);
      }, 3000);
 }, []);


 return (
     <div className="App">
      {isLoading ?
      <div>
        <div className="spinner-container">
          <div className="spinner"></div>
          <div className="saround">  <img alt='MGR_icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7OiEKPujgXsrob_L8sL4M0SQdSEiGx2QxD_PfZ4qWA&s' height={50} width={50}  style={{ borderRadius: '50px' }} />  </div>
        </div>
        <div>
          <div>
            <h1>Welcome </h1>
            <h3>To</h3>
            <h1>MGR_Training_Institute </h1>
            <a className="App-link" href="https://www.facebook.com/profile.php?id=100094577346844"  >  Fallow MGR_Training_Institute Page </a>
          </div>
        </div>
      </div>
      :
      <div>
      </div>
      }
 
</div>


 );
};


export default App;
