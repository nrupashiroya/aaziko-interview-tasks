import React, { useEffect, useRef, useState } from 'react';
import DetailsSlider from './DetailsSlider';

// https://prod4-sprcdn-assets.sprinklr.com/200052/a86611e2-200f-47f7-bfeb-02228d23d86a-1429888533.mov

const Task2 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateMatrix = () => {
    const scaleX = Math.max(0.86, 1 - (scrollPosition / window.innerHeight) * 0.2);
    return `matrix(${scaleX}, 0, 0, ${scaleX}, 0, 0)`;
  };

  const calculateClipPath = () => {
    const radius = Math.min(50, (scrollPosition / window.innerHeight) * 50);
    return `inset(0px round ${radius}px)`;
  };

  return (
    <>
      <div className='boatTitleDiv d-flex align-items-center justify-content-between'>
        <h1>Boat 1200</h1>
        <p className='mb-0'>Designed to be loved.</p>
      </div>
      <div className="parallax-container">
        <div className="parallax-box" style={{ transform: calculateMatrix(), clipPath: calculateClipPath() }}>
          <video
            // className="parallax-video"
            ref={videoRef}
            src="https://prod4-sprcdn-assets.sprinklr.com/200052/a86611e2-200f-47f7-bfeb-02228d23d86a-1429888533.mov"
            // src="https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge.mp4"
            autoPlay
            muted
            loop
          ></video>
          <button className='videoBtn' onClick={handlePlayPause}>
            {isPlaying ? <i className="fa-solid fa-pause" /> : <i className="fa-solid fa-play" />}
          </button>
        </div>
      </div>

      <DetailsSlider />
    </>
  );
}

export default Task2