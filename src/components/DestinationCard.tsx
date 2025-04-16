import { Destination } from "@/types";
import Image from "next/image";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  console.log(destination, "<--- destinationCard");

  return (
    <div className="b-green-600 flex flex-col items-center justify-center">
      <figure className="group hover:bg-gray-900 w-full max-w-sm rounded-lg hover:shadow-md hover:shadow-gray-800/50 transition-all duration-300 overflow-hidden">
        {/* Image Card */}
        <Image src={destination.image} alt={destination.name} width={500} height={500} className="object-cover rounded-lg shadow-md shadow-gray-600/50 group-hover:shadow-none group-hover:rounded-none transition-all duration-300" />

        {/* Caption */}
        <figcaption className="p-4 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{destination.name}</h3>
            <p className="text-gray-500 text-sm">{destination.location}</p>
          </div>
          <p className="text-gray-300 text-shadow-md text-justify">{destination.description}</p>
        </figcaption>
      </figure>
    </div>
  );
}
