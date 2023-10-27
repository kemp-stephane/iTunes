import React from 'react'
// Import react-bootstrap components
import { Form, FormControl, FormGroup, FormSelect } from 'react-bootstrap'
import './app.css'

const Search = ({
      handleSubmit,
      term,
      handleTermChange,
      handleMediaChange
   }) => {
   // Array containing objects representing each media type and their corresponding value
   const media = [
      {type: 'All media', value: 'all'},
      {type: 'Movie', value: 'movie'},
      {type: 'Podcast', value: 'podcast'},
      {type: 'Music', value: 'music'},
      {type: 'Audio book', value: 'audiobook'},
      {type: 'Short film', value: 'shortFilm'},
      {type: 'TV show', value: 'tvShow'},
      {type: 'Software', value: 'software'},
      {type: 'Ebook', value: 'ebook'}
   ];

   return (
      <div>
         <Form onSubmit={handleSubmit}>
            <FormGroup>
               <FormControl
                  type='text'value={term} onChange={handleTermChange}
               />
               <button className="bt1" type='submit'>
                  Search
               </button>
            </FormGroup>

            <FormGroup>
               {/* Dropdown contain a list of media types */}
               <FormSelect onChange={handleMediaChange}>
                  {media && media.map((media) => (
                     <option key={media.value} value={media.value}>
                        {media.type}
                     </option>
                  ))}
               </FormSelect>
            </FormGroup>
         </Form>
      </div>
   )
}

export default Search