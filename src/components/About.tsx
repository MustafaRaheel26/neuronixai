import React from 'react';
import { motion } from 'motion/react';
import { Globe, Code2, UserCheck, Award, Sparkles, Check } from 'lucide-react';
import { ABOUT_FEATURES } from '../data/courseData';

const getFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'Globe':
      return <Globe className="w-6 h-6 text-cyan-400" />;
    case 'Code2':
      return <Code2 className="w-6 h-6 text-purple-400" />;
    case 'UserCheck':
      return <UserCheck className="w-6 h-6 text-indigo-400" />;
    case 'Award':
      return <Award className="w-6 h-6 text-amber-400" />;
    default:
      return <Sparkles className="w-6 h-6 text-purple-400" />;
  }
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0E1A]">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Pioneering Ed-Tech Platform</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            About <span className="gradient-text">Neuronix AI</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Neuronix AI is a pioneering ed-tech platform dedicated to teaching practical, in-demand AI skills. Our Generative AI course is designed to take learners from fundamentals to real-world application, taught by industry professionals, fully online and accessible from anywhere in the world.
          </motion.p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-purple-500/40 flex flex-col justify-between group"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-purple-950">
                  {getFeatureIcon(feature.iconName)}
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                <Check className="w-4 h-4 mr-1.5 text-emerald-400" />
                <span>Verified Course Feature</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
