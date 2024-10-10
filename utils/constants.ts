import { CakeIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export type NavItem = {
  name: string;
  href: string;
  icon: any;
};

export const CONSTS = {
  TITLE: "EV Events Calendar",
  DESCRIPTION:
  {
    text: "Events that EV people may find interesting, add your own here!",
    linkText: "here",
    linkUrl: "https://airtable.com/app5DkpLXHBGd9bAE/pagRHdFTlDZONgNUD/form"
  },
  FULL_DESCRIPTION: "Events that EV people may find interesting, add your own here! https://airtable.com/app5DkpLXHBGd9bAE/pagRHdFTlDZONgNUD/form",
  
  MULTIPLE_EVENTS: true,
  // If you have multiple events, add your events to the nav bar below
  // If you only have one event, you can leave the array empty
  // Find available icons at https://heroicons.com/
  NAV_ITEMS: [
    { name: "Test0", href: "/Test0", icon: UserGroupIcon },
    { name: "Test1", href: "/Test1", icon: CakeIcon },
  ] as NavItem[],
};
