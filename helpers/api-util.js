
export async function getAllEvents(){
    const options = {method: 'GET'};
    const response = await fetch("https://learn-next-js-tutorial-default-rtdb.firebaseio.com/events.json", options)
    const data = await response.json();
   
    const events = [];

    for (const key in data) {
       events.push({
        id: key,
        ...data[key]
       })
    }

    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    
    return allEvents.filter((event) => event.isFeatured);
  }

  export async function getFilteredEvents(dateFilter) {
    let { year, month } = dateFilter;
    const allEvents = await getAllEvents();

    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export async function getEventById(id) {
    const allEvents = await getAllEvents();

    return allEvents.find((event) => event.id === id);
  }