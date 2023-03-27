import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AllMeetups from './Pages/AllMeetups'
import Favorites from './Pages/Favorites'
import NewMeetups from './Pages/NewMeetups'

import Layout from './Components/Layouts/Layout/Layout'


const router=createBrowserRouter([
  {path:'/',element:<Layout/>,
  children:[
  {index:true,element:<AllMeetups/>},
  {path:'favorite',element:<Favorites/>},
  {path:"newmeet",element:<NewMeetups/>}
  ]},
  
  
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
