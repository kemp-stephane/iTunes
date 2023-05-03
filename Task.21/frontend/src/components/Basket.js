import React from 'react'
import { Link } from 'react-router-dom';
import AddFav from './AddFav';
import './page.css'

const Basket = ({fetchFavourites, favourites}) => {
   return (
      <div>
         <div>
            <Link to='/'>
               <button className="back">Back</button>
            </Link>
               </div>
               <h3>
                  <u>My Favourites</u>
               </h3>
            <br/><br/>   

         <div>
            {(favourites === undefined) ? (
               <div>
               </div>

            ) : (

               <div>
                  {favourites && favourites.map((artists) => (
                     <AddFav
                        artists={artists}
                        key={artists.id}
                        fetchFavourites={fetchFavourites}
                     />
                  ))}
               </div>
            )}
         </div>
      </div>
   )
}

export default Basket