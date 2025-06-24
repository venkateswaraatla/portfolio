import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'BNY Mellon',
      position: 'Senior Java Consultant',
      duration: 'Jun 2020 - Present · 5 yrs 1 mo',
      location: 'Jersey City, New Jersey, United States',
      color: 'bg-blue-600'
    },
    {
      company: 'AT&T',
      position: 'Senior Java Developer',
      duration: 'Jul 2012 - May 2020 · 7 yrs 11 mos',
      location: 'Middletown, New Jersey',
      color: 'bg-indigo-600'
    },
    {
      company: 'Citi',
      position: 'Team Leader',
      duration: 'Nov 2011 - Jun 2012 · 8 mos',
      location: 'Warren, New Jersey',
      color: 'bg-purple-600'
    },
    {
      company: 'Tech Mahindra',
      position: 'Sr Technical Associate',
      duration: 'Apr 2010 - Oct 2011 · 1 yr 7 mos',
      location: 'New Jersey',
      color: 'bg-green-600'
    },
    {
      company: 'Tech Mahindra',
      position: 'Technical Associate',
      duration: 'Aug 2006 - Mar 2010 · 3 yrs 8 mos',
      location: 'Noida, Uttar Pradesh, India',
      color: 'bg-emerald-600'
    },
    {
      company: 'iBilt Technologies',
      position: 'Sr Software Engineer',
      duration: 'Nov 2005 - Aug 2006 · 10 mos',
      location: 'New Delhi, Delhi, India',
      color: 'bg-orange-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">A journey through leading technology companies</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-orange-600"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 ${exp.color} rounded-full border-4 border-white shadow-lg`}></div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <Building size={16} className="mr-2" />
                          {exp.company}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;