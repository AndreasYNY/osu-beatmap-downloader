'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { AltLink } from '@/libs/alt-link';
import useDownload from '@/hooks/useDownload';
import useDebounce from '@/hooks/useDebounce';

export default function FormInputDownload() {
  const download = useDownload();
  const [value, setValue] = useState<string>('');
  const debounceValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const handleConvertLink = () => {
      let sliceData = null;
      if (debounceValue.length > 8) {
        const pattern = /\/(\d+)/;
        const matches = debounceValue.match(pattern);
        sliceData = matches && matches[1];
      }
      download.setBeatmapSetId(sliceData ?? debounceValue);
    };
    handleConvertLink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);
  return (
    <form className='flex flex-col'>
      <label className='text-lg font-normal mb-2 dark:text-white'>Beatmapset Id or Link</label>
      <input
        type='text'
        className='p-3 rounded-lg mb-2 border-slate-600 border-2 dark:text-white dark:bg-slate-900'
        placeholder='842412'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Link
        href='https://cdn.discordapp.com/attachments/712958280863055903/1107586308165095455/image.png'
        target='_blank'
        className='text-base font-normal mb-3 underline text-end cursor-pointer dark:text-white'
      >
        What&apos;s Beatmap Set Id?
      </Link>
      <select
        className='form-select capitalize w-full p-3 rounded-lg mb-4 border-slate-600 border-2 dark:text-white dark:bg-slate-900'
        onChange={(e) => download.setHref(e.target.value)}
      >
        {AltLink.map((data) => (
          <option key={data.id} value={data.link} className='capitalize'>
            {data.name}
          </option>
        ))}
      </select>
    </form>
  );
}
