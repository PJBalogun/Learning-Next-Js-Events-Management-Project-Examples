import EventItem from "./event-item";
import classes from './event-list.module.css'

function EventList(props) {
   
  return (
    <ul className={classes.list}>
        { props.items.map(event=> 
        <EventItem 
            key={event.id}
            date={event.date}
            title={event.title}
            image={event.image}
            location={event.location}
            id={event.id}
        />       
        )}
    </ul>
  )
}

export default EventList;