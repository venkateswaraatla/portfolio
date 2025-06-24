import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'Sri Venkateswara University',
      degree: 'Master of Computer Applications - MCA',
      field: 'Computer Science',
      duration: '2001 - 2004',
      color: 'bg-blue-600'
    },
    {
      institution: 'Acharya Nagarjuna University',
      degree: 'Bachelor of Science - BS',
      field: 'Maths, Physics and Chemistry',
      duration: '1997 - 2000',
      color: 'bg-indigo-600'
    },
    {
      institution: 'Nehru Yuva Kendra',
      degree: 'Post Graduate Diploma in Computer Applications',
      field: 'Computer Programming, Specific Applications',
      duration: '1997 - 1998',
      color: 'bg-purple-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Academic foundation in computer science and technology</p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`w-16 h-16 ${edu.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.institution}</h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <Award size={16} className="mr-2" />
                          {edu.degree}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        {edu.duration}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 font-medium">{edu.field}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;