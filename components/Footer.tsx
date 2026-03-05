
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="text-4xl font-black heading-font text-white mb-6 block">
              VO<span className="text-[#D4AF37]">9</span>
            </span>
            <p className="text-white/40 max-w-sm mb-8 font-light text-sm leading-relaxed">
              Victor Osimhen Digital Arena. A tribute to speed, spirit, and sovereignty.
              Built to inspire the next generation of African excellence — from Lagos to the world.
            </p>
            <div className="flex flex-wrap gap-5">
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/victorosimhen9/' },
                { label: 'X (Twitter)', href: 'https://x.com/victorosimhen9' },
                { label: 'TikTok', href: 'https://www.tiktok.com/@victorosimhen9' },
                { label: 'Facebook', href: 'https://www.facebook.com/victorosimhen' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-white/50 hover:text-[#D4AF37] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li><a href="#pitch" className="hover:text-white transition-colors">Career Stats</a></li>
              <li><a href="#achievements" className="hover:text-white transition-colors">Achievements</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">Journey</a></li>
              <li><a href="#mask" className="hover:text-white transition-colors">Personal Story</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#foundation" className="hover:text-white transition-colors">VOF Foundation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li>Media: <a href="mailto:media@victorosimhen.com" className="hover:text-white transition-colors">media@victorosimhen.com</a></li>
              <li>Partnerships: <a href="mailto:commercial@victorosimhen.com" className="hover:text-white transition-colors">commercial@victorosimhen.com</a></li>
              <li>Foundation: <a href="mailto:vof@victorosimhen.com" className="hover:text-white transition-colors">vof@victorosimhen.com</a></li>
            </ul>

            <div className="mt-8 p-4 border border-white/5 rounded-xl text-center">
              <div className="text-[#D4AF37] font-black text-lg heading-font">PSG</div>
              <div className="text-[10px] uppercase tracking-widest text-white/30 mt-1">Current Club · 2025</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20">
          <span>© 2025 Victor Osimhen. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/40 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
