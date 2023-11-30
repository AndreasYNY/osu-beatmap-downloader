'use client';
import React, { useEffect, useRef, useState } from 'react';
import { IconType } from 'react-icons';
import { FaVolumeDown, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';
import useDownload from '@/hooks/useDownload';

export default function PreviewPlayer() {
  const download = useDownload();
  const isNan = !Boolean(Number(download.beatmapSetId));
  const beatmapSetId = isNan ? '' : download.beatmapSetId;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioCurrentTime, setAudioCurrentTime] = useState<number>(0);
  const [audioPlay, setAudioPlay] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);

  const handleAudioPlaying = (event: React.SyntheticEvent<HTMLAudioElement>) => {
    const currentTime = (event.target as HTMLAudioElement).currentTime;
    setAudioCurrentTime(currentTime);
  };

  const handlePlay = () => {
    if (audioPlay === true) {
      audioRef.current?.pause();
      setAudioPlay(false);
    } else if (audioPlay === false) {
      audioRef.current?.play();
      setAudioPlay(true);
    }
  };

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
    console.log(newVolume);
    audioRef.current!.volume = newVolume;
  };
  const getVolumeIcon = (volume: number) => {
    if (volume >= 0.5) {
      return FaVolumeUp;
    } else if (volume < 0.5 && volume > 0) {
      return FaVolumeDown;
    } else if (volume === 0) {
      return FaVolumeMute;
    }
    return FaVolumeUp;
  };

  let Icon: IconType = getVolumeIcon(volume);

  const audioCurrent = Math.trunc(audioCurrentTime);
  return (
    <div
      className={twMerge(
        'absolute -bottom-12 left-[50%] translate-x-[-50%] w-[40%] h-12 rounded-t-md flex bg-white dark:bg-slate-950/90 backdrop-blur-md border-slate-600 dark:bg-slate-900 border-t-2 border-x-2 p-4 transition',
        beatmapSetId && 'bottom-0'
      )}
    >
      <audio
        ref={audioRef}
        onTimeUpdate={handleAudioPlaying}
        onEnded={handlePlay}
        className='w-full mb-6 hidden'
        controls
        src={`${
          beatmapSetId ? `https://b.ppy.sh/preview/${beatmapSetId}.mp3` : `https://b.ppy.sh/preview/1321688.mp3`
        }`}
      ></audio>
      <div className='flex justify-center items-center mr-4'>
        <button className='w-full h-full rounded-lg flex justify-center items-center' onClick={() => handlePlay()}>
          {audioPlay === true ? (
            <AiFillPauseCircle size={28} className='text-black dark:text-white' />
          ) : (
            <AiFillPlayCircle size={28} className='text-black dark:text-white' />
          )}
        </button>
      </div>
      <div className='w-[90%] flex items-center gap-x-4'>
        <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
          <div className='bg-blue-600 h-2.5 rounded-full' style={{ width: `${audioCurrentTime * 10}%` }}></div>
        </div>
        <span className='text-sm font-medium text-blue-700 dark:text-white'>{`${audioCurrent}s`}</span>
        <div className='flex gap-x-4 items-center'>
          <Icon className='relative z-0' />
          <input className='w-14' type='range' min='0' max='1' step='0.1' value={volume} onChange={handleVolume} />
        </div>
      </div>
    </div>
  );
}
