import React from 'react';

import FormInputDownload from './form-input-download';
import Link from 'next/link';
import DownloadButton from './download-button';

export default function DownloadCard() {
  return (
    <div className='h-auto w-full bg-slate-50 border-slate-600 dark:bg-slate-900 border-2 p-6 flex flex-col rounded-xl'>
      <h1 className='text-2xl font-semibold text-center mb-2 dark:text-white'>Alt Beatmap Downloader</h1>
      <FormInputDownload />
      <DownloadButton />
      <p className='text-black dark:text-white text-center'>
        <Link href='https://osu.ppy.sh/users/16983379' target='_blank'>
          CookyNdi
        </Link>{' '}
        | Powered by{' '}
        <Link href='https://vercel.com' target='_blank'>
          Vercel
        </Link>
      </p>
    </div>
  );
}
