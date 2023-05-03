import React from 'react';
import Page from './Page'; 

const Result = ({ output, fetchFavourites, favourites }) => {
   return(
      <div>
         {(output.results !== undefined) ? (
            <>
         {(output.resultCount !== 0) ? (
            <> 
            <div>
               {output && output.results.map((artists) => (
               <Page
               artists={artists}
                  key = {
                     artists.trackId ? artists.trackId : (
                     artists.artistId && artists.collectionId ? (
                     Number(artists.artistId) + Number(artists.collectionId)
                     ) : (
                     artists.artistId ? artists.artistId : artists.collectionId
                        )
                     )
                  }
                  fetchFavourites={fetchFavourites}
                  favourites={favourites}
               />
            ))}          
           </div>
                  </>
               ) : (
                  <>
                  </>
               )}
            </>
         ) : (
            <>

            </>
         )}
      </div>
   )
};


export default Result;
