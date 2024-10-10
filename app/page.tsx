import SummaryPage from "./summary-page";
import EventPage from "./[eventSlug]/event-page";
import { getEvents } from "@/db/events";
import { CONSTS } from "@/utils/constants";

export default async function Home() {
  try {
    const events = await getEvents();
    const sortedEvents = events.sort((a, b) => {
      return new Date(a.Start).getTime() - new Date(b.Start).getTime();
    });
    if (CONSTS.MULTIPLE_EVENTS) {
      return <SummaryPage events={sortedEvents} />;
    } else {
      return <EventPage event={sortedEvents[0]} />;
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    return <div>Error loading events. Please try again later.</div>;
  }
}
