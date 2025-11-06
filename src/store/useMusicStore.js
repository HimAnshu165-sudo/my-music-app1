import { create } from "zustand";

const API_URL = "https://my-json-api-mdkx.onrender.com";
export const useMusicStore = create((set, get) => ({
  artists: [],
  songs: [],
  filteredSongs: [],
  currentSong: null,
  selectedArtist: null,
  audioRef: null,

  fetchData: async () => {
    const resArtists = await fetch(`${API_URL}/artists`);
    const resSongs = await fetch(`${API_URL}/songs`);
    const artists = await resArtists.json();
    const songs = await resSongs.json();
    set({ artists, songs, filteredSongs: songs });
  },

  playSong: (song) => {
    const { audioRef } = get();
    if (audioRef) {
      audioRef.pause();
      audioRef.currentTime = 0;
    }
    set({ currentSong: song });
  },
  setAudioRef: (audio) => set({ audioRef: audio }),
  playNextSong: () =>
    set((state) => {
      const currentIndex = state.filteredSongs.findIndex(
        (s) => s.id === state.currentSong?.id
      );
      const nextSong =
        state.filteredSongs[currentIndex + 1] || state.filteredSongs[0];

      return nextSong ? { currentSong: nextSong } : state;
    }),

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
