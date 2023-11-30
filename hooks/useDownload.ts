import { create } from 'zustand';

interface DownloadStore {
  beatmapSetId: string;
  href?: string;
  setBeatmapSetId: (beatmapSetId: string) => void;
  setHref: (href: string) => void;
}

const useDownload = create<DownloadStore>((set) => ({
  beatmapSetId: '',
  href: '',
  setBeatmapSetId: (beatmapSetId: string) => set({ beatmapSetId: beatmapSetId }),
  setHref: (href: string) => set({ href: href }),
}));

export default useDownload;
