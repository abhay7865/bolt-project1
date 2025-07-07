import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';
import AnimatedIcon from './AnimatedIcon';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Floating Animated Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-3d-icon" style={{ top: '10%', left: '10%' }}>
          <AnimatedIcon 
            src="https://cdn.lordicon.com/qhviklyi.json"
            trigger="loop"
            size={80}
            delay={0}
            className="icon-glow-blue"
          />
        </div>
        <div className="floating-3d-icon" style={{ top: '20%', right: '15%' }}>
          <AnimatedIcon 
            src="https://cdn.lordicon.com/wzwygmng.json"
            trigger="loop"
            size={60}
            delay={2}
            className="icon-glow-purple"
          />
        </div>
        <div className="floating-3d-icon" style={{ top: '60%', left: '5%' }}>
          <AnimatedIcon 
            src="https://cdn.lordicon.com/nocovwne.json"
            trigger="loop"
            size={70}
            delay={4}
            className="icon-glow-green"
          />
        </div>
        <div className="floating-3d-icon" style={{ bottom: '20%', right: '10%' }}>
          <AnimatedIcon 
            src="https://cdn.lordicon.com/tdrtiskw.json"
            trigger="loop"
            size={90}
            delay={1}
            className="icon-glow-orange"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 perspective-container">
        <div className="text-center">
          <ScrollReveal direction="down" delay={0.2}>
            <div className="mb-8 depth-layer-2">
              <div className="relative inline-block mb-6">
                <AnimatedIcon 
                  src="https://cdn.lordicon.com/kthelypq.json"
                  trigger="loop"
                  size={120}
                  className="mx-auto icon-spotlight"
                />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 transition-colors duration-300 font-centaur text-3d-enhanced">
                Abhay Mishra
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-6 transition-colors duration-300">
                <span className="inline-block animate-pulse float-animation text-glow-enhanced">Gen AI+Ops Engineer</span>
                <span className="mx-2 text-[#089cf1]">•</span>
                <span className="inline-block float-animation text-glow-enhanced" style={{ animationDelay: '1s' }}>B.Tech Student</span>
              </div>
              <p className="text-2xl md:text-3xl font-semibold text-[#089cf1] mb-8 font-centaur text-glow-enhanced">
                Engineering a future of AI
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="mb-12 depth-layer-1">
              <TiltCard 
                className="max-w-4xl mx-auto"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
              >
                <div className="glass-card-enhanced glass-card-hover rounded-2xl p-8 card-3d-enhanced">
                  <div className="flex items-center justify-center mb-4">
                    <AnimatedIcon 
                      src="https://cdn.lordicon.com/kkvxgpti.json"
                      trigger="hover"
                      size={48}
                      className="mr-4"
                    />
                    <AnimatedIcon 
                      src="https://cdn.lordicon.com/slkvcfos.json"
                      trigger="hover"
                      size={48}
                      className="ml-4"
                    />
                  </div>
                  <p className="text-lg text-gray-200 leading-relaxed transition-colors duration-300">
                    Passionate about artificial intelligence and operations engineering, with hands-on experience in 
                    backend development, cloud technologies, and DevOps practices. Currently pursuing B.Tech in Computer Science 
                    while gaining practical experience through internships at prestigious organizations like ISRO.
                  </p>
                </div>
              </TiltCard>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 depth-layer-3">
              <TiltCard tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.1}>
                <a
                  href="#contact"
                  className="glass-button-enhanced text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 btn-3d-enhanced"
                >
                  <AnimatedIcon 
                    src="https://cdn.lordicon.com/rhvddzym.json"
                    trigger="hover"
                    size={20}
                  />
                  Get In Touch
                </a>
              </TiltCard>
              <TiltCard tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.1}>
                <a
                  href="#experience"
                  className="glass-card-enhanced glass-card-hover text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 btn-3d-enhanced"
                >
                  <AnimatedIcon 
                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                    trigger="hover"
                    size={20}
                  />
                  View Experience
                </a>
              </TiltCard>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.8}>
            <div className="flex justify-center gap-6 depth-layer-2">
              <TiltCard tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.2}>
                <a
                  href="https://github.com/abhay7865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-card-enhanced glass-card-hover text-gray-300 hover:text-[#089cf1] hover:scale-110 transition-all duration-300 shadow-enhanced social-icon-3d-enhanced float-animation"
                >
                  <AnimatedIcon 
                    src="https://cdn.lordicon.com/kkiecexg.json"
                    trigger="hover"
                    size={24}
                  />
                </a>
              </TiltCard>
              <TiltCard tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.2}>
                <a
                  href="https://www.linkedin.com/in/abhay-mishra-950588226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-card-enhanced glass-card-hover text-gray-300 hover:text-[#089cf1] hover:scale-110 transition-all duration-300 shadow-enhanced social-icon-3d-enhanced float-animation"
                  style={{ animationDelay: '0.5s' }}
                >
                  <AnimatedIcon 
                    src="https://cdn.lordicon.com/iqagrlso.json"
                    trigger="hover"
                    size={24}
                  />
                </a>
              </TiltCard>
              <TiltCard tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.2}>
                <a
                  href="mailto:mishraabhay88k@gmail.com"
                  className="p-3 rounded-full glass-card-enhanced glass-card-hover text-gray-300 hover:text-[#089cf1] hover:scale-110 transition-all duration-300 shadow-enhanced social-icon-3d-enhanced float-animation"
                  style={{ animationDelay: '1s' }}
                >
                  <AnimatedIcon 
                    src="https://cdn.lordicon.com/rhvddzym.json"
                    trigger="hover"
                    size={24}
                  />
                </a>
              </TiltCard>
              <TiltCard tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.2}>
                <a
                  href="tel:9455644313"
                  className="p-3 rounded-full glass-card-enhanced glass-card-hover text-gray-300 hover:text-[#089cf1] hover:scale-110 transition-all duration-300 shadow-enhanced social-icon-3d-enhanced float-animation"
                  style={{ animationDelay: '1.5s' }}
                >
                  <AnimatedIcon 
                    src="https://cdn.lordicon.com/srsgifqc.json"
                    trigger="hover"
                    size={24}
                  />
                </a>
              </TiltCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <AnimatedIcon 
          src="https://cdn.lordicon.com/rxufjlal.json"
          trigger="loop"
          size={32}
        />
      </div>
    </section>
  );
};

export default Hero;