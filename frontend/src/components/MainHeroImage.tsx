import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-xl items-center justify-center lg:max-w-none">
      <img
        className="hero-image h-64 w-full rounded-md object-cover object-center shadow-lg sm:h-80 md:h-96 lg:h-[32rem]"
        src={mainHero.img}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
