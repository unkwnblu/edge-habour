"use client";

import dynamic from "next/dynamic";

const WaitlistClient = dynamic(() => import("./components/WaitlistClient"), {
  ssr: false,
});

export default function Page() {
  return <WaitlistClient />;
}
