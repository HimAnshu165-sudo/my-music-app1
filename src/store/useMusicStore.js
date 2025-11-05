import { create } from "zustand";

export const useMusicStore = create((set) => ({
  artists: [],
  songs: [],
  filteredSongs: [],
  currentSong: null,
  selectedArtist: null,

  fetchData: async () => {
    const resArtists = await fetch("http://localhost:3000/artists");
    const resSongs = await fetch("http://localhost:3000/songs");
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
