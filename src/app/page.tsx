import DestinationInfo from "@/components/DestinationInfo";
import destinations from "@/data/destinations.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="min-h-screen w-full max-w-7xl mx-auto space-y-5 lg:space-y-16 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Explore Bali Destinations</h1>
        <DestinationInfo destinations={destinations} />
      </div>
    </main>
  );
}
