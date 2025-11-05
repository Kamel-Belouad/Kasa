import { useState } from 'react';

export const Slider = ({ slides }) => { 
 
  if (!slides || slides.length === 0) return null;

  const [current, setCurrent] = useState(0);

  return (
    <div>
      <img src={slides[current]} alt={`Slide ${current + 1}`}/>
    </div>
  );
};
