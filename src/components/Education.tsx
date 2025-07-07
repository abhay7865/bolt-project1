import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';
import AnimatedIcon from './AnimatedIcon';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="down" delay={0.2}>
          <div className="text-center mb-16 perspective-container">
            <div className="relative inline-block mb-6">
              <AnimatedIcon 
                src="https://cdn.lordicon.com/wxnxiano.json"
                trigger="loop"
                size={80}
                className="icon-spotlight"
              />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-centaur depth-layer-2 text-glow-enhanced">
              Education
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto depth-layer-1">
              Building a strong foundation in Computer Science and Engineering
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="max-w-2xl mx-auto perspective-container">
            <TiltCard
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
            >
              <div className="glass-card-enhanced glass-card-hover rounded-2xl p-8 shadow-enhanced border border-gray-700 card-3d-enhanced tech-element-enter">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#089cf1] to-blue-600 rounded-2xl flex items-center justify-center float-animation shadow-enhanced icon-container-enhanced">
                    <AnimatedIcon 
                      src="https://cdn.lordicon.com/wxnxiano.json"
                      trigger="hover"
                      size={32}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Bachelor of Technology (Computer Science)
                    </h3>
                    <div className="flex items-center gap-4 text-gray-300 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-semibold">Sharda University</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2022 - 2026</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Pursuing comprehensive education in Computer Science with specialization in AI and machine learning. 
                      Developing strong fundamentals in programming, algorithms, data structures, and modern software engineering practices.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {['Computer Science', 'AI/ML', 'Data Structures', 'Algorithms', 'Software Engineering'].map((subject, index) => (
                        <span
                          key={index}
                          className="glass-card-enhanced text-[#089cf1] px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 border border-[#089cf1]/30 btn-3d-enhanced skill-tag-enhanced"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Education;