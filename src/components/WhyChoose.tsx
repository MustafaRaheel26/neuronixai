import React from 'react';
import { motion } from 'motion/react';
import { Clock, Layers, Users, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import { WHY_CHOOSE_NEURONIX } from '../data/courseData';

const getWhyIcon = (iconName: string) => {
  switch (iconName) {
    case 'Clock':
      return <Clock className="w-7 h-7 text-cyan-400" />;
    case 'Layers':
      return <Layers className="w-7 h-7 text-purple-400" />;
    case 'Users':
      return <Users className="w-7 h-7 text-indigo-400" />;
    case 'CheckCircle2':
      return <CheckCircle2 className="w-7 h-7 text-emerald-400" />;
    default:
      return <Sparkles className="w-7 h-7 text-purple-400" />;
  }
};

export const WhyChoose: React.FC = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#0A0E1A]">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Neuronix Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Why Choose <span className="gradient-text">Neuronix AI</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Designed from the ground up to deliver actionable, career-focused AI expertise through structured online learning.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_CHOOSE_NEURONIX.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800/80 hover:border-purple-500/40 relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-25 transition-opacity text-purple-400 pointer-events-none">
                <ArrowUpRight className="w-16 h-16" />
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-purple-950/80 border border-purple-500/30 flex items-center justify-center mb-6 shadow-md shadow-purple-950 group-hover:scale-110 transition-transform duration-300">
                  {getWhyIcon(card.iconName)}
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center text-xs font-semibold text-purple-300">
                <span className="w-2 h-2 rounded-full bg-purple-400 mr-2.5 animate-pulse" />
                <span>{card.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
