import React, { useContext } from 'react'
import MeetupLists from '../Components/Layouts/meetups/MeetupLists'
import Favoritecontext from '../Store/FavoriteContext'
import classes from './Favorites.module.css'

const Favorites = () => {
  const FavCtx=useContext(Favoritecontext);

  let content;

  if(FavCtx.totalFavorites===0){
    content=<p>No Favorites are added. Add some!!!</p>
  }
  else{
    content=<MeetupLists meetups={FavCtx.favorites}/>
  }
  return (
    <div className={classes.main}>
      <h1>My Favorites</h1>
      {content}
    </div>
  )
}

export default Favorites
