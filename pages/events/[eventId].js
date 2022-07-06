import {getEventById, getAllEvents} from '../../helpers/api-util'

import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
const EventDetailPage = (props) => {
  const event = props.event;

   if(!event)
    return <p>No Event Found</p>
  return (
    <>
      <EventSummary title={event.title}/>
      <EventLogistics
       date={event.date}
       address = {event.location}
       image={event.image}
       imageAlt={event.title}
      />
      <EventContent>
        <>{event.description}</>  
      </EventContent> 
    </>
  )
}
export async function getStaticProps(context){
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      event
    }
  }
}

export async function getStaticPaths(){
  const allEvents = await getAllEvents();
  const paths = allEvents.map(event => ({params : {eventId : event.id}}));

  return {
    paths,
    fallback : false
  }
}
export default EventDetailPage;