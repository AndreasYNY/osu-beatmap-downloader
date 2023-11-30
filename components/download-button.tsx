'use client';
import useDownload from '@/hooks/useDownload';
import React from 'react';

export default function DownloadButton() {
  const download = useDownload();
  const link = download.href?.replace(/ID/g, download.beatmapSetId);
  const handleDownload = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };
  return (
    <button onClick={handleDownload} className='w-full p-3 rounded-lg bg-blue-500 text-white dark:bg-blue-700 mb-4'>
      Download
    </button>
  );
}
