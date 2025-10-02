import { useNavigate, useParams } from "react-router-dom";
import {
  CheckCircle,
  Camera,
  Info,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ActivityIcon,
  Music,
} from "lucide-react";
import { mockDestinations } from "../data/mockData";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";

const OverviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = mockDestinations.find((d) => d.id === Number(id));

  const mapPosition = destination?.coordinates
    ? destination.coordinates
    : [43.8193, 19.2706];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-blue-600",
      url: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      url: "https://instagram.com",
    },
    {
      name: "TikTok",
      icon: Music,
      color: "bg-black",
      url: "https://tiktok.com",
    },
    {
      name: "X",
      icon: Twitter,
      color: "bg-black",
      url: "https://x.com",
    },
    {
      name: "Reddit",
      icon: ActivityIcon,
      color: "bg-orange-500",
      url: "https://reddit.com",
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "bg-red-600",
      url: "https://youtube.com",
    },
  ];

  if (!destination) {
    return <div className="p-8">Destination not found</div>;
  }

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-primary-900 text-5xl font-bold">
          {destination.name}
        </h1>
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
            className="bg-primary-900 flex items-center gap-2 rounded-lg px-6 py-3 transition-colors hover:bg-black"
          >
            <span className="font-semibold text-white">Augmented Reality</span>
            <Camera className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      <div className="mb-6 h-64 overflow-hidden rounded-lg bg-gray-300">
        <img
          src={`/images/overview/${destination.name.toLowerCase()}.webp`}
          alt=""
          className="h-full w-full transform object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="mb-8">
        <p className="mb-4 leading-relaxed text-gray-800">
          {destination.description}
        </p>
        {/* <p className="leading-relaxed text-gray-800">
          The word Baščaršija derives from the Turkish language. The word "baš"
          which is "baş" in Turkish literally means "head", but in some contexts
          also means "primary", "main", "capital". "Čaršija" which is "çarşı" in
          Turkish means "bazaar" or "market".
        </p> */}
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Photos / Videos from Social Media:
        </h2>
        <a href="https://tiktok.com/" target="_blank">
          View more
        </a>
      </div>
      <div className="mb-8 grid grid-cols-6 gap-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className="aspect-[9/16] overflow-hidden rounded-lg bg-gray-400"
          >
            <video
              className="h-full w-full object-cover"
              controls
              muted
              playsInline
            >
              <source
                src={`/videos/overview/social-media-overview-${n}.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold">Location</h2>
      <div className="mb-8 h-48 overflow-hidden rounded-lg bg-gray-100">
        <div className="h-full w-full">
          <MapContainer
            center={mapPosition}
            zoom={14}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
            className="z-0"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={mapPosition}></Marker>
            <MapController center={mapPosition} />
          </MapContainer>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold">Discover More</h2>
      <div className="mb-8 grid grid-cols-6 gap-3">
        {socialLinks.map(({ name, icon: Icon, color, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex aspect-square items-center justify-center rounded-lg text-white transition-transform duration-200 hover:scale-105 ${color}`}
          >
            <Icon className="h-10 w-10" />
          </a>
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

function MapController({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center && center.length === 2) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);

  return null;
}

export default OverviewPage;
