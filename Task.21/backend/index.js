const express = require('express');
const router = express.Router();

let favourites = [];
getFavouritesHandler = (req, res) => {
   if (favourites.length === 0) {
      res.send({
         message: "You have no favourites to display"
      })
   } else {
      res.send({
         favourites
      })
   }
}

router.get('/', getFavouritesHandler)

postFavouritesHandler = (req, res) => {
   const id = Math.floor(100000 + Math.random() * 900000);

   newItem = Object.assign(req.body);
   favourites.push(newItem);

   return res.send({
      message: 'Item added successfully',
      favourites
   });
}

router.post('/add', postFavouritesHandler)

deleteFavouritesHandler = (req, res) => {

   const id = Number(req.params.id);
   for (let i = 0; i < favourites.length; i++) {
      if (favourites[i].id === id) {
         favourites.splice(i, 1);
      };
   };
   res.send({
      message: `Item with id ${id} has been deleted`,
      favourites
   });
}
router.delete('/delete/:id', deleteFavouritesHandler);

module.exports = router;