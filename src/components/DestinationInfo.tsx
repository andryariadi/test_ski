"use client";

import { useState } from "react";
import DestinationCard from "./DestinationCard";
import { Destination } from "@/types";
// import DestinationMap from "./DestinationMap";

import dynamic from "next/dynamic";

const DestinationMap = dynamic(() => import("@/components/DestinationMap"), {
  ssr: false, // 👈 HANYA render di client
});

interface DestinationInfoProps {
  destinations: Destination[];
}

export default function DestinationInfo({ destinations }: DestinationInfoProps) {
  const [activeDestination, setActiveDestination] = useState<Destination>(destinations[0]);

  return (
    <section className="w-full max-w-5xl mx-auto">
      <div className="min-h-[28rem] grid grid-cols-1 lg:grid-cols-2 gap-y-7 lg:gap-y-0 place-content-center">
        {/* Destination Map */}
        <div className="max-w-xl w-full mx-auto p-5 md:p-0">
          <DestinationMap destinations={destinations} onMarkerClick={setActiveDestination} />
        </div>

        {/* Destination Card */}
        <DestinationCard destination={activeDestination} />
      </div>
    </section>
  );
}
