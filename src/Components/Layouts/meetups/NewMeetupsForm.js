import React, { useRef } from 'react'
import Card from '../../ui/Card'
import classes from './NewMeetupsForm.module.css'

const NewMeetups = (props) => {
        const enterTitleRef=useRef();
        const enterImageRef=useRef();
        const enterAddressRef=useRef();
        const enterDescriptionRef=useRef();

    function onSubmitHandler(e) {
        e.preventDefault();

        const enterTitle=enterTitleRef.current.value;
        const enterImage=enterImageRef.current.value;
        const enterAddress=enterAddressRef.current.value;
        const enterDescription=enterDescriptionRef.current.value;

        const meetupData={
            title:enterTitle,
            image:enterImage,
            address:enterAddress,
            description:enterDescription
        }

        props.onAddMeetup(meetupData);
    }
        

        

    
  return (
    
<Card>
    <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id='title' ref={enterTitleRef} />
        </div>

        <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input type="url" required id='image' ref={enterImageRef} />
        </div>

        <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input type="text" required id='address' ref={enterAddressRef}  />
        </div>

        <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea type="url" required id='description' rows='5' ref={enterDescriptionRef}   />
        </div>

        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>

    </form>
</Card>
    
  )
}

export default NewMeetups
