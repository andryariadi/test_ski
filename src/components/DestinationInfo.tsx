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

  return (
    <div className="b-fuchsia-600 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Destination Map */}
      <div>
        <DestinationMap />
        {/* <DestinationMap destinations={destinations} onMarkerClick={setActiveDestination} /> */}
      </div>

      {/* Destination Card */}
      <div>
        <DestinationCard destination={activeDestination} />
      </div>
    </div>
  );
}
