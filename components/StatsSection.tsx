
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { motion } from 'framer-motion';
import { CAREER_STATS } from '../constants';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const stat = CAREER_STATS.find(s => s.year === label);
    return (
      <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #D4AF3740', borderRadius: '8px', padding: '12px 16px' }}>
        <p style={{ color: '#D4AF37', fontWeight: 700, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
          {stat?.club} — {label}
        </p>
        <p style={{ color: '#fff', fontSize: '20px', fontWeight: 900 }}>{payload[0].value} <span style={{ fontSize: '11px', color: '#ffffff60' }}>goals</span></p>
      </div>
    );
  }
  return null;
};

const StatCard: React.FC<{ label: string; value: string; barWidth: string; delay?: number }> = ({ label, value, barWidth, delay = 0 }) => (
  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 group hover:border-[#D4AF37] transition-all">
    <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2">{label}</div>
    <div className="text-4xl heading-font">{value}</div>
    <div className="h-1 w-full bg-white/10 mt-4 overflow-hidden rounded-full">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: barWidth }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-[#D4AF37] to-[#f0d060] rounded-full"
      />
    </div>
  </div>
);

const StatsSection: React.FC = () => {
  return (
    <section id="pitch" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="stadium-glow absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold heading-font mb-4">On The Pitch</h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mb-6" />
          <p className="text-white/50 max-w-xl">
            A statistical breakdown of one of the world's most clinical strikers — from Charleroi to PSG, every number tells a story of relentless pursuit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-xl heading-font mb-2 text-[#D4AF37]">Goals Per Season</h3>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-8">Club career 2017–2025</p>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CAREER_STATS} barCategoryGap="30%">
                  <XAxis
                    dataKey="year"
                    stroke="#ffffff40"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#ffffff40"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    width={30}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(212,175,55,0.05)' }} />
                  <Bar dataKey="goals" radius={[6, 6, 0, 0]}>
                    {CAREER_STATS.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.goals >= 30 ? '#D4AF37' : entry.goals >= 15 ? '#ffffff60' : '#ffffff25'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="flex gap-6 mt-4 text-[10px] uppercase tracking-widest text-white/40">
              <span className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-sm bg-[#D4AF37]" /> 30+ goals</span>
              <span className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-sm bg-white/60" /> 15–29 goals</span>
              <span className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-sm bg-white/25" /> Under 15</span>
            </div>
          </motion.div>

          {/* Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <StatCard label="Total Appearances" value="255+" barWidth="85%" delay={0.1} />
            <StatCard label="Shooting Accuracy" value="68.4%" barWidth="68.4%" delay={0.2} />
            <StatCard label="Top Speed" value="34.3 KM/H" barWidth="92%" delay={0.3} />
            <StatCard label="International Goals" value="40+" barWidth="75%" delay={0.4} />
            <StatCard label="Goals-per-Game" value="0.64" barWidth="64%" delay={0.5} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
