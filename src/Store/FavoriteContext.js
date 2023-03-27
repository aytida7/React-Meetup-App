import React, { createContext, useState } from 'react'

const Favoritecontext=createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite:(favoriteMeetup)=>{},
    removeFavorite:(meetupId)=>{},
    itemIsFavorite:(itemIsFavorite)=>{}
})

export const FavoriteContext = (props) => {
    const [favoritesCollection,setFavoritesCollection]=useState([]);
    
    const context={
        favorites:favoritesCollection,
        totalFavorites:favoritesCollection.length   ,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemIsFavorite:itemIsFavoriteHandler
    }

    function addFavoriteHandler(favoriteMeetup){
        setFavoritesCollection((prevFavoritesCollection)=>{
            // console.log(prevFavoritesCollection.concat(favoriteMeetup))
            return prevFavoritesCollection.concat(favoriteMeetup)
        })
    }

    function removeFavoriteHandler(meetupId) {
        setFavoritesCollection((prevFavoritesCollection)=>{
            return prevFavoritesCollection.filter(meetup=>
                 meetup.id!==meetupId
            )
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        // console.log(favoritesCollection.some(meetup=>meetup.id===meetupId))
        return favoritesCollection.some(meetup=>meetup.id===meetupId)
    }


  return (
    <Favoritecontext.Provider value={context}>
        {props.children}
    </Favoritecontext.Provider>
  )
}

export default Favoritecontext
