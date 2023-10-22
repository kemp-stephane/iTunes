import React from 'react';
import './page.css'


const AddFav = ({ artists,fetchFavourites }) => {
   
   const removeItem = async () => {
      await fetch(`/api/delete/${artists.id}`, {
         method: 'DELETE'
      });
      fetchFavourites();
   }


   const handleRemove = (e) => {
      e.preventDefault();// 
      removeItem();
   }
   return (
      <div>
         <div>
            {artists.favItem.artworkUrl100 ? (
               <img src={artists.favItem.artworkUrl100} alt='media artwork' />
            ) : (
               <div>
                  No image
               </div>
            )}
         </div>
         <div>
            {!artists.favItem.trackName ? (
               <div>
                  <span>Name:</span> {artists.favItem.collectionName}
               </div>
            ) : (
               <div>
                  <span>Name:</span> {artists.favItem.trackName}
               </div>
            )}
            <div>
               <span>Artist:</span> {artists.favItem.artistName}
            </div>
            {artists.favItem.kind ? (
               <div>
                  <span>Type:</span> {artists.favItem.kind}
               </div>
            ) : (
               <div>
                  <span>Type:</span> {artists.favItem.wrapperType}
               </div>
            )}
         </div>
         {/*this button allow users to remove item from favourites */}
         <button onClick={handleRemove}>Remove</button>
         <div>
         ------------------------------------------
            <br/><br/>
         </div>
      </div>
   )
}

export default AddFav