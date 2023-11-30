'use client';
import React from 'react';

import useDownload from '@/hooks/useDownload';

export default function BackgroundImage({ children }: { children: React.ReactNode }) {
  const download = useDownload();
  return (
    <div
      style={{
        backgroundImage: `url(${
          download.beatmapSetId
            ? `https://assets.ppy.sh/beatmaps/${download.beatmapSetId}/covers/cover@2x.jpg`
            : `https://assets.ppy.sh/beatmaps/1321688/covers/cover@2x.jpg`
        })`,
      }}
      className='relative w-full min-h-[100dvh] transition overflow-hidden bg-cover bg-center bg-white dark:bg-slate-950'
    >
      {children}
    </div>
  );
}
