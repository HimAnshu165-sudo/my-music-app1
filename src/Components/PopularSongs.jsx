import { useMusicStore } from "../store/useMusicStore";

const PopularSongs = () => {
  const songs = useMusicStore((state) => state.songs);
  const playSong = useMusicStore((state) => state.playSong);

  return (
    <div>
      {songs.map((song) => (
        <div key={song.id} onClick={() => playSong(song)}>
          <img src={song.cover} width={100} />
          <p>Song #{song.id}</p>
        </div>
      ))}
    </div>
  );
};

export default PopularSongs;
