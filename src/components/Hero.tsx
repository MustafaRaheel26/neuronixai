import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ExternalLink, ShieldCheck, PlayCircle, Zap, CheckCircle } from 'lucide-react';
import { ENROLL_FORM_URL } from '../data/courseData';
import { ParticleCanvas } from './ParticleCanvas';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-radial from-[#13112A] via-[#080B14] to-[#05070E]">
      {/* Background Interactive Particle Canvas */}
      <ParticleCanvas />

      {/* Radial Gradient Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium backdrop-blur-md mb-8 shadow-inner shadow-purple-500/20"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Online Generative AI Course Enrollment Open</span>
        </motion.div>

        {/* Large Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          <span className="block">Welcome to</span>
          <span className="gradient-text drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
            Neuronix AI
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10"
        >
          Master Generative AI with Our Comprehensive Online Course
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          {/* Prominent Enroll Now Button */}
          <a
            href={ENROLL_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold text-base shadow-xl shadow-purple-600/35 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-purple-400/40 group"
          >
            <Zap className="w-5 h-5 text-amber-300 fill-amber-300 group-hover:rotate-12 transition-transform" />
            <span>Enroll Now</span>
            <ExternalLink className="w-4 h-4 text-purple-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* Secondary Explore Syllabus Button */}
          <a
            href="#course"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800/80 text-slate-200 font-semibold text-base border border-slate-700/80 hover:border-purple-500/40 backdrop-blur-md transition-all duration-200"
          >
            <PlayCircle className="w-5 h-5 text-purple-400" />
            <span>Explore Course Highlights</span>
          </a>
        </motion.div>

        {/* Key Feature Quick Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300 pt-4 border-t border-slate-800/80 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>100% Online & Flexible</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-purple-400" />
            <span>Hands-on AI Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span>Industry Expert Instructors</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Verified Certificate</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
