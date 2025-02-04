'use client';

import { unstable_noStore as noStore } from "next/cache"; // unstable_noStore is used to disable the cache for the current page only and it will not cache the page.
import { CurrentTimeFromAPI } from "./components/CurrentTimeFromAPI";

export default function Home() {
  noStore(); // Disable cache for the current page
  const timeOnServer = new Date().toLocaleTimeString('en-US');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        This is a Next.js application hosted on Azure Web Apps with hybrid rendering. The time of the server is <strong>{timeOnServer}</strong>.
      </div>
      <CurrentTimeFromAPI />
    </main>
  );
}
