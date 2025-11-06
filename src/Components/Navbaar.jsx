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
        <FaSpotify className="w-6 h-6 lg:h-10 lg:w-full text-green-500 cursor-pointer" onClick={()=>navigate("/")} />
        <span className="text-sm lg:text-2xl">Spotify</span>
      </div>
      <div className="flex items-center gap-2 font-semibold px-4 rounded-full">
        <input
          type="text"
          className="h-4 w-18 lg:h-10 lg:w-full text-white bg-transparent outline-none text-xs lg:text-lg"
          placeholder="Search Song"
          onChange={(e) => searchSongs(e.target.value)}
        />
        {/* <HiOutlineSearch className="h-2 w-2 lg:h-10 lg:w-10" /> */}
      </div>
    </section>
  );
};

export default Navbaar;
