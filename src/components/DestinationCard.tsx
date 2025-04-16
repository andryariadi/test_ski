import { Destination } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  console.log(destination, "<--- destinationCard");

  return (
    <div className="b-green-600 flex flex-col items-center justify-center w-full max-w-sm md:max-w-xl mx-auto">
      <figure className="group hover:bg-gray-900 lg:w-full lg:max-w-sm h-full max-h-screen rounded-lg hover:shadow-md hover:shadow-gray-800/50 transition-all duration-300 overflow-hidden">
        {/* Image Card */}
        <Image
          src={destination.image}
          alt={destination.name}
          width={500}
          height={500}
          className="min-w-full object-cover rounded-lg shadow-md shadow-gray-600/50 group-hover:shadow-none group-hover:rounded-none transition-all duration-300"
        />

        {/* Caption */}
        <figcaption className="p-4 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{destination.name}</h3>
            <p className="text-gray-500 text-sm">{destination.location}</p>
          </div>
          <p className="text-gray-300 text-shadow-md text-justify">{destination.description}</p>

          <Link href={`/destination/${destination.id}`} className="b-amber-500 group flex items-center gap-2">
            <span className="text-gray-500 text-xs group-hover:text-gray-300 transition-all duration-300">See more</span>
            <IoIosArrowRoundForward size={24} className="group-hover:translate-x-1 text-gray-600 group-hover:text-gray-300  transition-all duration-300" />
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}
