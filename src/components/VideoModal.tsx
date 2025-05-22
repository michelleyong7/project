import React, { useRef, useEffect } from 'react';

interface VideoModalProps {
  videoSrc: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoSrc, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Optional: Pause video when component unmounts or modal closes
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from closing modal if video area is clicked
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4"
      onClick={onClose} // Close modal if backdrop is clicked
    >
      <div 
        className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-hidden relative"
        onClick={handleModalContentClick}
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-dark-900 p-2 rounded-full transition-colors z-10"
          aria-label="Close video player"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="aspect-video">
          <video 
            ref={videoRef}
            src={videoSrc} 
            controls 
            autoPlay
            className="w-full h-full rounded-xl"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal; 