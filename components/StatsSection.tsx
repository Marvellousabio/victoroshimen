
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell 
} from 'recharts';
import { motion } from 'framer-motion';
import { CAREER_STATS } from '../constants';

const StatsSection: React.FC = () => {
  return (
    <section id="pitch" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="stadium-glow absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl font-bold heading-font mb-4">On The Pitch</h2>
          <p className="text-white/50 max-w-xl">
            A statistical breakdown of a clinical striker. Each number represents a moment of explosive power and precise movement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl heading-font mb-8 text-[#D4AF37]">Goals Per Season</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CAREER_STATS}>
                  <XAxis 
                    dataKey="year" 
                    stroke="#ffffff40" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#ffffff40" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #ffffff20', borderRadius: '8px' }}
                  />
                  <Bar dataKey="goals" radius={[4, 4, 0, 0]}>
                    {CAREER_STATS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.goals > 20 ? '#D4AF37' : '#ffffff40'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 group hover:border-[#D4AF37] transition-all">
              <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2">Total Appearance</div>
              <div className="text-4xl heading-font">200+</div>
              <div className="h-1 w-full bg-white/10 mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  className="h-full bg-[#D4AF37]"
                />
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 group hover:border-[#D4AF37] transition-all">
              <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2">Shooting Accuracy</div>
              <div className="text-4xl heading-font">68.4%</div>
              <div className="h-1 w-full bg-white/10 mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '68.4%' }}
                  className="h-full bg-[#D4AF37]"
                />
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 group hover:border-[#D4AF37] transition-all">
              <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2">Top Speed</div>
              <div className="text-4xl heading-font">34.3 KM/H</div>
              <div className="h-1 w-full bg-white/10 mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  className="h-full bg-[#D4AF37]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
