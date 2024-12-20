import { CONSTS } from "@/utils/constants";
import { base } from "./db";

export type Event = {
  Name: string;
  Description: string;
  Website: string;
  Guests?: string[];
  "Start": string;
  //"Start time": string;
  "End": string;
  "Location names"?: string[];
  //"End time": string;
};

const eventFields = [
  "Name",
  "Description",
  "Website",
  "Start",
  //"Start time",
  "End",
  //"End time",
  "Location names",
];

const fieldsIfMultipleEvents = [
  "Guests",
  "Location names"
];

export async function getEvents() {
  try {
    const events: Event[] = [];
    await base("Events")
      .select({
        fields: [
          ...eventFields,
          ...(CONSTS.MULTIPLE_EVENTS ? fieldsIfMultipleEvents : [])
        ],
      })
      .eachPage(function page(records: any, fetchNextPage: any) {
        records.forEach(function (record: any) {
          if (record.fields.Start && record.fields.End) {
            events.push(record.fields);
          }
        });
        fetchNextPage();
      });
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export async function getEventByName(name: string) {
  const events: Event[] = [];
  await base("Events")
    .select({
      fields: [
        ...eventFields,
        ...(CONSTS.MULTIPLE_EVENTS ? fieldsIfMultipleEvents : [])
      ],
      filterByFormula: `{Name} = "${name}"`,
    })
    .eachPage(function page(records: any, fetchNextPage: any) {
      records.forEach(function (record: any) {
        events.push(record.fields);
      });
      fetchNextPage();
    });
  return events[0];
}
