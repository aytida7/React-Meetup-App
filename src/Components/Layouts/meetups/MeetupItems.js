import React, { useContext} from 'react'
import Favoritecontext from '../../../Store/FavoriteContext'
import Card from '../../ui/Card'
import classes from './MeetupItems.module.css'

const MeetupItems = (props) => {
  const FavCtx=useContext(Favoritecontext);
  const itemIsFavorite=FavCtx.itemIsFavorite(props.id);
  // console.log(itemIsFavorite)
  function onSubmitFavHandler() {
    if(itemIsFavorite){
      FavCtx.removeFavorite(props.id);
      
    }
    else{
      FavCtx.addFavorite({
        id:props.id,
        image:props.image,
        title:props.title,
        address:props.address,
        description:props.description
      })
      
      
    }
  }
  return (
    <Card>
    <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={onSubmitFavHandler}>{!itemIsFavorite?"Add to Favorites":"Remove From Favorites"}</button>
        </div>
    </li>
    </Card>
  )
}

export default MeetupItems
