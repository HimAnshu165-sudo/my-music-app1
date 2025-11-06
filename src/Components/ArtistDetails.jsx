import { useParams } from "react-router-dom";
import { useMusicStore } from "../store/useMusicStore";
import MediaPlayer from "./MediaPlayer";

const ArtistDetailsPage = () => {
  const { id } = useParams();
  const artists = useMusicStore((state) => state.artists);
  const songs = useMusicStore((state) => state.songs);
  const playSong = useMusicStore((state) => state.playSong);
  const currentSong = useMusicStore((state) => state.currentSong);

  const artist = artists.find((a) => a.id === Number(id));
  const artistSongs = songs.filter((s) => s.artistId === Number(id));

  if (!artist) return <p className="text-white">Artist not found...</p>;

  return (
    <div>
      <div className="flex gap-4 items-center">
        <img
          src={artist.image}
          className="w-40 h-40 rounded-full border-2 border-gray-500"
        />
        <h2 className="text-4xl font-bold">{artist.name}</h2>
      </div>

      <h3 className="mt-13 text-2xl font-semibold">Songs</h3>
      <ul className="mt-8 space-y-2 max-h-64 overflow-y-auto no-scrollbar pr-2">
        {artistSongs.map((song) => (
          <li
            key={song.id}
            onClick={() => playSong(song)}
            className={`flex justify-between items-center rounded cursor-pointer hover:bg-gray-300 ${
              currentSong?.id === song.id ? "bg-green-600" : ""
            }`}
          >
            <span>{song.name}</span>
            <img
              className="h-15 w-15 rounded-full"
              src={song.cover}
              alt={song.cover}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistDetailsPage;
