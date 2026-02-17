"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "../lib/LanguageContext";
import { tracks } from "../lib/data";
import Image from "next/image";

export default function Music() {
  const { t } = useLanguage();
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const nextTrack = useCallback(() => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  }, []);

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev <= 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTrackClick = (index: number) => {
    if (currentTrack === index && isPlaying) {
      togglePlay();
    } else {
      setCurrentTrack(index);
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) audioRef.current.play();
    }
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", nextTrack);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", nextTrack);
    };
  }, [nextTrack]);

  const track = tracks[currentTrack];
  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="container music-container">
      <h2>{t("music.title")}</h2>
      
      {/* Main Player */}
      <div className="player-main">
        <div className="player-cover">
          <Image 
            src={track.cover} 
            alt={track.title} 
            width={280} 
            height={280}
            priority
          />
        </div>
        
        <div className="player-content">
          <div className="player-track-info">
            <h3>{track.title}</h3>
            <p>{track.artist}</p>
          </div>
          
          <div className="player-progress">
            <div className="progress-times">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="progress-track">
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleProgressChange}
                className="progress-input"
                style={{ "--progress": `${progress}%` } as React.CSSProperties}
              />
            </div>
          </div>
          
          <div className="player-controls">
            <button className="control-btn" onClick={prevTrack}>
              <i className="ri-skip-back-fill"></i>
            </button>
            <button className="control-btn play-main" onClick={togglePlay}>
              <i className={isPlaying ? "ri-pause-fill" : "ri-play-fill"}></i>
            </button>
            <button className="control-btn" onClick={nextTrack}>
              <i className="ri-skip-forward-fill"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Playlist */}
      <div className="playlist">
        <h3 className="playlist-title">{t("music.playlist")}</h3>
        <div className="playlist-tracks">
          {tracks.map((trk, i) => (
            <div
              key={i}
              className={`playlist-item ${currentTrack === i ? "active" : ""}`}
              onClick={() => handleTrackClick(i)}
            >
              <div className="playlist-item-cover">
                <Image src={trk.cover} alt={trk.title} width={48} height={48} />
                {currentTrack === i && isPlaying && (
                  <div className="playing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                )}
              </div>
              <div className="playlist-item-info">
                <span className="playlist-item-title">{trk.title}</span>
                <span className="playlist-item-artist">{trk.artist}</span>
              </div>
              <button 
                className="playlist-item-play"
                onClick={(e) => { e.stopPropagation(); handleTrackClick(i); }}
              >
                <i className={currentTrack === i && isPlaying ? "ri-pause-fill" : "ri-play-fill"}></i>
              </button>
            </div>
          ))}
        </div>
      </div>

      <audio ref={audioRef} preload="metadata">
        <source src={track.audio} type="audio/mpeg" />
      </audio>
    </div>
  );
}
