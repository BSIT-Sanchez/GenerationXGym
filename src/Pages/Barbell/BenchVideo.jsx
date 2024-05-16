import { useState, useRef } from 'react';

function BenchVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className='flex justify-start items-center bg-bgButton h-screen'>
      <video
        loop
        ref={videoRef}
        src="/videos/beachpress.mp4"
        className='h-[600px] w-[30%] pl-10 rounded-full'
      />
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default BenchVideo;
