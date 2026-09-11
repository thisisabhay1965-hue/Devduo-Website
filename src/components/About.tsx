import React from 'react';
import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header / DevDuo introduction */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>About</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1220] leading-tight">
            About DevDuo.
          </h2>
          <p className="mt-4 text-[#526078] text-base sm:text-lg leading-relaxed">
            DevDuo is a web development studio focused on creating modern websites that help businesses and individuals build a stronger presence online.
          </p>
        </div>

        {/* Label: The People Behind DevDuo */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            THE PEOPLE BEHIND DEVDUO
          </span>
        </div>

        {/* Abhay | Rehan Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-7 sm:p-8 rounded-2xl bg-[#F7F9FC] border border-slate-200/90 shadow-xs hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  {/* Clean avatar badge */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#1677FF] flex items-center justify-center font-heading text-base font-bold">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0B1220]">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-blue-600 tracking-wide uppercase mt-0.5">
                      {member.role}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#526078] leading-relaxed">
                  {member.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 font-medium">
                Direct collaboration from concept to launch
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
