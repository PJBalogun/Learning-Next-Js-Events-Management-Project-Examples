import EventList from "../components/event/event-list";
import { getFeaturedEvents } from "../data/dummy-data";


function HomePage() {
  const events = getFeaturedEvents(); 

  return ( 
    <div>
      <EventList items={events}/>
    </div>
   );
}

export default HomePage;
