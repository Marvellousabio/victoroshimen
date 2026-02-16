
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
            <p className="text-white/40 max-w-sm mb-8 font-light">
              Victor Osimhen Digital Arena. A tribute to speed, spirit, and sovereignty. Built to inspire the next generation of African excellence.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'X', 'TikTok', 'Facebook'].map(social => (
                <a key={social} href="#" className="text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li><a href="#pitch" className="hover:text-white transition-colors">Career Stats</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">Journey</a></li>
              <li><a href="#mask" className="hover:text-white transition-colors">Personal Story</a></li>
              <li><a href="#foundation" className="hover:text-white transition-colors">Foundation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li>Media: media@victorosimhen.com</li>
              <li>Partnerships: commercial@victorosimhen.com</li>
              <li>Foundation: vof@victorosimhen.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20">
          <span>© 2024 Victor Osimhen. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
