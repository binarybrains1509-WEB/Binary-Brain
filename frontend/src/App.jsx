import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStrip from './components/TechStrip';
import AudienceCards from './components/AudienceCards';
import StudentServices from './components/StudentServices';
import BusinessServices from './components/BusinessServices';
import WhyBinaryBrains from './components/WhyBinaryBrains';
import StatsBar from './components/StatsBar';
import RecentProjects from './components/RecentProjects';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import VideoModal from './components/VideoModal';

const matrixWords = [
  ['01', '8%', '-2s', '13s'], ['const', '16%', '-7s', '18s'], ['<>/', '25%', '-11s', '16s'],
  ['git', '34%', '-4s', '20s'], ['101', '43%', '-14s', '15s'], ['npm', '53%', '-8s', '19s'],
  ['{}', '63%', '-1s', '17s'], ['API', '73%', '-10s', '21s'], ['0101', '84%', '-5s', '14s'],
  ['/>', '94%', '-13s', '18s'], ['function', '12%', '-16s', '22s'], ['{ code }', '22%', '-3s', '17s'],
  ['deploy', '31%', '-19s', '24s'], ['React', '40%', '-9s', '16s'], ['Spring', '49%', '-21s', '20s'],
  ['{ }', '58%', '-6s', '15s'], ['cloud', '68%', '-17s', '23s'], ['build', '77%', '-12s', '18s'],
  ['010', '88%', '-23s', '21s'], ['<main>', '97%', '-18s', '16s'], ['sudo', '5%', '-25s', '19s'],
  ['ssh', '19%', '-27s', '22s'], ['localhost', '29%', '-31s', '26s'], ['auth', '37%', '-29s', '18s'],
  ['<div>', '46%', '-34s', '24s'], ['server', '55%', '-28s', '20s'], ['push', '65%', '-36s', '27s'],
  ['commit', '74%', '-32s', '23s'], ['$ npm run', '82%', '-38s', '25s'], ['010101', '91%', '-30s', '19s'],
];

export default function App() {
  const [isQuoteOpen, setQuoteOpen] = useState(false);
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [quoteAudience, setQuoteAudience] = useState('GENERAL');
  const [quoteService, setQuoteService] = useState('');

  const openQuote = (audience = 'GENERAL', service = '') => {
    setQuoteAudience(audience);
    setQuoteService(service);
    setQuoteOpen(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050b17] text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
        {matrixWords.map(([word, left, delay, duration]) => (
          <span key={`${word}-${left}`} className="matrix-word" style={{ left, animationDelay: delay, animationDuration: duration }}>
            {word}
          </span>
        ))}
      </div>

      <div className="relative z-10">
        <Navbar onOpenQuote={(audience = 'GENERAL', service = '') => openQuote(audience, service)} />

      <Hero
        onOpenQuote={() => openQuote()}
        onOpenVideo={() => setVideoOpen(true)}
      />

      <div className="bg-[#050b17]">
        <TechStrip />
        <AudienceCards />
        <StudentServices onSelectService={(service, audience) => openQuote(audience, service)} />
        <BusinessServices onSelectService={(service, audience) => openQuote(audience, service)} />
        <WhyBinaryBrains />
        <StatsBar />
        <RecentProjects />
        <CtaBanner onOpenQuote={() => openQuote()} />
      </div>
        <Footer />
      </div>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setQuoteOpen(false)}
        initialAudience={quoteAudience}
        initialService={quoteService}
      />
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      />
    </div>
  );
}