import { HiOutlineSearch } from "react-icons/hi";
import { FaSpotify } from "react-icons/fa";
import { useMusicStore } from "../store/useMusicStore";
import {useNavigate } from "react-router-dom";

const Navbaar = () => {
  const searchSongs = useMusicStore((state) => state.searchSongs);
  const navigate = useNavigate();
  return (
    <section className="text-white flex justify-between items-center">
      <div className="flex items-center gap-2 text-4xl font-semibold">
        <FaSpotify className="w-6 h-6 text-green-500 cursor-pointer" onClick={()=>navigate("/")} />
        <span className="text-sm">Spotify</span>
      </div>
      <div className="flex items-center gap-2 font-semibold px-4 rounded-full">
        <input
          type="text"
          className="h-4 w-18 text-white bg-transparent outline-none text-xs"
          placeholder="Search Song"
          onChange={(e) => searchSongs(e.target.value)}
        />
        <HiOutlineSearch className="h-2 w-2" />
      </div>
    </section>
  );
};

export default Navbaar;
