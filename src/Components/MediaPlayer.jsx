import { useEffect, useRef } from "react";
import { useMusicStore } from "../store/useMusicStore";

const MediaPlayer = () => {
  const currentSong = useMusicStore((state) => state.currentSong);
  const audioRef = useRef(null); // reference to audio element
  const playNextSong = useMusicStore((state) => state.playNextSong);
  // whenever currentSong changes, this effect runs
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();  // stop previous song
      audioRef.current.load();   // load new audio source
      audioRef.current.play();   // auto play new song
    }
  }, [currentSong]);

  if (!currentSong) {
    return (
      <div className="fixed bottom-30 left-1/2 -translate-x-1/2 p-3 text-white">
        No song playing...
      </div>
    );
  }

  return (
    <div className="fixed bottom-30 lg:bottom-3 left-1/2 lg:left-1/3 -translate-x-1/2 p-3 rounded-md w-[87%] lg:w-[50%] text-white">
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-3 items-center">
          <img src={currentSong.cover} className="h-10 w-10 rounded-full" alt="" />
          <p className="font-medium">{currentSong.name}</p>
        </div>

        <audio ref={audioRef} controls autoPlay className="w-[55%]" onEnded={playNextSong} >
          <source src={currentSong.audio} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
};

export default MediaPlayer;
