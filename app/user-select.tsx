"use client"
import { Guest } from "@/utils/db";
import { useContext } from "react";
import { SelectHosts } from "./[eventSlug]/add-session/add-session-form";
import { UserContext } from "./context";

export function UserSelect({guests, children, showOnlyWhenUserSet}: {guests: Guest[], children: React.ReactNode, showOnlyWhenUserSet?: boolean}) {
  const { user:currentUser, setUser } = useContext(UserContext);
  return (!showOnlyWhenUserSet || currentUser) && <div className="flex gap-12">
    {children}
    <SelectHosts guests={guests} hosts={guests.filter(guest => guest.ID === currentUser)} setHosts={hosts => setUser?.(hosts?.at(-1)!?.ID || null)}  />
  </div>
}