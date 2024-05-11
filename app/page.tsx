import { getDays, getEvents, getLocations, getSessions } from "@/utils/db";
import { Suspense } from "react";
import { EventSelect } from "./event-select";
import { EventDisplay } from "./[eventSlug]/event";
import NavBar from "./nav-bar";

export default async function Home() {
  const [events, days, sessions, locations] = await Promise.all([
    getEvents(),
    getDays(),
    getSessions(),
    getLocations(),
  ]);
  days.forEach((day) => {
    const dayStartMillis = new Date(day.Start).getTime();
    const dayEndMillis = new Date(day.End).getTime();
    day.Sessions = sessions.filter((s) => {
      const sessionStartMillis = new Date(s["Start time"]).getTime();
      const sessionEndMillis = new Date(s["End time"]).getTime();
      return (
        dayStartMillis <= sessionStartMillis && dayEndMillis >= sessionEndMillis
      );
    });
  });
  const eventNames = events.map((event) => event.Name);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex min-h-screen flex-col items-center justify-between lg:px-24 gap-10 sm:p-10 p-4">
        <EventDisplay event={events[0]} days={days} locations={locations} />
      </main>
    </Suspense>
  );
}
