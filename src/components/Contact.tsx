import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';
import AnimatedIcon from './AnimatedIcon';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      iconSrc: 'https://cdn.lordicon.com/rhvddzym.json',
      label: 'Email',
      value: 'mishraabhay88k@gmail.com',
      link: 'mailto:mishraabhay88k@gmail.com'
    },
    {
      iconSrc: 'https://cdn.lordicon.com/srsgifqc.json',
      label: 'Phone',
      value: '+91 9455644313',
      link: 'tel:9455644313'
    },
    {
      iconSrc: 'https://cdn.lordicon.com/kkiecexg.json',
      label: 'GitHub',
      value: 'abhay7865',
      link: 'https://github.com/abhay7865'
    },
    {
      iconSrc: 'https://cdn.lordicon.com/iqagrlso.json',
      label: 'LinkedIn',
      value: 'abhay-mishra-950588226',
      link: 'https://www.linkedin.com/in/abhay-mishra-950588226/'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="down" delay={0.2}>
          <div className="text-center mb-16 perspective-container">
            <div className="relative inline-block mb-6">
              <AnimatedIcon 
                src="https://cdn.lordicon.com/rhvddzym.json"
                trigger="loop"
                size={80}
                className="icon-spotlight"
              />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-centaur depth-layer-2 text-glow-enhanced">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto depth-layer-1">
              Ready to collaborate on innovative AI and DevOps projects. Let's build the future together!
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto perspective-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal direction="left" delay={0.4}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <TiltCard
                      key={index}
                      tiltMaxAngleX={8}
                      tiltMaxAngleY={8}
                      scale={1.05}
                    >
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 glass-card-enhanced glass-card-hover rounded-xl transition-all duration-300 group contact-card-3d-enhanced tech-element-enter"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-12 h-12 bg-[#089cf1]/20 rounded-xl flex items-center justify-center text-[#089cf1] group-hover:bg-[#089cf1] group-hover:text-white transition-all duration-300 float-animation border border-[#089cf1]/30 icon-container-enhanced">
                          <AnimatedIcon 
                            src={item.iconSrc}
                            trigger="hover"
                            size={24}
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">
                            {item.label}
                          </p>
                          <p className="text-white font-medium">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.6}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Connect
                </h3>
                <TiltCard
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.03}
                >
                  <div className="glass-card-enhanced glass-card-hover rounded-2xl p-8 card-3d-enhanced tech-element-enter">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#089cf1] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 float-animation shadow-enhanced icon-container-enhanced">
                        <AnimatedIcon 
                          src="https://cdn.lordicon.com/rhvddzym.json"
                          trigger="loop"
                          size={32}
                        />
                      </div>
                      <p className="text-gray-300 mb-6">
                        Interested in discussing AI/ML projects, DevOps collaboration, or internship opportunities? 
                        I'm always excited to connect with fellow tech enthusiasts and industry professionals.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <TiltCard tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.1}>
                        <a
                          href="mailto:mishraabhay88k@gmail.com"
                          className="flex-1 glass-button-enhanced text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 btn-3d-enhanced"
                        >
                          <AnimatedIcon 
                            src="https://cdn.lordicon.com/rhvddzym.json"
                            trigger="hover"
                            size={20}
                          />
                          Send Email
                        </a>
                      </TiltCard>
                      <TiltCard tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.1}>
                        <a
                          href="https://www.linkedin.com/in/abhay-mishra-950588226/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 glass-card-enhanced glass-card-hover text-white px-6 py-3 rounded-xl font-semibold border border-gray-600 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 btn-3d-enhanced"
                        >
                          <AnimatedIcon 
                            src="https://cdn.lordicon.com/iqagrlso.json"
                            trigger="hover"
                            size={20}
                          />
                          Connect
                        </a>
                      </TiltCard>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;