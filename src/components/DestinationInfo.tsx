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
    <div className="b-fuchsia-600 grid grid-cols-1 lg:grid-cols-2">
      {/* Destination Map */}
      <DestinationMap destinations={destinations} onMarkerClick={setActiveDestination} />

      {/* Destination Card */}
      <DestinationCard destination={activeDestination} />
    </div>
  );
}
