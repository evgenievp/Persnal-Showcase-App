import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import config from '../config/index.json';

const MainHero = () => {
  const router = useRouter();
  const { mainHero } = config;

  useEffect(() => {
    localStorage.getItem('token');
  }, []);

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    if (token) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log('Projects section not found');
      }
    } else {
      router.push('/login');
    }
  };

  return (
    <main className="mx-auto max-w-3xl py-8 sm:py-10 lg:max-w-none lg:py-0">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl font-extrabold tracking-normal text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          <span className={`block text-primary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="#"
              onClick={handleGetStarted}
              className={`flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-background hover:bg-border hover:text-primary md:px-10 md:py-4 md:text-lg`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div>
            <a
              href={mainHero.secondaryAction.href}
              className={`flex w-full items-center justify-center rounded-md border border-primary bg-background px-6 py-3 text-base font-medium text-secondary hover:bg-border hover:text-primary md:px-10 md:py-4 md:text-lg`}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
