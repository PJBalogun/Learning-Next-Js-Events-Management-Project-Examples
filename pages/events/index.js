import { useRouter } from "next/router";
import { getAllEvents } from "../../data/dummy-data";
import EventList from "../../components/event/event-list";
import EventSearch from "../../components/event/event-search";

export default function Home() { 
  const events = getAllEvents(); 
  const router = useRouter()

  function filterEventHandler(month,year){
    const fullPath = "/events/" + year+"/"+ month 
    router.push(fullPath);
  }
  return (
   <>
     <EventSearch onFilterEvents={filterEventHandler}/>
     <EventList items={events}/>
   </>
  )
}