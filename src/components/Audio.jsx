import { useRef, useState } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";

const Audio = ({ beatmapSetId }) => {
  const audioRef = useRef(null);

  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioPlay, setAudioPlay] = useState(false);
  const [volume, setVolume] = useState(1);

  const handleAudioPlaying = (event) => {
    const currentTime = event.target.currentTime;
    setAudioCurrentTime(currentTime);
  };

  const handlePlay = () => {
    if (audioPlay === true) {
      audioRef.current.pause();
      setAudioPlay(false);
    } else if (audioPlay === false) {
      audioRef.current.play();
      setAudioPlay(true);
    }
  };

  const handleVolume = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const audioCurrent = Math.trunc(audioCurrentTime);

  return (
    <div className="w-full h-16 flex mb-3">
      <audio
        ref={audioRef}
        onTimeUpdate={handleAudioPlaying}
        onEnded={handlePlay}
        className="w-full mb-6 hidden"
        controls
        src={`${
          beatmapSetId !== "" ? `https://b.ppy.sh/preview/${beatmapSetId}.mp3` : `https://b.ppy.sh/preview/1321688.mp3`
        }`}
        type="audio/mpeg"
      ></audio>
      <div className="w-1/5 flex justify-center items-center">
        <button className="w-full h-full rounded-lg flex justify-center items-center" onClick={() => handlePlay()}>
          {audioPlay === true ? (
            <AiFillPauseCircle className="text-white text-4xl" />
          ) : (
            <AiFillPlayCircle className="text-white text-4xl" />
          )}
        </button>
      </div>
      <div className="w-4/5 flex flex-col">
        <input className="mt-2 mb-1" type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolume} />
        <div className="flex justify-end">
          <span className="text-sm font-medium text-blue-700 dark:text-white">{`${audioCurrent}s`}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-6">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${audioCurrentTime * 10}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Audio;
