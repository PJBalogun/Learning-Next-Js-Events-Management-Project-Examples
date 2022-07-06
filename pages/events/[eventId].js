import { useRouter } from "next/router";
import {getEventById} from '../../helpers/api-util'

import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

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

export default EventDetailPage;