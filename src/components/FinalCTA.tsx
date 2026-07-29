import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ExternalLink, Zap, ShieldCheck } from 'lucide-react';
import { ENROLL_FORM_URL } from '../data/courseData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#080B14]">
      {/* Radiant glow mesh */}
      <div className="absolute inset-0 bg-radial from-purple-900/25 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-10 sm:p-14 border-2 border-purple-500/30 shadow-2xl shadow-purple-950/80 relative overflow-hidden"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Enrollment Open For Next Batch</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Start Learning <br className="hidden sm:inline" />
            <span className="gradient-text">Generative AI?</span>
          </h2>

          {/* Paragraph */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-normal">
            Join learners who are building their future in AI with Neuronix AI. Enroll now and take the first step towards mastering Generative AI.
          </p>

          {/* Prominent Enroll Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ENROLL_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold text-base shadow-2xl shadow-purple-600/40 hover:shadow-purple-500/60 hover:scale-105 active:scale-95 transition-all duration-300 border border-purple-400/40 group"
            >
              <Zap className="w-5 h-5 text-amber-300 fill-amber-300 group-hover:rotate-12 transition-transform" />
              <span>Enroll Now</span>
              <ExternalLink className="w-4 h-4 text-purple-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Trust text */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Instant Access Upon Form Submission • 100% Online Course</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
