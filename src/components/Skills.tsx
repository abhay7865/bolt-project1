import React from 'react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';
import AnimatedIcon from './AnimatedIcon';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      iconSrc: 'https://cdn.lordicon.com/qhviklyi.json',
      skills: ['Python', 'JavaScript', 'Java', 'C'],
      color: 'from-blue-400 to-blue-600',
      glowColor: 'blue'
    },
    {
      title: 'DevOps & Tools',
      iconSrc: 'https://cdn.lordicon.com/wzwygmng.json',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitBash'],
      color: 'from-green-400 to-green-600',
      glowColor: 'green'
    },
    {
      title: 'Cloud & Infrastructure',
      iconSrc: 'https://cdn.lordicon.com/nocovwne.json',
      skills: ['AWS', 'RHEL', 'RedHat', 'Linux'],
      color: 'from-purple-400 to-purple-600',
      glowColor: 'purple'
    },
    {
      title: 'Package Managers',
      iconSrc: 'https://cdn.lordicon.com/tdrtiskw.json',
      skills: ['npm', 'pip'],
      color: 'from-orange-400 to-orange-600',
      glowColor: 'orange'
    },
    {
      title: 'Version Control',
      iconSrc: 'https://cdn.lordicon.com/kkiecexg.json',
      skills: ['GitHub', 'Git'],
      color: 'from-pink-400 to-pink-600',
      glowColor: 'pink'
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="down" delay={0.2}>
          <div className="text-center mb-16 perspective-container">
            <div className="relative inline-block mb-6">
              <AnimatedIcon 
                src="https://cdn.lordicon.com/slkvcfos.json"
                trigger="loop"
                size={80}
                className="icon-spotlight"
              />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-centaur depth-layer-2 text-glow-enhanced">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto depth-layer-1">
              Comprehensive expertise across multiple technologies and frameworks
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
          {skillCategories.map((category, index) => (
            <ScrollReveal 
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <TiltCard
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                scale={1.05}
                className="h-full"
              >
                <div className="glass-card-enhanced glass-card-hover rounded-2xl p-8 shadow-enhanced border border-gray-700 skill-card-3d-enhanced tech-element-enter h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-6 float-animation icon-container-enhanced`}>
                    <AnimatedIcon 
                      src={category.iconSrc}
                      trigger="hover"
                      size={32}
                      className={`icon-glow-${category.glowColor}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="glass-card-enhanced text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-[#089cf1] hover:text-white transition-all duration-300 cursor-default hover:scale-105 btn-3d-enhanced skill-tag-enhanced"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;