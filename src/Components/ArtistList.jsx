import { useMusicStore } from "../store/useMusicStore";
import { useNavigate } from "react-router-dom";
const ArtistsList = () => {
  const artists = useMusicStore((state) => state.artists);
  const filterByArtist = useMusicStore((state) => state.filterByArtist);
  const navigate = useNavigate();
  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold mb-5">Popular Artists</h1>
      </div>
      <div className="w-full overflow-x-auto flex flex-nowrap gap-4 py-2 px-2 no-scrollbar">
        {artists.map((artist) => (
          <div
            key={artist.id}
            onClick={() => navigate(`/artist/${artist.id}`)}
            className="cursor-pointer text-center shrink-0"
          >
            <img
              src={artist.image}
              className="w-40 h-40 rounded-full object-cover border-2 border-gray-500 hover:scale-110 duration-200"
            />
            <p className="mt-2 text-lg text-white">{artist.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistsList;
