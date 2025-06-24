import React from 'react';
import { User, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-8 mb-8">
                <User className="text-blue-600 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
                <p className="text-gray-700 leading-relaxed">
                  I am working as Sr. Java Developer with extensive expertise in design and implementation 
                  of scalable data-driven, multi-tier systems which I have applied on a variety of projects 
                  from many domains including Telecom, Financial and Software industries.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-6">
                <Target className="text-green-600 mb-3" size={32} />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Expertise Focus</h4>
                <p className="text-gray-700">
                  Adept knowledge in building applications using Java/J2EE Frameworks and 
                  Microservices Architecture with a focus on enterprise-grade solutions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg p-6">
                <Zap className="text-purple-600 mb-3" size={32} />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Core Strengths</h4>
                <p className="text-gray-700">
                  Passionate about learning new technologies and take pride in code quality. 
                  Skilled at taking disorganized processes and building repeatability through 
                  automation, structure, and planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;