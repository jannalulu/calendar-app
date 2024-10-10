"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ExportScheduleModal, MapModal } from "./modals";
import { CONSTS, NavItem } from "@/utils/constants";

export default function Example() {
  return;
}

function NavBarItem(props: { item: NavItem }) {
  const { item } = props;
  const isCurrentPage = usePathname().includes(item.href) && item.href != null;
  return (
    <Link
      key={item.name}
      href={item.href}
      className={clsx(
        isCurrentPage
          ? "bg-rose-50 text-rose-400"
          : "text-gray-400 hover:bg-gray-100",
        "group flex gap-1 cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium"
      )}
    >
      <item.icon className="block h-5 w-auto" />
      {item.name}
    </Link>
  );
}

function SmallNavBarItem(props: { item: NavItem }) {
  const { item } = props;
  const isCurrentPage = usePathname().includes(item.href) && item.href != null;
  return (
    <Disclosure.Button
      key={item.name}
      as="a"
      href={item.href}
      className={clsx(
        isCurrentPage
          ? "bg-rose-50 text-rose-400"
          : "text-gray-400 hover:bg-gray-100",
        "flex gap-2 rounded-md px-3 py-2 text-base font-medium"
      )}
    >
      <item.icon className="block h-5 w-auto" />
      {item.name}
    </Disclosure.Button>
  );
}
