import React, { useEffect, useRef, useState } from 'react';
import avatar from '../assets/avatar-eke.png';
import Play from '../icons/Play';
import ScrollIndicator from '../icons/ScrollIndicator';
import useIntersectionObserver from '../utils/useIntersectionObserver';

export default function VideoStory(props: { url: string; goToNextVideo?(): void }) {
  const parentContainerRef = useRef<HTMLElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const { isIntersecting } = useIntersectionObserver(videoElementRef, 0.5);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (videoElementRef.current) {
      if (isIntersecting) {
        videoElementRef.current?.play();
        setIsPlaying(true);
      } else {
        videoElementRef.current?.pause();
        setIsPlaying(false);
      }
    }
  }, [isIntersecting]);

  useEffect(() => {
    function updateProgress() {
      if (isPlaying) {
        const duration = videoElementRef.current?.duration;
        const currentTime = videoElementRef.current?.currentTime;

        if (duration !== undefined && currentTime !== undefined) {
          setProgress((currentTime / duration) * 100);
          requestAnimationFrame(updateProgress);
        }
      }
    }

    if (isPlaying) updateProgress();
  }, [isPlaying]);

  const togglePlayback = () => {
    if (videoElementRef.current?.paused) {
      videoElementRef.current.play();
      setIsPlaying(true);
    } else {
      videoElementRef.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={parentContainerRef}
      className="h-screen px-5 py-6 snap relative"
      role="button"
      tabIndex={0}
      onClick={togglePlayback}
      onKeyDown={(e) => {
        if (e.code === '32') togglePlayback();
      }}>
      <video
        className="absolute inset-0 min-h-full min-w-full object-cover z-[-1]"
        controls={false}
        ref={videoElementRef}
        onEnded={props.goToNextVideo}>
        <source src={props.url} type="video/mp4" />
      </video>
      <div className="bg-white/20 h-[0.125rem] relative">
        <div
          className="absolute left-0 h-[0.125rem] bg-white"
          style={{ width: `${progress}%` }}></div>
      </div>
      <div className="flex items-center mt-6 space-x-[.625rem]">
        <img
          src={avatar}
          alt="Eke's avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="flex items-center space-x-[0.3125rem]">
            <span>ekeurum</span>
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0.5L8.49882 2.3955L10.7845 1.61123L11.0206 4.01614L13.3674 4.59209L12.2659 6.74289L13.9288 8.4962L11.8392 9.71001L12.2902 12.084L9.87621 11.9755L8.97213 14.2165L7 12.82L5.02787 14.2165L4.12379 11.9755L1.70975 12.084L2.16076 9.71001L0.07125 8.4962L1.73415 6.74289L0.632576 4.59209L2.97941 4.01614L3.21551 1.61123L5.50118 2.3955L7 0.5Z"
                fill="white"
              />
            </svg>
          </p>
          <p className="text-sm">is +1 today • 2nd October</p>
        </div>
      </div>

      <div
        className={`flex items-center justify-center h-20 w-20 bg-[#111418] bg-opacity-20 ${
          isPlaying ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        } rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out`}>
        <Play className="text-lg" />
      </div>

      <ScrollIndicator className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10" />
    </section>
  );
}
