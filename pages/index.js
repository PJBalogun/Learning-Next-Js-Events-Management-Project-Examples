import EventList from "../components/event/event-list";
import { getFeaturedEvents } from "../helpers/api-util";


function HomePage(props) {

  if(!props.events) 
  return <p>Loading</p>
  return ( 
    <div>
      <EventList items={props.events}/>
    </div>
   );
}


export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    }
}
}
export default HomePage;
