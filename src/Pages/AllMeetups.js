import React, { useEffect, useState } from 'react'
import MeetupLists from '../Components/Layouts/meetups/MeetupLists';
import classes from './AllMeetups.module.css'

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

const AllMeetups = () => {

  const [isLoading,setIsLoading]=useState(true);
  const [dataFetched,setDataFetched]=useState([]);

  useEffect(()=>{
    fetch('https://react-meetup-358a4-default-rtdb.firebaseio.com/meetup.json').then((response)=>{
    return response.json();
  }).then((data)=>{
      const meetups=[];

      for(const key in data){
        const meetup={
            id:key,
            ...data[key]
        };
      
        meetups.push(meetup);
        
      }

    setIsLoading(false);

    setDataFetched(meetups);

  });
  },[])

  

  if(isLoading){
    return(
      <div>
        <p>Loading....</p>
      </div>
    )
  }





  return (
    <section className={classes.main}>
      <h1>All meetups</h1>
      <MeetupLists meetups={dataFetched}/>
    </section>
  )
}

export default AllMeetups
