import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Result from './Result'
import Search from './Search'
import './app.css'
import {FaCartArrowDown} from 'react-icons/fa'


   const HomePage = ({fetchFavourites, favourites}) => {
      const [results, setResults] = useState({});
      const [term, setTerm] = useState('');
      const [media,setMedia] = useState('');

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
    // Function to handle the media type change
    const handleMediaChange = (e) => {
      setMedia(e.target.value);// Get value from the input and save it in 'media'
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
         <div>
               {/* Search container component containing the term input, media input and search button */}
               <Search
                  handleSubmit={handleSubmit}
                  term={term}
                  handleTermChange={handleTermChange}
                  handleMediaChange={handleMediaChange}
               />
            </div>
      
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