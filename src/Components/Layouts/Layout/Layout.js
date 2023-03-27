import React from 'react'
import classes from './Layout.module.css'
import MainNavigationBar from './MainNavigationBar'


const Layout = (props) => {
  return (
    <div>
  <MainNavigationBar/>
   
  <main className={classes.main}>
    {props.children}
  </main>
  </div>
      
    
  )
}

export default Layout
