import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Result from './Result'
import {Form, FormControl, FormGroup} from 'react-bootstrap'
import './page.css'
import {FaCartArrowDown} from 'react-icons/fa'


   const HomePage = ({fetchFavourites, favourites}) => {
      const [results, setResults] = useState({});
      const [term, setTerm] = useState('');
      const [media] = useState('');

   const fetchOutput = async () => {
      const result = await fetch(`/search?term=${term}&media=${media}`);
      const data = await result.json();
      setResults(data.response);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (term === '') {
         alert(`Please enter a term before searching`);
      } else {
         fetchOutput();
      }
   }

   const handleTermChange = (e) => {
      setTerm(e.target.value);
   }

   return (
      <div>
         <div>
            <h1 className="heading"><u>iTunes Store and Apple Books Store</u></h1>
         </div>

         <div>
            <Link to='/favourites'>
               <button className='btn'><FaCartArrowDown/> Basket</button>
            </Link>
         </div>
            <br/><br/><br/><br/>
         <div>
         <Form onSubmit={handleSubmit}>
            <FormGroup>
               <FormControl type='text' className='search-bar' name='term'
                  value={term} onChange={handleTermChange}
               />

               <button  className="search" variant='secondary' type='submit'>
                  Search
               </button>
            </FormGroup>
         </Form>
      </div> 
               <br/><br/>
         <div>
            <Result /*this is to display the output of the content searched */
               output={results}
               fetchFavourites={fetchFavourites}
               favourites={favourites}
            />
         </div>      
         </div>

    
   )
}

export default HomePage