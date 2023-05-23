import React, { useState } from 'react';
import Review from './Review';
import {FaGithubSquare} from "react-icons/fa";
function App() {

  const [user, setUser] = useState([]);
 


  return <div>
<main> <section className="container">
  <div className="title">
    <h3 className='underline'> our review</h3>
  </div>
  <Review/>
</section> </main>
  </div>;
}

export default App;
