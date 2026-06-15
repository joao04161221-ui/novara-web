import { useState, useRef } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  id: number;
  title: string;
  description: string;
  videoUrl?: string;
  onVideoUpload?: (file: File) => void;
}

export function VideoCard({
  id,
  title,
  description,
  videoUrl,
  onVideoUpload,
}: VideoCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(
    videoUrl || null
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current && localVideoUrl) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current && localVideoUrl) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleTouchStart = () => {
    setIsHovering(true);
    if (videoRef.current && localVideoUrl) {
      videoRef.current.play();
    }
  };

  const handleTouchEnd = () => {
    setIsHovering(false);
    if (videoRef.current && localVideoUrl) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLocalVideoUrl(url);
      onVideoUpload?.(file);
    }
  };

  const handleClick = () => {
    if (!localVideoUrl) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div
      className="relative w-full bg-card/50 border border-border/50 rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
      style={{
        aspectRatio: typeof window !== 'undefined' && window.innerWidth >= 768 ? '16 / 9' : '9 / 16'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {localVideoUrl ? (
        <>
          <video
            ref={videoRef}
            src={localVideoUrl}
            className="w-full h-full object-cover"
            muted
            loop
          />
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              isHovering ? "opacity-100" : "opacity-0"
            } flex items-center justify-center`}
          >
            <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6 text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="font-heading text-lg text-primary mb-2">{title}</p>
            <p className="font-body text-sm text-foreground/60">
              Clique para adicionar vídeo
            </p>
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {localVideoUrl && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-heading text-sm text-primary-foreground">
            {title}
          </p>
          <p className="font-body text-xs text-foreground/70">{description}</p>
        </div>
      )}
    </div>
  );
}
