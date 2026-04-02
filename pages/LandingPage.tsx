import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does this solve the infrastructure problem in rural schools?",
      answer: "Setting up physical chemistry labs or procuring biological specimens is expensive and requires constant maintenance. This virtual system replaces millions in physical infrastructure costs with a single screen and camera, allowing underfunded schools to provide top-tier laboratory experiences instantly."
    },
    {
      question: "Can students really learn surgical procedures without physical models?",
      answer: "Yes! High-fidelity 3D modeling combined with gesture-based interactions develops spatial awareness. Students can practice complex procedures like anatomy dissection in a zero-risk virtual environment before ever touching physical tools."
    },
    {
      question: "Why use Hand Tracking instead of VR controllers?",
      answer: "Accessibility. Providing expensive AR/VR headsets or specialized gaming controllers is not feasible for mass deployment in remote areas. Using standard webcams for hand tracking means any basic school computer can instantly become an interactive lab station."
    },
    {
      question: "Is this aligned with the New Education Policy (NEP)?",
      answer: "Absolutely. It directly aligns with the mandate for experiential learning, digital integration, and equitable access to education. It bridges the digital divide by democratizing premium educational content."
    }
  ];
  const experiences = [
    {
      id: 'solar-system',
      title: 'SOLAR SYSTEM',
      description: 'Explore the cosmos with gesture-controlled navigation through planets',
      gradient: 'from-purple-600 via-blue-600 to-cyan-600',
      icon: '🌌',
      route: '/solar-system'
    },
    {
      id: 'anatomy',
      title: 'ANATOMY LAB',
      description: 'Interactive 3D heart model with surgical simulation',
      gradient: 'from-red-600 via-pink-600 to-rose-600',
      icon: '🫀',
      route: '/anatomy'
    },
    {
      id: 'chemistry',
      title: 'CHEMISTRY LAB',
      description: 'Virtual laboratory with interactive chemical reactions',
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      icon: '🧪',
      route: '/chemistry'
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      {/* Animated Particles Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12 px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            MIH 2026
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wider">
            Pathshala
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => navigate(exp.route)}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />

              {/* Card Content */}
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-64 flex flex-col justify-between hover:border-white/20 transition-all duration-300">

                {/* Icon and Title */}
                <div>
                  <div className="text-4xl mb-4">{exp.icon}</div>
                  <h2 className="text-2xl font-bold mb-2 tracking-wider">
                    {exp.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${exp.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm font-mono mb-8">
            CLICK ANY EXPERIENCE TO BEGIN • ENABLE CAMERA FOR HAND TRACKING
          </p>
        </div>

        {/* MIH 2026 Pitch Section */}
        <div className="max-w-4xl w-full text-center bg-gray-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-purple-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="relative z-10 text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 tracking-wide uppercase">
            Democratizing Education for MIH 2026
          </h3>
          <p className="relative z-10 text-gray-300 text-base md:text-lg leading-relaxed font-light">
            Bringing state-of-the-art virtual laboratories to rural areas. Students can now experience interactive, high-fidelity medical and science labs firsthand. Without the need for expensive physical infrastructure, learners can <strong className="text-white font-medium">perform surgical simulations, explore the cosmos, and conduct complex chemical reactions</strong> directly through their screens—making world-class education accessible to everyone.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="mt-12 w-full max-w-4xl pb-16 z-10">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 text-center uppercase tracking-wider">
            Why This Solution Wins MIH 2026
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-gray-200">{faq.question}</span>
                  <span className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                >
                  <p className="px-6 pb-4 text-gray-400 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-ping animation-delay-2000" />
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-pink-400 rounded-full animate-ping animation-delay-4000" />
    </div>
  );
};

export default LandingPage;
