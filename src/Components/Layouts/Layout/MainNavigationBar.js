import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Favoritecontext from "../../../Store/FavoriteContext";
import classes from "./MainNavigationBar.module.css";

const MainNavigationBar = () => {
  const FavCtx=useContext(Favoritecontext)
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="favorite">
                Favorites
                <span className={classes.badge}>{FavCtx.totalFavorites}</span>
              </Link>
            </li>
            <li>
              <Link to="newmeet">New Meetups</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default MainNavigationBar;
