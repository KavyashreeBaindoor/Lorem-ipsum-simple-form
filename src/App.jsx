import React from 'react';
import { useState } from 'react';
import text from './data';

const App = () => {
         const [val,setVal]=useState(0);
         const [data,setData]=useState([]);
         

         const changeHandler=(e)=>{
             setVal(e.target.value) 
                }

                         const submitHandler=(e)=>{
                          
                           e.preventDefault();
                             let sub= Number(val);
                             
                             if(sub<=0){
                                    
                                  sub=0;
                             }
                             if(sub>8){
                                    sub=8
                                    
                             }
                             else if(sub>=1 && sub<=8){ 
                                   
                                    setData(text.slice(0,sub))
                     }}
  return (
    <section className="section-center">
         <h3>Generate Lorem Ipsum</h3>
         <form action="" className='lorem-form'>
                  <label htmlFor="para">Paragraphs:</label>
                  <input type="number" id="para" value={val} onChange={changeHandler} />
                  <button className="btn" onClick={submitHandler}>Generate</button>
         </form>
         
                 <article>
                  {data.map((para,index)=>{
                           return <p key={index}>{para}</p>
                  })}
                 </article>
        
    </section>
  )
}

export default App