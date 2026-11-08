import Button from '../common/Button.jsx';
import BrandMark from '../common/BrandMark.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionLabel from '../common/SectionLabel.jsx';
import campusCodeVideo from '../../assets/what-is-campuscode.mp4';

export default function BuildTogetherSection() {
  const videoRef = useRef(null);
  const previewRef = useRef(true);
  const [playing, setPlaying] = useState(false);
  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      if (previewRef.current) {
        video.currentTime = 0;
        previewRef.current = false;
      }
      video.play().catch(() => setPlaying(false));
    }
    else video.pause();
  };

  return (
    <section className="section-shell build-section theme-dark" id="build" data-theme="dark">
      <SectionLabel number="02">TOGETHER</SectionLabel>
      <div className="build-section__layout">
        <Reveal className="build-section__copy">
          <p className="eyebrow">Good things are a team sport</p>
          <h2>Build<br /><span className="highlight highlight--lime">Together.</span></h2>
          <p className="section-lede">
            Turn a late-night idea into a real project with a community that builds, competes and ships together.
          </p>
          <Button to="/register" variant="light">Find your team</Button>
          <BrandMark className="build-section__mark" />
        </Reveal>
        <Reveal className={`build-card ${playing ? 'build-card--playing' : ''}`}>
          <video ref={videoRef} className="build-card__video" src={campusCodeVideo} playsInline preload="metadata" aria-label="What is CampusCode?" onLoadedMetadata={(event) => { if (previewRef.current) event.currentTarget.currentTime = Math.min(3, event.currentTarget.duration || 3); }} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
          <button className="build-card__control" type="button" onClick={toggleVideo} aria-label={playing ? 'Pause video' : 'Play video'}>
            {playing ? <Pause size={25} fill="currentColor" aria-hidden="true" /> : <Play size={25} fill="currentColor" aria-hidden="true" />}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
import { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
