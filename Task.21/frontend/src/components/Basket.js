import React from 'react'
import { Link } from 'react-router-dom';
import AddFav from './AddFav';
import './app.css'

const Basket = ({fetchFavourites, favourites}) => {
   return (
      <div className="favo">
         <div> 
            <Link to='/'>  {/* this button link you back to the homepage*/}
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

               <div> {/* what you will see inside the basket */}
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