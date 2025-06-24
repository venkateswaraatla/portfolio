import React from 'react';
import { Code, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Code size={48} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Senior Java Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Crafting scalable, enterprise-grade solutions with 15+ years of experience
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">5</h3>
              <p className="text-gray-600">Companies Worked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;