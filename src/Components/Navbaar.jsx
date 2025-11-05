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
        <FaSpotify className="w-10 h-10 text-green-500 cursor-pointer" onClick={()=>navigate("/")} />
        <span>Spotify</span>
      </div>
      <div className="flex items-center gap-2 font-semibold px-4 rounded-full">
        <input
          type="text"
          className="h-10 text-white bg-transparent outline-none"
          placeholder="Search Song"
          onChange={(e) => searchSongs(e.target.value)}
        />
        <HiOutlineSearch className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Navbaar;
