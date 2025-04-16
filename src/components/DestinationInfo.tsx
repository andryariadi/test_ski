"use client";

import { useState } from "react";
import DestinationCard from "./DestinationCard";
import { Destination } from "@/types";
import DestinationMap from "./DestinationMap";

interface DestinationInfoProps {
  destinations: Destination[];
}

export default function DestinationInfo({ destinations }: DestinationInfoProps) {
  const [activeDestination, setActiveDestination] = useState<Destination>(destinations[0]);

  console.log({ destinations, activeDestination }, "<---destinationInfo");

  return (
    <section className="b-rose-600 w-full max-w-5xl mx-auto">
      <div className="b-fuchsia-600 grid grid-cols-1 lg:grid-cols-2 gap-y-7 lg:gap-y-0 place-content-center min-h-[28rem]">
        {/* Destination Map */}
        <div className="b-amber-500 max-w-xl w-full mx-auto p-5 md:p-0">
          <DestinationMap destinations={destinations} onMarkerClick={setActiveDestination} />
        </div>
        {/* Destination Card */}
        <DestinationCard destination={activeDestination} />
      </div>
    </section>
  );
}
