import React from 'react'
import MeetupItems from './MeetupItems'
import classes from './MeetupLists.module.css'

const MeetupLists = (props) => {
  return <ul className={classes.list}>
    {props.meetups.map(meetup=><MeetupItems key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address} description={meetup.description} />)}
  </ul>
}

export default MeetupLists
