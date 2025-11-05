import { useMusicStore } from "../store/useMusicStore";

const MediaPlayer = () => {
  const currentSong = useMusicStore((state) => state.currentSong);

  return (
    <div className="fixed top-163 left-1/2 lg:left-1/4 -translate-x-1/2 p-3 rounded-md w-[87%] lg:w-[50%] ">
      {currentSong ? (
        <div>
          <img src="" alt="" />
          <div className="flex justify-around items-center ">
            <div className="flex gap-5">
            <img src={currentSong.cover} className="h-8 w-8 rounded-full" alt="" />
            <p>{currentSong.name}</p>
            </div>
            <audio
              controls
              autoPlay
              src={currentSong.audio}
              className="w-[50%]"
            />
          </div>
        </div>
      ) : (
        <p className="text-center">No song playing...</p>
      )}
    </div>
  );
};

export default MediaPlayer;
