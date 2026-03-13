import React, { useState } from 'react';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
        <div className="max-w-3xl mx-auto text-center"> 
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10 cursor-pointer">
            About me
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold dark:text-white">About Me</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-semibold dark:text-white">Petar Evtimov</h3>
                  <p className="text-gray-600 dark:text-gray-400">Java Backend Developer</p>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="dark:text-gray-300">
Hello, my name is Petar Evtimov. I am a junior Java backend developer based in Sofia. I have a master's degree in philosophy, which developed my analytical thinking and problem-solving skills. In recent years I have focused on backend development, building projects with Java and Spring Boot, working with databases and REST APIs. Currently looking for a junior Java backend developer position where I can grow and contribute to real-world projects.
                  </p>
                  
                  <h4 className="font-semibold mt-4 dark:text-white">Technologies:</h4>
                  <ul className="list-disc pl-5 dark:text-gray-300">
                    <li>Backend: Java, Spring Boot, Node.js</li>
                    <li>Database: PostgreSQL, MSSQL</li>
                    <li>Tools: Git, Docker, AWS</li>
                  </ul>

                  <h4 className="font-semibold mt-4 dark:text-white">Contacts:</h4>
                  <p className="dark:text-gray-300">📧 evgenievp@yahoo.com</p>
                  <p className="dark:text-gray-300">📍 Sofia, Bulgaria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;