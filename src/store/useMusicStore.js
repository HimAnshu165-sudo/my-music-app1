import { create } from "zustand";

const API_URL = "https://my-json-api-mdkx.onrender.com";
export const useMusicStore = create((set) => ({
  artists: [],
  songs: [],
  filteredSongs: [],
  currentSong: null,
  selectedArtist: null,
  
  fetchData: async () => {
  const resArtists = await fetch(`${API_URL}/artists`);
  const resSongs = await fetch(`${API_URL}/songs`);
  const artists = await resArtists.json();
  const songs = await resSongs.json();
  set({ artists, songs, filteredSongs: songs });
},


  playSong: (song) => set({ currentSong: song }),

  filterByArtist: (artistId) =>
    set((state) => ({
      selectedArtist: artistId,
      filteredSongs: state.songs.filter((s) => s.artistId === artistId),
    })),

  searchSongs: (query) =>
    set((state) => ({
      filteredSongs: state.songs.filter((s) =>
        s.audio.toLowerCase().includes(query.toLowerCase())
      ),
    })),
}));
