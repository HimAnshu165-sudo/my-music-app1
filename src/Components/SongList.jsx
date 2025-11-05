import { useMusicStore } from "../store/useMusicStore";

const SongsList = () => {
  const songs = useMusicStore((state) => state.filteredSongs);
  const playSong = useMusicStore((state) => state.playSong);

  return (
    <section>
    <div>
        <h1 className="text-2xl font-bold mb-5">Popular Songs</h1>
    </div>
    <div className="w-full overflow-x-auto flex flex-nowrap gap-4 py-2 px-2 no-scrollbar">
      {songs.map((song) => (
        <div
          key={song.id}
          onClick={() => playSong(song)}
          className="cursor-pointer p-3 rounded-lg shrink-0 w-[40%] lg:w-[14%]"
        >
          <img src={song.cover} className="rounded-full object-cover border-2 border-gray-500 hover:scale-110 duration-200 w-20 h-20 lg:h-35 lg:w-35 mb-2" />
          <p className="text-center text-lg">{song.name}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default SongsList;
