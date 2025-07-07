import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';
import AnimatedIcon from './AnimatedIcon';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Back-end Engineer Intern',
      company: 'PRL (ISRO)',
      duration: '45 days',
      location: 'India',
      description: 'Worked on a running ADC (Atmospheric Dispersion Corrector) project, contributing to backend development and system optimization.',
      skills: ['Backend Development', 'System Optimization', 'Space Technology'],
      type: 'Internship',
      iconSrc: 'https://cdn.lordicon.com/nocovwne.json'
    },
    {
      title: 'GenAI Ops (Creator) Trainee',
      company: 'Linux World',
      duration: 'Summer Training',
      location: 'Under guidance of Mr. Vimal Daga',
      description: 'Specialized training in Generative AI operations, focusing on AI model deployment, optimization, and operational excellence.',
      skills: ['Generative AI', 'AI Operations', 'Model Deployment', 'Linux'],
      type: 'Training',
      iconSrc: 'https://cdn.lordicon.com/kkvxgpti.json'
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="down" delay={0.2}>
          <div className="text-center mb-16 perspective-container">
            <div className="relative inline-block mb-6">
              <AnimatedIcon 
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="loop"
                size={80}
                className="icon-spotlight"
              />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-centaur depth-layer-2 text-glow-enhanced">
              Work Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto depth-layer-1">
              Gaining hands-on experience in cutting-edge technology organizations
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto perspective-container">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#089cf1] via-[#0ea5e9] to-[#089cf1] opacity-50 timeline-enhanced"></div>
            
            {experiences.map((exp, index) => (
              <ScrollReveal 
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.3}
              >
                <div className="relative mb-12 ml-16">
                  <div className="absolute -left-12 w-8 h-8 bg-gradient-to-r from-[#089cf1] to-[#0ea5e9] rounded-full border-4 border-transparent float-animation shadow-enhanced timeline-node-enhanced flex items-center justify-center">
                    <AnimatedIcon 
                      src={exp.iconSrc}
                      trigger="loop"
                      size={16}
                    />
                  </div>
                  
                  <TiltCard
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    scale={1.03}
                  >
                    <div className="glass-card-enhanced glass-card-hover rounded-2xl p-8 shadow-enhanced border border-gray-700 card-3d-enhanced tech-element-enter">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-4 text-gray-300 mb-2">
                            <div className="flex items-center gap-1">
                              <AnimatedIcon 
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover"
                                size={16}
                              />
                              <span className="font-semibold">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <span className="glass-button-enhanced text-white px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 btn-3d-enhanced">
                          {exp.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="glass-card-enhanced text-[#089cf1] px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 border border-[#089cf1]/30 btn-3d-enhanced skill-tag-enhanced"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;