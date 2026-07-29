import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, FileSpreadsheet, GraduationCap, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, ENROLL_FORM_URL } from '../data/courseData';

const getStepIcon = (iconName: string) => {
  switch (iconName) {
    case 'UserPlus':
      return <UserPlus className="w-6 h-6 text-cyan-400" />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className="w-6 h-6 text-purple-400" />;
    case 'GraduationCap':
      return <GraduationCap className="w-6 h-6 text-emerald-400" />;
    default:
      return <Sparkles className="w-6 h-6 text-purple-400" />;
  }
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#080B14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Simple 3-Step Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            How It <span className="gradient-text">Works</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Get started with Neuronix AI in just three effortless steps and launch your Generative AI learning journey.
          </motion.p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800/80 hover:border-purple-500/40 relative flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="text-3xl font-heading font-extrabold text-slate-600 group-hover:text-purple-400 transition-colors">
                    0{step.stepNumber}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Step {step.stepNumber}: {step.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-xs text-purple-300 font-medium">
                {step.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner inside How it works */}
        <div className="mt-16 text-center">
          <a
            href={ENROLL_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold text-base shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 transition-all duration-300 border border-purple-400/30 group"
          >
            <span>Start Step 1 — Enroll Now</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
