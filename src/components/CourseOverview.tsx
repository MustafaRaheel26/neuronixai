import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Network, 
  Brain, 
  Terminal, 
  Cpu, 
  Palette, 
  Wrench, 
  FolderKanban, 
  Rocket, 
  ChevronRight, 
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Clock,
  Layers,
  Award
} from 'lucide-react';
import { COURSE_MODULES, ENROLL_FORM_URL } from '../data/courseData';

const getModuleIcon = (iconName: string) => {
  switch (iconName) {
    case 'Sparkles':
      return <Sparkles className="w-5 h-5 text-cyan-400" />;
    case 'Network':
      return <Network className="w-5 h-5 text-purple-400" />;
    case 'Brain':
      return <Brain className="w-5 h-5 text-pink-400" />;
    case 'Terminal':
      return <Terminal className="w-5 h-5 text-amber-400" />;
    case 'Cpu':
      return <Cpu className="w-5 h-5 text-indigo-400" />;
    case 'Palette':
      return <Palette className="w-5 h-5 text-emerald-400" />;
    case 'Wrench':
      return <Wrench className="w-5 h-5 text-blue-400" />;
    case 'FolderKanban':
      return <FolderKanban className="w-5 h-5 text-violet-400" />;
    case 'Rocket':
      return <Rocket className="w-5 h-5 text-orange-400" />;
    default:
      return <Sparkles className="w-5 h-5 text-purple-400" />;
  }
};

export const CourseOverview: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  const selectedModule = COURSE_MODULES.find((m) => m.id === selectedModuleId);

  return (
    <section id="course" className="py-24 relative overflow-hidden bg-[#080B14]">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with "NEW" Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/60 to-indigo-900/60 border border-purple-500/40 text-purple-200 text-xs font-bold uppercase tracking-widest mb-4 shadow-lg shadow-purple-950/50"
          >
            <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[10px] font-extrabold uppercase animate-pulse">
              NEW
            </span>
            <span>Newly Launched Course</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            <span className="gradient-text">Generative AI</span> Course
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            A complete online course covering the fundamentals and advanced concepts of Generative AI.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSE_MODULES.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`glass-card glass-card-hover rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                selectedModuleId === module.id
                  ? 'border-purple-500 bg-slate-900/90 shadow-xl shadow-purple-950/60 ring-1 ring-purple-500/50'
                  : 'border-slate-800/80 hover:border-purple-500/40'
              }`}
              onClick={() => setSelectedModuleId(selectedModuleId === module.id ? null : module.id)}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-purple-950/70 border border-purple-800/40 flex items-center justify-center">
                    {getModuleIcon(module.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800">
                    MODULE {module.number}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2.5 group-hover:text-purple-300 transition-colors">
                  {module.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {module.description}
                </p>
              </div>

              <div>
                {/* Topic Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {module.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-purple-950/40 border border-purple-800/30 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-medium text-purple-400">
                  <span className="flex items-center gap-1 text-slate-400">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    Interactive Syllabus
                  </span>
                  <span className="flex items-center text-purple-300 font-semibold group-hover:translate-x-1 transition-transform">
                    {selectedModuleId === module.id ? 'Close Details' : 'View Details'}
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Module Detail Modal / Drawer */}
        <AnimatePresence>
          {selectedModule && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 p-6 sm:p-8 rounded-2xl glass-card border-2 border-purple-500/50 bg-slate-950/90 shadow-2xl shadow-purple-950/80 relative"
            >
              <button
                onClick={() => setSelectedModuleId(null)}
                className="absolute top-4 right-4 text-xs font-semibold text-slate-400 hover:text-white px-3 py-1 rounded-lg bg-slate-900 border border-slate-800"
              >
                Close ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-900/50 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
                  MODULE {selectedModule.number} DETAILED SYLLABUS
                </span>
                <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Included in Course
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                {selectedModule.title}
              </h3>

              <p className="text-slate-300 text-base mb-6 leading-relaxed">
                {selectedModule.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-purple-400" /> Key Concept Takeaway
                  </h4>
                  <p className="text-sm text-purple-200 font-medium">
                    {selectedModule.keyTakeaway}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-cyan-400" /> Practical Skills Acquired
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedModule.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-slate-200">
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>Self-paced learning with mentor support</span>
                </div>
                <a
                  href={ENROLL_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-md shadow-purple-900/40 hover:scale-105 transition-all"
                >
                  <span>Enroll for this Course</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Course Summary Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-950/50 via-slate-900/80 to-indigo-950/50 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              Start Learning Generative AI Today
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Access all 9 comprehensive modules, hands-on lab environments, and mentor reviews fully online from anywhere in the world.
            </p>
          </div>
          <a
            href={ENROLL_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 transition-all duration-300 border border-purple-400/30"
          >
            <span>Enroll Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
