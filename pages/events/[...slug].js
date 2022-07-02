import { useRouter } from "next/router";
import EventList from "../../components/event/event-list";
import { getFilteredEvents } from "../../data/dummy-data";

import ResultsTitle from "../../components/results-title/results-title";
import ErrorAlert from "../../components/error-alert/error-alert/error-alert";
import Button from "../../components/ui/button"
const FilteredEventPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;


  if(!filterData)
    return <p className="center">loading...</p>;

  const [filterYear,filterMonth] = [+filterData[0] ,+filterData[1]];

  if(isNaN(filterYear ||
    isNaN(filterMonth) ||
    filterYear >2030 ||
    filterYear <2021||
    filterMonth > 12 ||
    filterMonth < 1
    ))
    return <>
       <ErrorAlert>Invalid filter. Please adjust your values</ErrorAlert>
       <Button link="/events">Show all events</Button>
    </>
  const filterEvents = getFilteredEvents({year: filterYear,month: filterMonth});

  if(filterEvents.length === 0)
  return <>
    <ErrorAlert>No event found for filter</ErrorAlert>
    <Button link="/events">Show all events</Button>
  </>

  return (
    <div>
      <EventList items={filterEvents}/>
    </div>
  )
}

export default FilteredEventPage;