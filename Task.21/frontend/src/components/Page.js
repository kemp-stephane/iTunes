import React, { useEffect, useState } from 'react';
import './page.css'


const Page = ({ artists, fetchFavourites, favourites }) => {
   const [addFavClicked, setAddFavClicked] = useState(false);

   const id = 
    
      artists.trackId ? artists.trackId : ( 
         artists.artistId && artists.collectionId ? (
            Number(artists.artistId) + Number(artists.collectionId)
         ) : (
            artists.artistId ? artists.artistId : artists.collectionId
         )
      );

   
   const addItem = async () => {
      await fetch('/api/add', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            id,
            favItem: artists
         })
      });
      fetchFavourites();
   }

   const removeItem = async () => {
      await fetch(`/api/delete/${id}`, {
         method: 'DELETE'
      });
      fetchFavourites();
   }

 
   const handleAdd = (e) => { //this function allow users to add item to favourites
      e.preventDefault();
      setAddFavClicked(true);
      addItem();
   }

   
   const handleRemove = (e) => { //this function allow users to remove item from favourites
      e.preventDefault();
      setAddFavClicked(false);
      removeItem();
   }

   useEffect(() => {

      if (favourites && favourites !== undefined) {
         for (let i = 0; i < favourites.length; i++) {
            if (favourites[i].id === id) {
               setAddFavClicked(true);
            }
         }
      }
   }, [favourites, id])
   
   return (
      <div className="page">
       
         <div>   
            {artists.artworkUrl100 ? (
               <img src={artists.artworkUrl100} alt='media artwork' />
            ) : (
               <div>
                  No image
               </div>
            )}
         </div>

         <div>
    
            {!artists.trackName ? (
               <div>
                  <span>Name:</span> {artists.collectionName}
               </div>
            ) : (
               <div>
                  <span>Name:</span> {artists.trackName}
               </div>
            )}
            <div>
               <span>Artist:</span> {artists.artistName}
            </div>
           
            {artists.kind ? (
               <div>
                  <span>Type:</span> {artists.kind}
               </div>
            ) : (
               <div className='wrapper-type'>
                  <span>Type:</span> {artists.wrapperType}
               </div>
            )}

         </div>
            <div>
            
               {addFavClicked ? (
                  <button className="remove" onClick={handleRemove}>Remove
                  </button>
               ) : (
                
                  <button className="fav" onClick={handleAdd}>Add To Favourite
                  </button>
               )}
            </div>
            
      </div>
   )
}

export default Page