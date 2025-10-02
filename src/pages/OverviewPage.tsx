import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle, Camera, Info } from "lucide-react";
import { mockDestinations } from "../data/mockData";

const OverviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = mockDestinations.find((d) => d.id === Number(id));

  if (!destination) {
    return <div className="p-8">Destination not found</div>;
  }

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-5xl font-bold">{destination.name}</h1>
        <div className="flex items-center gap-2">
          <a
            href="https://discoverbih.com/destinations/sarajevo-surroundings/"
            target="_blank"
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 transition-colors hover:border-gray-400"
          >
            <span className="font-semibold">Learn More</span>
            <Info className="h-5 w-5" />
          </a>
          <button
            onClick={() => navigate(`/destination/${id}/ar`)}
            className="flex items-center gap-2 rounded-lg bg-gray-300 px-6 py-3 transition-colors hover:bg-gray-400"
          >
            <span className="font-semibold">Augmented Reality</span>
            <Camera className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mb-6 h-48 rounded-lg bg-gray-300"></div>

      <div className="mb-8">
        <p className="mb-4 leading-relaxed text-gray-800">
          Baščaršija is located on the north bank of the river Miljacka, in the
          municipality of Stari Grad. On Baščaršija there are several important
          historic buildings, such as the Gazi Husrev-beg Mosque and sahat-kula.
          Today Baščaršija is the major tourist attraction of Sarajevo.
        </p>
        <p className="leading-relaxed text-gray-800">
          The word Baščaršija derives from the Turkish language. The word "baš"
          which is "baş" in Turkish literally means "head", but in some contexts
          also means "primary", "main", "capital". "Čaršija" which is "çarşı" in
          Turkish means "bazaar" or "market".
        </p>
      </div>

      <h2 className="mb-4 text-2xl font-bold">
        Photos / Videos from Social Media:
      </h2>
      <div className="mb-8 grid grid-cols-6 gap-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square rounded-lg bg-gray-400"></div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold">Discover on Social Media</h2>
      <div className="mb-8 grid grid-cols-6 gap-3">
        <div className="flex aspect-square items-center justify-center rounded-lg bg-gray-400">
          <svg className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </div>
        <div className="flex aspect-square items-center justify-center rounded-lg bg-gray-400">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border-4 border-black">
            <div className="h-6 w-6 rounded-full border-4 border-black"></div>
          </div>
        </div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="aspect-square rounded-lg bg-gray-400"></div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-6 w-6" />
          <span>
            Verified by <strong>Emir Prašović, Alen Bejtić</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
