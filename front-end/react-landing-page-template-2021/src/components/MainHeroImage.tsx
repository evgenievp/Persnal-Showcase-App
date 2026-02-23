import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
<div style={{
  position: 'absolute',
  top: '80px',
  right: 0,
  width: '45%', 
  height: 'calc(100vh - 80px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}}>
  <img
  style={{
    width: '100%',
    height: '70%',
    objectFit: 'cover',
    zIndex: 10,
    objectPosition: 'center',
    marginTop: '130px',
    clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'  // ← трапец
  }}
  src={mainHero.img}
  alt="happy team image"
/>
</div>
  );
};

export default MainHeroImage;