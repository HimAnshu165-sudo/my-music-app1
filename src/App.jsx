import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMusicStore } from "./store/useMusicStore";
import Navbaar from "./Components/Navbaar";
import SideBaar from "./Components/SideBaar";
import ArtistsList from "./Components/ArtistList";
import SongsList from "./Components/SongList";
import MediaPlayer from "./Components/MediaPlayer";
import ArtistDetails from "./Components/ArtistDetails"; // ✅ new page

function App() {
  const fetchData = useMusicStore((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="h-screen bg-black text-white flex gap-4  ">
        <SideBaar />

        <div className="flex flex-col h-screen lg:h-full  gap-11 bg-[#1b1a1a] w-full p-5 rounded-lg">
          <Navbaar />

          <Routes>
            
            <Route
              path="/"
              element={
                <>
                  <ArtistsList />
                  <SongsList />
                </>
              }
            />

            
            <Route path="/artist/:id" element={<ArtistDetails />} />
          </Routes>

          <MediaPlayer />
        </div>
      </div>
    </Router>
  );
}

export default App;
