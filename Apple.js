import React, { useState, useEffect } from 'react';
import './Apple.css';
import { getPredictionData} from './afile.js';

function App(){

    const [result, setResult] = useState('');


const uploadImage = async(files) => {

    console.log(files[0])

    const data = await (getPredictionData(files[0]))
   setResult(data);
   console.log(data);
}

const reset = () =>{
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '')
    setResult('')
}

 return(
 <div>
    <div>
        <div className="App">
             <h1 className="header">কৃষিসেবা</h1>
         </div> 
    </div>
    <div>
    <div className="motto">
    আপেলের রোগশনাক্তকরণ
    </div>
    </div>
    <div className='photo'>
        Click here to upload Photo
    </div>
    <div className='result'>
        Result
    </div>
    <div className='label'>
       <div> <u>Label </u> <br/>{result.class==null?'---':(result.class)} </div>
       </div>
       <div className='confidence'>
      <div> <u> Confidence </u> <br/>{result.confidence==null?'---':parseFloat(result.confidence).toFixed(1)+' %'}</div>
    </div>
     <div className="image">
    
    <input
        type="file" 
        className='choose'
        onChange={(e) => {uploadImage(e.target.files)
    }
}
/>
</div>
<div>
    <button onClick={reset} className='clear'> Reset  </button>
 </div>
 </div>


 )

}
export default App;