import React from 'react'
import classes from './NewMeetups.module.css'
import NewMeetupsForm from '../Components/Layouts/meetups/NewMeetupsForm'
import { useNavigate } from 'react-router-dom'
const NewMeetups = () => {
  const navigate=useNavigate();
  function onAddMeetupHandler(meetupData) {
    fetch(
      'https://react-meetup-358a4-default-rtdb.firebaseio.com/meetup.json',
       {
        method:'POST',
        body:JSON.stringify(meetupData),
        headers:{
          'Content-Type':'application/json'
        }
      
      }

    
    ).then(()=>{
      navigate('/');
    })
  }
  return (
    <div className={classes.main}>
      <NewMeetupsForm onAddMeetup={onAddMeetupHandler}/>
    </div>
  )
}

export default NewMeetups
