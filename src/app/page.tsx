import DestinationInfo from "@/components/DestinationInfo";
import destinations from "@/data/destinations.json";

export default function Home() {
  return (
    <main className="b-amber-500 min-h-screen">
      <div className="b-rose-500 w-full max-w-7xl mx-auto min-h-screen space-y-5 lg:space-y-16 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Explore Bali Destinations</h1>
        <DestinationInfo destinations={destinations} />
      </div>
    </main>
  );
}
