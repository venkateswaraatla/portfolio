import React from 'react';
import { Coffee, Cloud, Database, Cog, Code2, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Java/J2EE',
      icon: <Coffee className="text-orange-600" size={32} />,
      skills: ['Java 1.8/17/21', 'Servlets', 'JSP', 'JSTL', 'JSF', 'EJB', 'JNDI', 'JDBC', 'JMS', 'JPA', 'RMI', 'Maven', 'Gradle']
    },
    {
      title: 'Frameworks',
      icon: <Code2 className="text-green-600" size={32} />,
      skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Batch', 'Spring AOP', 'Struts', 'JUnit', 'Mockito', 'Angular 6', 'React']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="text-blue-600" size={32} />,
      skills: ['AWS EC2', 'AWS S3', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'Sonar', 'Veracode', 'Kibana']
    },
    {
      title: 'Big Data',
      icon: <Database className="text-purple-600" size={32} />,
      skills: ['HDFS', 'MapReduce', 'Pig', 'Hive', 'HBase', 'Cassandra', 'MongoDB', 'Kafka', 'Storm', 'Zookeeper']
    },
    {
      title: 'Web Services',
      icon: <Server className="text-indigo-600" size={32} />,
      skills: ['REST', 'SOAP', 'JAX-WS', 'JAXB', 'JAX-RPC', 'AXIS', 'Jersey', 'SOAP UI']
    },
    {
      title: 'Tools & Others',
      icon: <Cog className="text-gray-600" size={32} />,
      skills: ['Eclipse', 'IntelliJ', 'Tomcat', 'WebLogic', 'JBoss', 'Oracle', 'SQL Server', 'XML', 'XSLT', 'JavaScript', 'jQuery']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Proficiency</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Comprehensive expertise across modern technologies and frameworks</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;